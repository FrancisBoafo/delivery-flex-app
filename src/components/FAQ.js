import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default function FAQ({ restaurant }) {
  // Generate the FAQs using the restaurant data
  const faqs = [
    {
      question: `What is the ${restaurant.name}'s address?`,
      answer: `${restaurant.name} is located at ${restaurant.location}. You can find ${restaurant.name}’s menu, address, hours, and phone number on our platform.`,
    },
    {
      question: `What's on the menu at ${restaurant.name}?`,
      answer: `${restaurant.name} offers a variety of dishes such as ${restaurant.menu.map(item => item.name).join(', ')}. You can browse the full menu on our platform.`,
    },
    {
      question: `What is ${restaurant.name}'s rating?`,
      answer: `${restaurant.name} is rated ${restaurant.reviews.average}/5 stars by our users.`,
    },
    // More questions...
  ];

  // Render the FAQs as before
  return (
    <div className="bg-white font-sans">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto text-xl text-left max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl  font-bold leading-10 tracking-tight text-left text-black-500">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-black-500 hover:text-blue-500 transition-colors duration-200">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-sm leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

  
  

