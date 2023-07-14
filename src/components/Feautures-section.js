import React from 'react';
import { TruckIcon, ClockIcon, ShieldCheckIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import VisibilitySensor from 'react-visibility-sensor';

const features = [
  {
    name: 'Fast Delivery',
    description:
      'We guarantee swift delivery to ensure that your food arrives hot and fresh. Enjoy your meal just as you would in a restaurant.',
    icon: TruckIcon,
  },
  {
    name: '24/7 Service',
    description:
      'Our service operates around the clock. Order your favorite meals anytime, be it breakfast, lunch, dinner, or a late-night snack.',
    icon: ClockIcon,
  },
  {
    name: 'Secured Payment',
    description:
      'Our payment gateway is secured with top-notch technology. We accept all major credit and debit cards, as well as other payment methods.',
    icon: CreditCardIcon,
  },
  {
    name: 'Quality Assurance',
    description:
      'We partner only with trusted restaurants and food providers who meet our high standards for food preparation and quality.',
    icon: ShieldCheckIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Taste the Best</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you crave, delivered at your doorstep
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from a wide variety of dishes and restaurants. From local delicacies to international cuisines, we've got it all!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, i) => (
              <VisibilitySensor partialVisibility key={i}>
                {({isVisible}) =>
                  <div key={feature.name} className={`relative pl-16 transition duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                }
              </VisibilitySensor>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


