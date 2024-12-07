import { useState, useEffect } from "react";
import { Select } from "../ui/select";
import { BsCloudUpload, BsFillInfoCircleFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

const EditListingModal = ({ listing, setEdit, onListingEdited }) => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(listing?.title || "");
  const [description, setDescription] = useState(listing?.description || "");
  const [price, setPrice] = useState(listing?.price || "");
  const [address, setAddress] = useState(listing?.address || "");
  const [purpose, setPurpose] = useState(listing?.purpose || "");
  const [type, setType] = useState(listing?.type || "");
  const [bedrooms, setBedrooms] = useState(listing?.bedrooms || null);
  const [bathrooms, setBathrooms] = useState(listing?.bathrooms || null);
  const [images, setImages] = useState(listing?.images || []);

  const [features, setFeatures] = useState({
    brandNew: listing?.brandNew || false,
    ensuite: listing?.ensuite || false,
    balcony: listing?.balcony || false,
    tub: listing?.tub || false,
    bq: listing?.bq || false,
    contemporaryDesign: listing?.contemporaryDesign || false,
    diningArea: listing?.diningArea || false,
    familyLounge: listing?.familyLounge || false,
    fittedKitchen: listing?.fittedKitchen || false,
    pop: listing?.pop || false,
    securedEstate: listing?.securedEstate || false,
    spaciousCompound: listing?.spaciousCompound || false,
    spaciousLivingArea: listing?.spaciousLivingArea || false,
    swimmingPool: listing?.swimmingPool || false,
    walkInCloset: listing?.walkInCloset || false,
    walkInShower: listing?.walkInShower || false,
    waterHeater: listing?.waterHeater || false,
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

    try {
      const response = await fetch("/api/listings", {
        method: "PUT",
        body: JSON.stringify({
          id: listing?._id,
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
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.ok) {
        toast.success("Listing edited successfully");
        setEdit(false);

        if (onListingEdited) {
          onListingEdited();
        }
      } else {
        throw new Error("Failed to update listing");
      }
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setEdit(false)}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-3xl rounded-lg p-7 h-full max-h-[80vh] overflow-y-scroll"
        >
          <h1 className="text-xl font-bold">Edit Listing</h1>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
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
                  className="col-span-1 flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={feature}
                    name={feature}
                    checked={features[feature]}
                    onChange={handleCheckboxChange}
                    className="size-4 accent-black"
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

            <div className="flex flex-col gap-3 mt-5">
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
                First image uploaded will be selected as listing avatar
              </p>
            </div>

            <div className="w-full !mt-12">
              <Button type="submit" disabled={loading} className="w-full py-6">
                {loading ? "Saving..." : "Edit Listing"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditListingModal;
