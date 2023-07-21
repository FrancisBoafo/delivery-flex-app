import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ShoppingCartIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " absolute z-10 top-1/2 -mt-3 text-black";
  let char = props.type === "next" ? <ChevronRightIcon className="h-6 w-6"/> : <ChevronLeftIcon className="h-6 w-6"/>;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

function MostLikedItems({ items }) {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  
  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4 text-left text-gray-900">Popular Foods</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="h-24 w-full rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">{item.name}</h3>
              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">${item.price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded">
                  <ShoppingCartIcon className="h-4 w-4 mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MostLikedItems;




