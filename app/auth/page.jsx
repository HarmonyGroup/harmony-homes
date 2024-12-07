"use client";

import React, { useState } from "react";
import BG from "@/assets/asset-7.jpg";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { authFormSchema } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(authFormSchema()),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });

      console.log(response);
      

      if (response.error) {
        toast.error("Invalid credentials!");
      } else if (response.ok) {
        toast.success("Logged in successfully!");
        const userResponse = await fetch("/api/auth/session");
        const userData = await userResponse.json();
        console.log(userData);

        if (userData) {
          router.push("/");
        } else {
          router?.refresh();
        }
      }
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[100vh] w-full flex flex-col items-center justify-center">
      <Image src={BG} layout="fill" objectFit="cover" className="blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-[#3C0C64]/65"></div>
      <div className="w-full max-w-lg relative p-14 rounded-lg bg-black/20 border border-white/10">
        <h3 className="text-white text-3xl font-bold mt-3">
          Welcome back, Admin
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-white text-base">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      className="text-white px-3 py-5 placeholder:text-gray-300 border border-white/30"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F9DF4C] text-[12px]" />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              type="password"
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-white text-base">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      className="text-white px-3 py-5 placeholder:text-gray-300 border border-white/30"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F9DF4C] text-[12px]" />
                </div>
              )}
            />
            <div className="!mt-7">
              <Button disabled={loading} className="w-full bg-white text-black font-semibold !py-5 hover:bg-white">
                {!loading ? "Login" : "Please wait..."}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <p className="text-white text-sm font-semibold relative mt-7">
        &copy; Harmony Homes NG 2024
      </p>
    </div>
  );
};

export default Page;
