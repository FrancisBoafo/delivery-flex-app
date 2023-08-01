import React from 'react';

export default function RestaurantInfo() {
  return (
    <div className="bg-white p-5">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-lg font-bold text-gray-900">All Day</h2>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>10:00 am - 9:30 pm</option>
            <option>Other Time 1</option>
            <option>Other Time 2</option>
          </select>
        </div>
        <input
          id="search"
          type="search"
          className="w-full sm:w-1/3 text-sm p-2 text-gray-800 bg-gray-100 rounded-md pl-10"
          placeholder="Search store menu"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 text-sm mb-4 border-b border-gray-300 pb-4">
        <h2 className="font-bold text-gray-900 hover:text-gray-500 cursor-pointer">MostLiked Food</h2>
        <p className="text-gray-900 hover:text-gray-500 cursor-pointer">Breakfast</p>
        <p className="text-gray-900 hover:text-gray-500 cursor-pointer">Lunch</p>
        <p className="text-gray-900 hover:text-gray-500 cursor-pointer">Dinner</p>
      </div>
    </div>
  )
}


