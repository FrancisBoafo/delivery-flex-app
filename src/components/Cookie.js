import React, { useState } from 'react';

export default function Example() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAcceptClick = () => {
    // Your logic to handle acceptance of cookies should be inserted here.
    setShowCookieBanner(false);
  }

  const handleRejectClick = () => {
    // Your logic to handle rejection of cookies should be inserted here.
    setShowCookieBanner(false);
  }

  return (
    showCookieBanner && 
    <div className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
      <p className="max-w-4xl text-left text-sm leading-6 text-gray-900">
        This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
        consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious.
        See our{' '}
        <a href="#" className="font-semibold text-indigo-600">
          cookie policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          onClick={handleAcceptClick}
        >
          Accept all
        </button>
        <button 
          type="button" 
          className="text-sm font-semibold leading-6 text-gray-900" 
          onClick={handleRejectClick}
        >
          Reject all
        </button>
      </div>
    </div>
  )
}


  
  