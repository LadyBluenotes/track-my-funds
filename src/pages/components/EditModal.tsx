import React, { useState } from "react";

import { IconX } from "@tabler/icons-react";
import FunctionBtn from "./common/FunctionBtn";
import Heading from "./common/Headings";
import Input from "./common/Input";
import SelectInput from "./common/SelectInput";

export default function EditModal({ hideEditModal, modalType, item }: any) {
  const [amount, setAmount] = useState(item?.amount || "");
  const [name, setName] = useState(item?.name || "");
  const [month, setMonth] = useState(item?.month || "");
  const [year, setYear] = useState(item?.year || "");
  const [user, setUser] = useState(item?.user || "");
  const itemID = item?._id;

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
      <div className="p-10 bg-white rounded-lg drop-shadow-md sm:max-w-sm lg:max-w-lg m-auto flex flex-col">
        <button
          type="button"
          className="w-fit text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
          onClick={() => {
            hideEditModal();
          }}
        >
          <IconX />
        </button>
        <div className="text-center">
          <Heading level={3} color="indigo-600">
            Update {modalType}
          </Heading>
        </div>
        <form className="mx-5">
          <div className="mb-2 space-y-2">
            <Input
              inputName={modalType}
              placeholder={modalType === "Income" ? "eg. Salary" : "eg. Rent"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <Input
              inputName="Amount"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
            <SelectInput
              title="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              options={[
                { value: "1", label: "January" },
                { value: "2", label: "February" },
                { value: "3", label: "March" },
                { value: "4", label: "April" },
                { value: "5", label: "May" },
                { value: "6", label: "June" },
                { value: "7", label: "July" },
                { value: "8", label: "August" },
                { value: "9", label: "September" },
                { value: "10", label: "October" },
                { value: "11", label: "November" },
                { value: "12", label: "December" },
              ]}
            />
            <Input
              inputName="Year"
              placeholder="2021"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="number"
            />
          </div>
          <div className="mt-4 space-y-2">
            <FunctionBtn
              text="Update"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();

                try {
                  const res = await fetch(
                    `/api/${modalType.toLowerCase()}/put/${itemID}`,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name,
                        amount,
                        month,
                        year,
                        user,
                      }),
                    }
                  );

                  if (!res.ok) {
                    throw new Error(
                      `Error updating ${modalType.toLowerCase()}.`
                    );
                  }

                  await res.json();
                } catch (error) {
                  console.error(error);
                }
                hideEditModal();
                window.location.reload();
              }}
            />
            <div className="flex justify-end">
              <FunctionBtn
                text="Delete"
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    const response = await fetch(
                      `/api/${modalType.toLowerCase()}/delete/${itemID}`,
                      {
                        method: "DELETE",
                      }
                    );
                    if (!response.ok) {
                      throw new Error(
                        `Failed to delete ${modalType.toLowerCase()}.`
                      );
                    }
                    const data = await response.json();
                    console.log(data.message);
                  } catch (error) {
                    console.error(error);
                  }
                  hideEditModal();
                  window.location.reload();
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
