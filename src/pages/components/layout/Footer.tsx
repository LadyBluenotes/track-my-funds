import Link from "next/link";
import OutlineFreeBtn from "../common/OutlineFreeBtn";

export default function Footer() {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-screen-xl px-4 py-5 mx-auto space-y-3 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 my-0">
          <div className="px-5 py-1">
            <OutlineFreeBtn href="/about" text="About" color="text-gray-500"/>
          </div>
          <div className="px-4 py-1">
            <OutlineFreeBtn href="/privacy" text="Privacy" color="text-gray-500"/>
          </div>
          <div className="px-4 py-1">
            <OutlineFreeBtn href="https://github.com/LadyBluenotes/track-my-funds" text="GitHub" color="text-gray-500"/>
          </div>
          <div className="px-4 py-1">
            <OutlineFreeBtn href="/contact" text="Contact" color="text-gray-500"/>
          </div>
        </nav>
        <p className="mt-5 text-base leading-6 text-center text-gray-400">
          © 2023 Track My Funds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
