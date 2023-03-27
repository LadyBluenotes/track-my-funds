import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { PencilIcon } from "@heroicons/react/24/solid";
import ProtectedPage from "./components/ProtectedPage";
import UserProfileModal from "./components/UserProfileModal";
import Image from "next/image";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const { data: session } = useSession();

  let editModal = () => {
    setEdit(true);
  };

  const closeModal = () => {
    setEdit(false);
  };

  return (
    <ProtectedPage>
      {edit ? <UserProfileModal hideModal={closeModal} /> : null}
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl bg-white mx-auto mt-10">
        <div className="flex space-x-4 justify-end">
          <button
            className="hidden px-3 py-2 text-base text-indigo-600 hover:bg-indigo-700 hover:text-white rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="button"
            onClick={editModal}
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <Image
          src={"/userPhoto.jpg"}
          alt={`${session?.user?.name}'s profile photo`}
          className="mx-auto rounded-full aspect-square"
          width={128}
          height={128}
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-5 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{session?.user?.name}</h2>
            <p className="px-5 text-xs sm:text-base">{session?.user?.email}</p>
          </div>
        </div>
      </div>
    </ProtectedPage>
  );
}
