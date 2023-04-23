import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import GoogleIcon from "@mui/icons-material/Google";
import Heading from "./common/Headings";
import Link from "next/link";

export interface AccountCardProps {
  heading: string;
  subheading: string;
  bottomText: string;
  bottomLink: string;
  bottomLinkText: string;
  session: any;
}

export default function AccountCard({
  heading,
  subheading,
  bottomText,
  session,
}: AccountCardProps) {
  const router = useRouter();

  if (session && session.user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="pt-10 bg-gradient-to-br from-white to-indigo-200 h-[calc(100vh-150px)] overflow-auto">
      <div className=" px-10 py-10 bg-white md:rounded-lg drop-shadow-md sm:max-w-sm lg:max-w-lg m-auto text-center">
        <Heading level={2} color="indigo-800">
          {heading}
        </Heading>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 tracking-wide">
            {subheading}
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600"
          onClick={() => {
            signIn("google", { callbackUrl: "/dashboard" });
          }}
        >
          <GoogleIcon className="text-red-100" />
        </button>
        <p className="mt-8 text-sm font-light text-center text-gray-700">
          {bottomText}{" "}
          <Link
            href={bottomText === "Already have an account?" ? "/login" : "/signup"}
            className="font-medium text-indigo-600 hover:underline"
          >
            {bottomText === "Already have an account?" ? "Log in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  );
}
