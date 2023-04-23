import Link from "next/link";
import Heading from "./components/common/Headings";
import ContentCard from "./components/common/ContentCard";

export default function Privacy() {
  
  return (
    <ContentCard>
      <div className="text-center">
      <Heading level={1} color={"black"}>
        Privacy Policy
      </Heading>
      <p className="text-center pb-10 text-gray-500">
        Last updated: February 18, 2023
      </p>
      </div>
      <ul className="list-disc list-inside mx-5">
        <li className="pb-2">
          Under no circumstances will we sell or distribute your data to third
          parties unless you have explicitly asked us to.
        </li>
        <li className="pb-2">
          Your email will only be used as a way to register and login to your
          account and for no other purpose.
        </li>
        <li className="pb-2">
          We will not send you any emails unless you have explicitly asked us
          to.
        </li>
        <li className="pb-2">
          If you have any questions or concerns about our privacy policy, please
          <Link
            href="/contact"
            className="text-blue-500"
          >
           {" "} contact us.
          </Link>
        </li>
      </ul>
    </ContentCard>
  );
}
