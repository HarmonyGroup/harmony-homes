import NextAuth from "next-auth";
import { Users } from "@/models/Users";
import * as mongoose from "mongoose";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongoConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

mongoose.connect(process.env.MONGODB_URI);

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        try {
          const user = await Users.findOne({ username });
          console.log(user);
          if (user && (password === user?.password)) {
            return {
              id: user._id.toString(),
              username: user.username,
              email: user.email,
            };
          }
        } catch (error) {
          console.error(error);
        }
        return null; // or throw an error
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session?.user) {
        return { ...token, ...session.user };
      }

      if (user) {
        return { ...token, ...user };
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          username: token.username,
          email: token.email,
        };
      }
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
