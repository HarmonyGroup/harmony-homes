"use client";

import React, { useEffect, useState } from "react";
import NewListingModal from "@/components/admin/NewListingModal";
import { toast } from "react-toastify";
import { IoSearch } from "react-icons/io5";
import { CgTrashEmpty } from "react-icons/cg";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";
import ListingActionDropdown from "@/components/admin/ListingActionDropdown";
import { LoaderIcon } from "lucide-react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    // setListings(true);
    try {
      const response = await fetch("/api/listings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Error fetching products!");
      }

      const data = await response.json();
      console.log(data);

      setListings(data.reverse());
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleListingCreated = async () => {
    await getListings();
  };

  const handleDeleteListing = async (listingId) => {
    try {
      const response = await fetch("/api/listings", {
        method: "DELETE",
        body: JSON.stringify({ id: listingId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Listing deleted successfully!");
      }

      await getListings();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const filteredListings = listings?.filter((listing) =>
    listing?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold">All Listings</h1>
          <p className="text-sm font-normal text-gray-500 mt-1">
            Create and manage all listings here.
          </p>
        </div>
        <div>
          <NewListingModal />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-60">
          <LoaderIcon size={30} className="animate-spin text-black" />
        </div>
      ) : (
        <>
          <div className="w-full flex items-center justify-end mt-8">
            <form className="w-full flex items-center md:justify-end">
              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search product here..."
                  className="w-full bg-gray-100 text-xs border border-gray-200 rounded-lg outline-none pl-9 pr-5 py-3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </form>
          </div>

          {filteredListings?.length > 0 ? (
            <div className="overflow-x-auto">
              <Table className="mt-6 min-w-full">
                <TableHeader className="bg-gray-100 hover:bg-gray-100 text-gray-500 text-sm">
                  <TableRow>
                    <TableHead className="whitespace-nowrap font-medium">
                      Listing Title
                    </TableHead>
                    <TableHead className="text-center whitespace-nowrap font-medium px-14">
                      Listing Purpose
                    </TableHead>
                    <TableHead className="text-center whitespace-nowrap font-medium px-14">
                      Listing Price (&#8358;)
                    </TableHead>

                    <TableHead className="text-right whitespace-nowrap font-medium">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredListings?.length > 0 &&
                    filteredListings?.map((listing, index) => (
                      <TableRow key={index}>
                        <TableCell className="flex items-center gap-1 font-medium max-w-[300px] truncate py-4">
                          {listing?.images?.[0] && (
                            <img
                              src={listing?.images[0]}
                              alt={listing?.title}
                              className="w-10 h-10 mr-2 rounded-full"
                            />
                          )}
                          <p className="truncate font-medium">
                            {listing?.title}
                          </p>
                        </TableCell>
                        <TableCell className="text-center px-14 capitalize truncate font-medium max-w-[300px]">
                          {listing?.description}
                        </TableCell>
                        <TableCell className="text-center px-14 font-medium">
                          {formatPrice(listing?.price)}
                        </TableCell>
                        <TableCell className="float-end">
                          <ListingActionDropdown
                            listing={listing}
                            onEdit={setSelectedListing}
                            onListingEdited={handleListingCreated}
                            onDelete={handleDeleteListing}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="w-full h-96 flex flex-col items-center justify-center">
              <p className="bg-gray-100 text-gray-400 text-xl rounded-full p-3">
                <CgTrashEmpty />
              </p>
              <p className="text-xs text-gray-500 font-normal mt-4">
                No listing!
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
