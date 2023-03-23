import React, { useState, useEffect } from "react";

import { IconX, IconTrash } from "@tabler/icons-react";

export default function EditModal({ hideEditModal, modalType, item }: any) {
  const [amount, setAmount] = useState(item.amount);
  const [name, setName] = useState(item.name);
  const [month, setMonth] = useState(item.month);
  const [year, setYear] = useState(item.year);
  const [user, setUser] = useState(item.user);
  const itemID = item._id;

  const handleEdit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/${modalType.toLowerCase()}/put/${itemID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          amount: amount,
          month: month,
          year: year,
          user: user,
        }),
      });

      if (!res.ok) {
        throw new Error(`Error updating ${modalType.toLowerCase()}.`);
      }

      await res.json();

    } catch (error) {
      console.error(error);
    }
    hideEditModal();
    window.location.reload();
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/${modalType.toLowerCase()}/delete/${itemID}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Failed to delete ${modalType.toLowerCase()}.`);
      }
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
    hideEditModal();
    window.location.reload();
  };
  

  return (
    <div
      id="modal"
      table-index="-1"
      aria-hidden="true"
      className="fixed left-0 right-0 z-50 w-full pt-0 md:pt-10 overflow-x-hidden overflow-y-auto md:inset-0 h-100 w-100 backdrop-blur md:py-5 overflow-auto md:mt-2/12"
      style={{
        display: hideEditModal ? "block" : "none",
      }}
    >
      <div className="p-10 bg-white rounded-lg drop-shadow-md sm:max-w-sm lg:max-w-lg m-auto">
        <button
          type="button"
          className="float-right text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
          onClick={() => {
            hideEditModal();
          }}
        >
          <IconX />
        </button>
        <h1 className="text-3xl font-semibold text-center text-indigo-600">
          Update {modalType}
        </h1>
        <form className="mt-4 mx-5" onSubmit={handleEdit}>
          <div className="mb-2 mt-5">
            <label className="block text-sm font-semibold text-gray-800">
              {modalType}
            </label>
            <input
              required
              id="name"
              name={modalType}
              placeholder={modalType === "Income" ? "eg. Salary" : "eg. Rent"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Amount
            </label>
            <input
              required
              id="amount"
              name="amount"
              placeholder="0.00"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Month
              </label>
              <select
                id="month"
                name="month"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="block w-full pl-2 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Year
              </label>
              <input
                required
                id="year"
                name="year"
                placeholder="2023"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="w-full px-4 py-2 mt-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none"
            >
              Update
            </button>
          </div>
          <button
              type="submit"
              className="w-full px-4 py-2 mt-0 text-white bg-red-600 rounded-md hover:bg-red-500 focus:bg-red-500 focus:outline-none"
              onClick={handleDelete}
            >
              Delete
            </button>
        </form>
      </div>
    </div>
  );
}
