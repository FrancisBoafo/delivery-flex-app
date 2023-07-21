import { ShoppingCartIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default function MostLikedItems({items}) {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  const scrollRight = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0 mb-4">
          <h2 className="text-2xl font-bold text-base tracking-tight text-gray-900">Popular Dishes</h2>
          <div className="flex space-x-2 bg-gray-200 p-2 rounded-full">
            <ArrowLeftIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={scrollLeft} />
            <ArrowRightIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={scrollRight} />
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full overflow-x-auto scrollbar-hide" ref={scrollRef}>
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {items.map((item) => (
                <li key={item.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6 flex flex-col items-start">
                      <h3 className="mt-1 font-semibold text-base text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {item.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="mt-1 text-sm text-gray-900">${item.price}</p>
                      <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-2 rounded inline-flex items-center">
                        <ShoppingCartIcon className="h-4 w-4 mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}








