import { useRouter } from 'next/router';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface PrimaryBtnProps {
  href: string;
  text: string;
  width?: string;
}

export default function PrimaryBtn({ href, text, width }: PrimaryBtnProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-grey-900 border border-gray-300 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-gray-100 bg-indigo-600 text-white w-${width ? width : 'fit'}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
