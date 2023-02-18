import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pb-0 bg-white shadow">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="py-5">
          <Image
            src="/logo.png"
            height={50}
            width={150}
            className="px-5"
            alt="Track My Funds Logo"
          />
        </a>
        <ul className="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="mb-5 border-gray-200" />
      <span className="block text-sm text-gray-500 sm:text-center sm:pb-5">
        © 2023 <a href="/">Track My Funds</a>. All Rights Reserved.
      </span>
    </footer>
  );
}
