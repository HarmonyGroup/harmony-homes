"use client";

import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { BsCloudUpload, BsFillInfoCircleFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const NewListingModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  // const [brandNew, setBrandNew] = useState(null);
  // const [ensuite, setEnsuite] = useState(null);
  // const [balcony, setBalcony] = useState(null);
  // const [tub, setTub] = useState(null);
  // const [bg, setBq] = useState(null);
  // const [contemporaryDesign, setContemporaryDesign] = useState(null);
  // const [diningArea, setDiningArea] = useState(null);
  // const [familyLounge, setFamilyLounge] = useState(null);
  // const [fittedKitchen, setFittedKitchen] = useState(null);
  // const [pop, setPop] = useState(null);
  // const [securedEstate, setSecuredEstate] = useState(null);
  // const [spaciousCompound, setSpaciousCompound] = useState(null);
  // const [spaciousLivingArea, setSpaciousLivingArea] = useState(null);
  // const [swimmingPool, setSwimmingPool] = useState(null);
  // const [walkInCloset, setWalkInCloset] = useState(null);
  // const [walkInShower, setWalkInShower] = useState(null);
  // const [waterHeater, setWaterHeater] = useState(null);
  const [images, setImages] = useState([]);

  const [features, setFeatures] = useState({
    brandNew: false,
    ensuite: false,
    balcony: false,
    tub: false,
    bq: false,
    contemporaryDesign: false,
    diningArea: false,
    familyLounge: false,
    fittedKitchen: false,
    pop: false,
    securedEstate: false,
    spaciousCompound: false,
    spaciousLivingArea: false,
    swimmingPool: false,
    walkInCloset: false,
    walkInShower: false,
    waterHeater: false,
  });

  const uploadImages = async (e) => {
    const files = e.target?.files;

    if (files?.length > 0) {
      setUploading(true);
      const data = new FormData();
      data.append("file", files[0]);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });

        const result = await response.json();

        console.log(result);

        if (response.ok) {
          console.log("Image uploaded:", result); // Log the link to verify
          setImages((prevImages) => [...prevImages, result]); // Assuming result.link contains the image URL
          toast.success("Image uploaded successfully!");
        } else {
          console.error("Upload failed", result);
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.error("Error uploading image", error);
        toast.error("Something went wrong!");
        // Handle error appropriately here, maybe show a toast notification
      } finally {
        setUploading(false);
      }
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
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
    };

    try {
      const response = await fetch("/api/listings", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.ok) {
        toast.success("Listing created successfully");
      } else {
        toast.error(`Something went wrong!`);
      }
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="animation bg-black text-white text-xs flex items-center gap-2 rounded-lg px-4 py-3 hover:opacity-80"
        onClick={() => setShowModal(true)}
      >
        <span>
          <AiOutlinePlusCircle className="text-[16px]" />
        </span>
        New Listing
      </button>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999999999] px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl rounded-lg p-7 h-full max-h-[80vh] overflow-y-scroll"
          >
            <h1 className="text-xl font-bold">Create New Listing</h1>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              {/* Title */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Listing Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">
                  Listing Description{" "}
                </label>
                <textarea
                  name="description"
                  rows="3"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                ></textarea>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Listing Price</label>
                <input
                  type="number"
                  name="price"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Listing Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                />
              </div>

              {/* Purpose */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Listing Purpose</label>
                <select
                  name="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                >
                  <option value="">Select listing purpose</option>
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                </select>
              </div>

              {/* Type */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Listing Type</label>
                <select
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                >
                  <option value="">Select listing type</option>
                  <option value="duplex">Duplex</option>
                  <option value="bungalow">Bungalow</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">No of bedrooms</label>
                <input
                  type="number"
                  name="bedrooms"
                  required
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                />
              </div>

              {/* Bathrooms */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">No of bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  required
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="text-sm font-medium border border-input rounded-lg px-3 py-2 outline-none focus:border-default"
                />
              </div>

              <div className="grid grid-cols-3 space-y-8">
                {Object.keys(features).map((feature) => (
                  <div
                    key={feature}
                    className="col-span-1 flex items-center gap- 3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={feature}
                      name={feature}
                      checked={features[feature]}
                      onChange={handleCheckboxChange}
                      className="size-4"
                    />
                    <label
                      htmlFor={feature}
                      className="text-sm font-semibold cursor-pointer"
                    >
                      {feature.replace(/([A-Z])/g, " $1").trim()}{" "}
                      {/* Format feature name */}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">
                  Listing Images{" "}
                  {uploading && (
                    <p className="flex items-center text-green-600">
                      <Loader2 size={15} className="animate-spin" />
                      Uploading...
                    </p>
                  )}
                </label>

                <div className="flex items-center flex-wrap gap-4">
                  {images?.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {images?.map((img, index) => (
                        <div key={index} className="relative">
                          <div className="w-36 h-36 bg-gray-100 flex items-center justify-center text-xs text-gray-500 rounded-lg border border-dashed border-gray-200">
                            <img
                              src={img}
                              alt="Product Image"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <label className="w-36 h-36 bg-gray-100 flex flex-col gap-1 items-center justify-center text-xs text-gray-500 rounded-lg border border-dashed border-gray-200 cursor-pointer">
                    <BsCloudUpload />
                    upload
                    <input
                      type="file"
                      className="hidden"
                      onChange={uploadImages}
                    />
                  </label>
                </div>
                <p className="flex gap-2 bg-red-50 text-xs text-red-500 rounded-lg px-2 py-3">
                  <BsFillInfoCircleFill className="mt-0.5" />
                  First image uploaded will be selected as product avatar
                </p>
              </div>

              <div className="w-full !mt-12">
                <Button className="w-full py-6">Create Listing</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewListingModal;
