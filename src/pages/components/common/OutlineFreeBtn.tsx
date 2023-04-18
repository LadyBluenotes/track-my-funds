import Link from "next/link";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface OutlineFreeBtn {
    href: string;
    text: React.ReactNode;
}


export default function OutlineFreeBtn({ href, text }: OutlineFreeBtn ) {

    return (
        <Link
            href={href}
            className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-indigo-900"
        >
            {text}
            {text === "Get Started" ? <ArrowForwardIcon className="ml-1 -mt-1 h-5 w-5" aria-hidden="true" /> : null }
        </Link>
    )
}