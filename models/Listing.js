import mongoose, { Schema, model, models } from "mongoose";

const ListingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    brandNew: {
      type: Boolean,
      required: true,
      default: false,
    },
    ensuite: {
      type: Boolean,
      required: true,
      default: false,
    },
    balcony: {
      type: Boolean,
      required: true,
      default: false,
    },
    tub: {
      type: Boolean,
      required: true,
      default: false,
    },
    bq: {
      type: Boolean,
      required: true,
      default: false,
    },
    contemporaryDesign: {
      type: Boolean,
      required: true,
      default: false,
    },
    diningArea: {
      type: Boolean,
      required: true,
      default: false,
    },
    familyLounge: {
      type: Boolean,
      required: true,
      default: false,
    },
    fittedKitchen: {
      type: Boolean,
      required: true,
      default: false,
    },
    pop: {
      type: Boolean,
      required: true,
      default: false,
    },
    securedEstate: {
      type: Boolean,
      required: true,
      default: false,
    },
    spaciousCompound: {
      type: Boolean,
      required: true,
      default: false,
    },
    spaciousLivingArea: {
      type: Boolean,
      required: true,
      default: false,
    },
    swimmingPool: {
      type: Boolean,
      required: true,
      default: false,
    },
    walkInCloset: {
      type: Boolean,
      required: true,
      default: false,
    },
    walkInShower: {
      type: Boolean,
      required: true,
      default: false,
    },
    waterHeater: {
      type: Boolean,
      required: true,
      default: false,
    },
    images: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Listings = models?.Listings || model("Listings", ListingSchema);
