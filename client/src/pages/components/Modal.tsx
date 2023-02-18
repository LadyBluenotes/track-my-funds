import { useState } from 'react';

export default function Modal({ hideModal }: any) {

    return (
        <div id="modal" table-index="-1" aria-hidden="true" className="fixed left-0 right-0 z-50 w-full pt-10 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full py-5 overflow-auto blur-none mt-2/12" style={{ 
            display: hideModal ? 'block' : 'none',
          }}>
            <div className="p-10 bg-white rounded-lg drop-shadow-md sm:max-w-sm lg:max-w-lg m-auto">
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center" onClick={hideModal}>
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
              </button>
              <h1 className="text-3xl font-semibold text-center text-indigo-600">
                Enter New Income
              </h1>
              <form className="mt-4 mx-5">
                <div className="mb-2 mt-5">
                  <label className="block text-sm font-semibold text-gray-800">
                    Income
                  </label>
                  <input
                    required
                    name="income"
                    placeholder="Income"
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
                    name="amount"
                    placeholder="Amount"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <button
                    type="submit"
                    className="block ml-auto w-[100px] px-4 py-2 mt-5 text-white bg-indigo-600 hover:bg-indigo-700 border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    Submit
                  </button>
                </div>
                </form>
              </div>
            </div>
    )
}