import React from "react";
import Image from "next/image";
import {
    BanknotesIcon,
    CreditCardIcon,
    CurrencyDollarIcon
  } from "@heroicons/react/24/solid";

import ContentCard from "./components/common/ContentCard";
import Headings from "./components/common/Headings";
import Paragraph from "./components/common/Paragraph";
import OutlineFreeBtn from "./components/common/OutlineFreeBtn";
import PrimaryBtn from "./components/common/PrimaryBtn";
import Heading from "./components/common/Headings";

const features = [
    {
      name: "Tracking your income",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: BanknotesIcon,
    },
    {
      name: "Manage your expenses",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: CreditCardIcon,
    },
    {
      name: "Break the cycle",
      description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
      icon: CurrencyDollarIcon,
    },
  ];

export default function Examples() {
  return (
    <>
      <ContentCard>
        <div className="text-center pt-3">
          <Heading level={6} color="indigo-600">
            Manage money with ease
          </Heading>
          <Heading level={3} color="grey-800">
            Take the guess work out of your finances
          </Heading>
          <div className="px-10">
            <Paragraph>
            Track My Funds makes managing your money simple and stress-free.
            Whether you&apos;re a seasoned finance expert or just starting out,
            you&apos;ll find everything you need to take control of your
            finances and reach your financial goals.
          </Paragraph>
          </div>
          
        </div>
        <div className="mx-auto my-auto px-10 pb-4">
          <dl className="grid grid-cols-1 gap-y-6 gap-x-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </ContentCard>
    </>
  );
}
