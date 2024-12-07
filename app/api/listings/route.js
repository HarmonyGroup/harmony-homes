import { mongooseConnect } from "@/lib/mongoose";
import { Listings } from "@/models/Listing";
import mongoose from "mongoose";

export const POST = async (req) => {
  await mongooseConnect();

  const {
    title,
    description,
    price,
    address,
    purpose,
    type,
    bedrooms,
    bathrooms,
    features,
    images,
  } = await req.json();

  const listingDoc = await Listings.create({
    title,
    description,
    price,
    address,
    purpose,
    type,
    bedrooms,
    bathrooms,
    ...features,
    images,
  });

  return Response.json(listingDoc);
};

export const GET = async () => {
  try {
    await mongooseConnect();
    const listings = await Listings.find();
    return new Response(JSON.stringify(listings), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const PUT = async (req) => {
  await mongooseConnect();
  const {
    id,
    title,
    description,
    price,
    address,
    purpose,
    type,
    bedrooms,
    bathrooms,
    features,
    images,
  } = await req.json();

  try {
    const listingDoc = await Listings.findByIdAndUpdate(id, {
      title,
      description,
      price,
      address,
      purpose,
      type,
      bedrooms,
      bathrooms,
      features,
      images,
    });

    return new Response(JSON.stringify(listingDoc), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const DELETE = async (req) => {
  await mongooseConnect();
  const { id } = await req.json();
  await Listings.findByIdAndDelete(id);
  return new Response('Listing deleted successfully', { status: 200 });
};
