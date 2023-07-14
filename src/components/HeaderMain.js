import { useState } from 'react'
import { Dialog} from '@headlessui/react'
import { Bars3Icon, XMarkIcon,ArrowRightIcon,MapPinIcon,ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import Banner from './Banners'
import Services from './Services-flyout'

const navigation = [
  { 
    name: 'Home', 
    href: '/',
    subItems: []
  },
  { 
    name: 'Menu', 
    href: '/',
    subItems: [
      { name: 'Breakfast', href: '#' },
      { name: 'Lunch', href: '#' },
      { name: 'Dinner', href: '#' },
    ]
  },
  {
    name: 'About Us', 
    href: '/',
    subItems: [
      { name: 'Our Story', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Our Mission', href: '#' },
    ]
  },
  { 
    name: 'Services', 
    href: '/',
    component: <Services />
  },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <>
    
      <div className="relative z-60"> 
        <Banner />
      </div>
      <div className="bg-white " >
        <header className="absolute inset-x-0 top-2 z-50 pt-12">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">DeliveryFlex</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
  {navigation.map((item) => (
    item.component ? (
      <div key={item.name}>
        {item.component}
      </div>
    ) : (
      <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
        {item.name}
      </a>
    )
  ))}
</div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/signin" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between ">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">DeliveryFlex</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation
                      .filter(item => item.name !== 'Services')
                      .map((item) => (
                        <div key={item.name}>
                          {item.component ? (
                            item.component
                          ) : (
                            <>
                              <button
                                className="-mx-3 flex justify-between items-center w-full text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() =>
                                  setOpenDropdown(openDropdown === item.name ? null : item.name)
                                }
                              >
                                {item.name}
                                {item.subItems.length > 0 &&
                                  (openDropdown === item.name ? (
                                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                                  ) : (
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                  ))}
                              </button>
                              {openDropdown === item.name &&
                                item.subItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 ml-6 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                            </>
                          )}
                        </div>
                      ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/signin"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Become A Dasher.{' '}
            <a href="/" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-4xl ">
            DISCOVER DELICIOUSNESS
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto max-w-prose">
            Craving something delicious? Explore new and exciting dishes with Delivery Flex. 
          </p>
        <div className="mt-6 mx-auto max-w-prose">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input 
              type="text" 
              placeholder="Search for dishes..."
              className="h-10 pl-10 pr-10 py-3 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-full"
            />
            <button className="absolute inset-y-5 right-0 px-3 flex items-center bg-white rounded-full text-gray-400 hover:text-gray-600">
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/menu"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            Order now
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Explore Menu <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    </>
  )
}


