"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import EditListingModal from "./EditListingModal";
import DeleteListingModal from "./DeleteListingModal";

const ListingActionDropdown = ({
  listing,
  onDelete,
  onEdit,
  onListingEdited,
}) => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <DropdownMenu className="overflow-visible">
        {edit && (
            <EditListingModal
                listing={listing}
                setEdit={setEdit}
                onListingEdited={onListingEdited}
            />
        )}
        {modal && (
            <DeleteListingModal
                setModal={setModal}
                onDelete={() => onDelete(listing?._id)}
            />
        )}
      <DropdownMenuTrigger className="flex items-center justify-center text-sm font-medium outline-none">
        <BsThreeDotsVertical className="text-gray-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 mr-6">
        <DropdownMenuItem>
          <button
            onClick={() => {
              setEdit(true);
              onEdit(listing);
            }}
            className="w-full flex items-center gap-2.5 text-xs"
          >
            <span className="">
              <FiEdit />
            </span>
            Edit
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="overflow-visible">
          <button
            onClick={() => setModal(true)}
            className="w-full flex items-center gap-2.5 text-xs"
          >
            <span className="">
              <FiTrash2 />
            </span>
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ListingActionDropdown;
