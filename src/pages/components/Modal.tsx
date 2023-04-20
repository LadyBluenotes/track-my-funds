import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";

import Heading from "./common/Headings";
import Input from "./common/Input";
import SelectInput from "./common/SelectInput";
import FunctionBtn from "./common/FunctionBtn";

export default function Modal({ hideModal, modalType, user }: any) {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <div
      id="modal"
      table-index="-1"
      aria-hidden="true"
      className="fixed left-0 right-0 z-50 w-full md:pt-10 overflow-x-hidden overflow-y-auto md:inset-0 h-100 w-100 backdrop-blur py-5 overflow-auto mt-2/12"
      style={{
        display: hideModal ? "block" : "none",
      }}
    >
      <div className="p-10 bg-white rounded-lg drop-shadow-md sm:max-w-sm lg:max-w-lg m-auto flex flex-col">
        <button
          type="button"
          className="w-fit float-right text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
          onClick={hideModal}
        >
          <IconX />
        </button>
        <div className="text-center">
          <Heading level={3} color="indigo-600">
            Enter New {modalType}
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
          <FunctionBtn
            text="Submit"
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              modalType === "Income"
                ?  await fetch(`/api/income/post`, {
                    method: "POST",
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
                  })
                    .then((res) => res.json())
                    .catch((err) => {
                      console.log(err);
                    })
                : await fetch(`/api/expense/post`, {
                    method: "POST",
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
                  })
                    .then((res) => res.json())
                    .catch((err) => {
                      console.log(err);
                    });
              hideModal();
              window.location.reload();
            }}
          />
        </form>
      </div>
    </div>
  );
}
