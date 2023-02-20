import { useState } from "react";

export default function UserProfileModal({ hideModal }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePhotoChange = (e: any) => {
    setPhoto(e.target.value);
  };

  return (
    <div
      id="modal"
      table-index="-1"
      aria-hidden="true"
      className="fixed left-0 right-0 z-50 w-full pt-10 overflow-x-hidden overflow-y-auto md:inset-0 h-100 w-100 backdrop-blur py-5 overflow-auto mt-2/12"
      style={{
        display: hideModal ? "block" : "none",
      }}
    >
      <div className=" max-w-xl p-6 mx-auto bg-white rounded-md shadow-md">
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center float-right"
          onClick={() => {
            hideModal();
          }}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <h2 className="text-lg font-semibold text-gray-700 capitalize">
          Profile settings
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Update your account's settings.
        </p>
        <form>
          <div className="grid gap-6 mt-4 grid-cols-2">
            <div>
              <label className="text-gray-700">Name</label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label className="text-gray-700">Email Address</label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              ></input>
            </div>
            <div>
              <label className="text-gray-700">Change profile picture:</label>
              <input
                id="profilePicture"
                type="file"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
