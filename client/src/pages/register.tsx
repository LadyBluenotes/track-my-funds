import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

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

  const handleSubmit = () => {
    console.log("hit");
  };

  return (
    <div className="py-20">
      <div className=" p-10 bg-white rounded-lg drop-shadow-md xs:max-w-md sm:max-w-lg m-auto">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-2">
          Register for an account
        </h1>
        <form className="mt-4 mx-5 border-t-4 border-double border-indigo-200">
          <div className="mb-2 mt-5">
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
              className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600"
              type="button"
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
