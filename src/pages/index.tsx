import React from "react";
import Image from "next/image";

import ContentCard from "./components/common/ContentCard";
import Headings from "./components/common/Headings";
import Paragraph from "./components/common/Paragraph";
import OutlineFreeBtn from "./components/common/OutlineFreeBtn";
import PrimaryBtn from "./components/common/PrimaryBtn";

export default function Home() {
  return (
    <ContentCard>
      <div className="flex flex-col md:flex-row">
        <div className="pl-5 py-3 order-2 md:order-1 mt-4">
          <Headings level={1} color="text-gray-900">
            Empower your money management
          </Headings>
          <Paragraph>
            The smart way to manage your money and reach your financial goals -
            Track My Funds is a free and easy to use personal finance app.
          </Paragraph>
          <div className="space-x-8">
            <OutlineFreeBtn href="/register" text="Get Started" />
            <PrimaryBtn href="/about" text="Learn more" />
          </div>
        </div>

        <div className="w-fit md:w-4/6 flex py-auto order-1 md:order-2 mx-auto">
          <Image
            src="/moneyStack.jpg"
            alt="pile of cash"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
            }}
            width={300}
            height={260}
          />
        </div>
      </div>
    </ContentCard>
  );
}
