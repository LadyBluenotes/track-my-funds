import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from "../common/PrimaryBtn";
import OutlineFreeBtn from "../common/OutlineFreeBtn";

const myLinks = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "About",
    href: "/about",
    icon: BookOpenIcon,
  },
];

export default function LandingNav() {
  return (
    <Popover className=" bg-white sticky top-0 z-50">
      <div className="max-w-screen">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-0 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 pl-10 lg:pl-10">
            <Link href="/">
              <span className="sr-only">Track My Funds</span>
              <Image
                className="h-20 sm:h-20"
                src="/smallLogo.jpg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 pr-10 lg:pr-20">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <OutlineFreeBtn href="/" text="Home" />
            <OutlineFreeBtn href="/about" text="About" />
          </Popover.Group>
          <div className="hidden pr-10 items-center justify-end md:flex md:flex-1 lg:w-0 space-x-8">
            <OutlineFreeBtn href="/login" text="Log in" />
            <PrimaryBtn href="/register" text="Register" />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-20 w-auto"
                    src="/smallLogo.jpg"
                    alt="Track Your Income"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 mx-0">
                <nav className="grid gap-y-8">
                  {myLinks.map((item) => (
                    <Popover.Button
                      key={item.name}
                      className="text-base font-medium text-gray-500 hover:text-indigo-900"
                      as="a"
                      href={item.href}
                    >
                      <item.icon
                        className="h-6 w-6 inline-block text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-indigo-900">
                        {item.name}
                      </span>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <PrimaryBtn href="/register" text="Register" width="full" />
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Already have an account?{" "}
                  <Popover.Button
                    href="/login"
                    as="a"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Log in
                  </Popover.Button>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
