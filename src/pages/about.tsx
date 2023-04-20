import {
  BanknotesIcon,
  CreditCardIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/solid";

import ContentCard from "./components/common/ContentCard";
import Heading from "./components/common/Headings";
import Paragraph from "./components/common/Paragraph";

const features = [
  {
    name: "Tracking your income",
    description:
      "Effortlessly manage your finances and stay informed about your funds with our intuitive and easy-to-use tracking tool.",
    icon: BanknotesIcon,
  },
  {
    name: "Manage your expenses",
    description:
      "Get a clear picture of your spending and take charge of your financial well-being with our comprehensive expense management tool.",
    icon: CreditCardIcon,
  },
  {
    name: "Break the cycle",
    description:
      "Break free from financial stress and start building a secure future with our innovative tool designed to help you break the cycle of debt and overspending.",
    icon: CurrencyDollarIcon,
  },
];

export default function Example() {
  return (
    <ContentCard>
        <div className="text-center pt-3">
          <Heading level={6} color="indigo-600">
            Manage money with ease
          </Heading>
          <Heading level={2} color="grey-800">
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
          <dl className="grid grid-cols-1 gap-y-6 gap-x-4 lg:max-w-none lg:grid-cols-2">
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
  );
}
