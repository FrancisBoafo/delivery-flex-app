import { useEffect } from 'react';
import { MapPinIcon, TagIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use 'aos/dist/aos.css' if you prefer CSS

const features = [
  {
    name: 'Real-time tracking.',
    description:
      'Track your food from the restaurant to your door, knowing exactly when it will arrive.',
    icon: MapPinIcon,
  },
  {
    name: 'Exclusive deals and discounts.',
    description: 'Unlock exclusive deals and discounts on your favorite food items with our partner restaurants. The more you order, the more you save.',
    icon: TagIcon,
  },
  {
    name: 'Easy order history.',
    description: 'Easily view and reorder from your past orders. Making your favorite meal just a tap away.',
    icon: ClipboardIcon,
  },
];

export default function Example() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div data-aos="fade-up" className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 transition-opacity duration-500 ease-in-out hover:opacity-50">
                Experience Convenience
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-opacity duration-500 ease-in-out hover:opacity-50">
                A smarter way to order food
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 transition-opacity duration-500 ease-in-out hover:opacity-50">
                Get your favorite meals delivered right to your door. With Delivery Flex, ordering food is easy, fast, and convenient.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 transition-opacity duration-500 ease-in-out hover:opacity-50">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            data-aos="slide-left"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 transform transition-all duration-500 ease-in-out hover:scale-110"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}


