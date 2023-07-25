import { StarIcon, EyeIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import ReviewsBox from './Review-post';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews({reviews}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewBoxOpen, setIsReviewBoxOpen] = useState(false);
    return (
      <div className="bg-white border border-gray-200 rounded-xl max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-start">
          <div className="border-r border-gray-200 pr-8">
            <h2 className="text-2xl font-bold text-left tracking-tight text-base text-gray-900">Rating & Reviews</h2>
            
            <div className="mt-3 flex items-center">
              <div className="mr-2 text-xl font-bold text-gray-900">{reviews.average}</div>
              <div>
                <div className="flex text-base text-base items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
              <p className="ml-2  text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
            </div>

            <div className="mt-6 border-b  border-gray-200 pb-8">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {reviews.counts.map((count) => (
                  <div key={count.rating} className="flex items-center text-sm">
                    <dt className="flex flex-1 items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {count.rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                        <StarIcon
                          className={classNames(
                            count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />

                        <div className="relative ml-3 flex-1">
                          <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                          {count.count > 0 ? (
                            <div
                              className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                              style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                      {Math.round((count.count / reviews.totalCount) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Disclosure as="div" className="mt-6">
  {({ open }) => (
    <>
      <Disclosure.Button className="flex justify-between w-full text-left text-base text-gray-900 hover:text-blue-500 transition-colors duration-200">
        <span className="font-medium text-xsm text-left text-base">Write a review</span>
        <span className="ml-6 h-7 flex items-center">
          {open ? (
            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </span>
      </Disclosure.Button>
      <Disclosure.Panel as="div" className="mt-2">
<p className="text-base flex text-sm text-left text-gray-600 mb-4">
  Share your thought on our service and help other customers!
</p>
        <ReviewsBox />
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

            <button onClick={() => setIsOpen(!isOpen)} className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto">
                <EyeIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                {isOpen ? 'Hide Reviews' : 'Show Reviews'}
              </button>
          </div>
         
          
          
          <div className="mt-8 lg:mt-0 text-base">
            {isOpen && (
              <div className="flow-root">
                <div className="-my-12 divide-y text-base divide-gray-200">
                  {reviews.featured.map((review) => (
                    <div key={review.id} className="py-12">  
                      <div className="flex items-center text-base">
                        <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                        <div className="ml-4">
                          <h4 className="text-sm text-base font-bold text-gray-900">{review.author}</h4>
                          <div className="mt-1 flex items-center text-base">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{review.rating} out of 5 stars</p>
                        </div>
                      </div>

                      <div
                        className="mt-4 space-y-6 text-base italic text-gray-600"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
}


