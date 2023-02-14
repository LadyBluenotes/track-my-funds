import { CreditCardIcon, BanknotesIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Tracking your income',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: BanknotesIcon,
  },
  {
    name: 'Manage your expenses',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: CreditCardIcon,
  },
  {
    name: 'Break the cycle',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: CurrencyDollarIcon,
  },
]

export default function Example() {
  return (
    <div className="h-[calc(100vh-74px)] overflow-auto bg-gradient-to-br from-white to-indigo-200 py-10">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Manage money better</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage your finances
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Track My Funds makes managing your finances should be simple and stress-free. Whether you're a seasoned finance expert or just starting out, you'll find everything you need to take control of your finances and reach your financial goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
