import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface OutlineFreeBtn {
  href: string;
  text: React.ReactNode;
  color?: string;
}

export default function OutlineFreeBtn({
  href,
  text,
  color,
}: OutlineFreeBtn) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`whitespace-nowrap text-base font-medium ${
        color ? color : "text-gray-700"
      } hover:text-indigo-900`}
    >
      {text}
      {text === "Get Started" ? (
        <ArrowForwardIcon className="ml-1 -mt-1 h-5 w-5" aria-hidden="true" />
      ) : null}
    </a>
  );
}
