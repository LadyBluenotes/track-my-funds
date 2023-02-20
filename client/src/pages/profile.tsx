import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import UserProfileModal from "./components/UserProfileModal";

interface user {
    name: string;
    email: string;
    photo: string;
}

export default function Profile() {

    const [edit, setEdit] = useState(false);
    let user: user = {
        name: "Leroy Jenkins",
        email: "leroy@jenkins.ca",
        photo: "https://source.unsplash.com/150x150/?portrait?3"
    }

let editModal = () => {
    setEdit(true);
}

const closeModal = () => {
    setEdit(false);
}

return (
    <>
    {edit ? (
        <UserProfileModal
            hideModal={closeModal}
        />
      ) : null}
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl bg-white mx-auto mt-20 mb-40">
        
    <div className="flex space-x-4 justify-end">
        <button
            className="block px-3 py-2 text-base text-indigo-600 hover:bg-indigo-700 hover:text-white rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="button"
            onClick={editModal}
            >
                <PencilIcon className="w-5 h-5" />
            </button>
    </div>
	<img src={user.photo} alt={`${user.name}'s profile photo`} className="w-32 h-30 mx-auto rounded-full aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-5 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user.name}</h2>
			<p className="px-5 text-xs sm:text-base">{user.email}</p>
		</div>
	</div>
</div>
</>
)};