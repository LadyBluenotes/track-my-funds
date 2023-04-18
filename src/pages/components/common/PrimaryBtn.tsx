import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PrimaryBtnProps {
    href: string;
    text: string;
    width?: string;
}

export default function PrimaryBtn({ href, text, width }: PrimaryBtnProps) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-grey-900 border border-gray-300 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-gray-100 bg-indigo-600 text-white w-${width ? width : 'fit'}`}>
        {text}
    </Link>
  );
}