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
      <div className="flex flex-col md:flex-row -mx-10 md:-mx-20">
        <div className="pl-5 py-3 order-2 md:order-1 mt-4 mx-2">
          <Headings level={1} color="text-gray-900">
            Empower your money management
          </Headings>
          <Paragraph>
          Track My Funds is a free, user-friendly personal finance app that helps you easily manage your money and achieve your financial goals.
          </Paragraph>
          <div className="space-x-8">
            <OutlineFreeBtn href="/register" text="Get Started" />
            <PrimaryBtn href="/about" text="Learn more" />
          </div>
        </div>

        <div className="hidden w-fit md:w-4/6 md:flex py-auto order-1 md:order-2 mx-auto">
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
