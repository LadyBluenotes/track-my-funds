import { useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const showMe = () => {
      setShowPassword(!showPassword);
  
      const passwordInput = document.querySelector(
        'input[name="password"]'
      ) as HTMLInputElement;
  
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    };

    return (
        <form className="mt-4 mx-5 border-t-4 border-double border-indigo-200">
          <div className="mb-2 mt-5">
            <label className="block text-sm font-semibold text-gray-800">
              Full Name
            </label>
            <input
              required
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-1 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                required
                minLength={8}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-1 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-7">
                <button
                  type="button"
                  className="text-indigo-500 focus:outline-none focus:text-indigo-700"
                  onClick={showMe}
                >
                  {showPassword ? (
                    <EyeIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <input
            className="mt-3 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600"
            type="submit"
          />
        </form>
    )
}