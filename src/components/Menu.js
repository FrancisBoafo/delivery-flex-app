import { useState } from 'react';
import MenuNav from './Menu-Navigation';
import Reviews from './Reviews';
import FAQ from './FAQ';
import MenuFooter from './Menu-Footer';

// Import Clerk and Star Rating component
import { useUser } from "@clerk/clerk-react";
import StarRatingComponent from './Rating-Star';

const Restaurant = ({ restaurant, handleAddToCart }) => {
  const averageRating = restaurant.reviews.average;
  // Add a state for star rating
  const [rating, setRating] = useState(averageRating);

  // Use Clerk's useUser hook to get current user
  const { user } = useUser();

  return (
<div className="mb-4">
  <div className="relative h-56 sm:h-80 w-full overflow-hidden rounded-lg">
    <img
      src={restaurant.imageSrc}
      alt={restaurant.imageAlt}
      className="w-full h-full object-cover"
    />
    <img
      src={restaurant.logo}
      alt={`${restaurant.name} logo`}
      className="h-16 sm:h-20 w-16 sm:w-20 object-cover rounded-full border-4 border-white absolute bottom-0 left-2"
    />
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 mb-2">
    <div className="flex items-center">
      <h1 className="text-xl sm:text-2xl font-bold mr-2">{restaurant.name}</h1>
      <span className="text-sm sm:text-base text-gray-600">{`(${restaurant.reviews.totalCount}+rating)`}</span>
      <svg

className="w-4 h-4 fill-current text-yellow-500 mr-2"
viewBox="0 0 24 24"
>
<path
  d="M12.001 2.5l3.09 6.272 6.91.999-5 4.864 1.182 6.901L12 17.713l-6.091 3.823 1.182-6.901-5-4.864 6.91-.999L12.001 2.5z"
/>
</svg>
      <span className="text-sm sm:text-base text-gray-600">{restaurant.location}</span>
    </div>
    <div className="flex items-center mt-2 sm:mt-0">
      <span className="text-sm sm:text-base text-gray-600 mr-2">{`$${restaurant.deliveryFee} delivery`}</span>
      <span className="text-sm sm:text-base text-gray-600">{`${restaurant.waitTime} min`}</span>
    </div>
  </div>





     
      <p className='text-left text-sm text-gray-600'>{`Average Rating: ${averageRating.toFixed(1)} / 5`}</p>

      {/* Show star rating component only if user is logged in */}
      {user && (
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={(nextValue, prevValue, name) => setRating(nextValue)}
        />
      )}

      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default function RestaurantPage() {
  const [cart, setCart] = useState([]);

  const restaurant = {
    id: '123',
    name: 'Mario\'s Italian Kitchen',
    description: 'The best Italian food in Springfield!',
    location: '123 Fake St, Springfield',
    imageSrc: 'https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWNkb25hbGRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
    logo: 'https://img.cdn4dd.com/p/fit=contain,width=200,height=200,format=auto,quality=95/media/restaurant/cover_square/efe58558-a9dc-466d-922b-ecce4b3213b1.png',
    coordinates: [51.505, -0.09],
    menu: [
      { id: 'm1', name: 'Spaghetti Bolognese', description: 'Classic Italian pasta', price: 12.99 },
      { id: 'm2', name: 'Margherita Pizza', description: 'Cheese and tomato pizza', price: 9.99 },
      { id: 'm3', name: 'Tiramisu', description: 'Italian coffee-flavoured dessert', price: 6.99 },
    ],
    reviews: {
      average: 4.5,
      totalCount: 3,
      counts: [
        {rating: 5, count: 1},
        {rating: 4, count: 2}
      ],
      featured: [
        { id: 'r1', author: 'JohnDoe', content: 'Amazing food! Loved the pizza.', rating: 4, avatarSrc: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 'r2', author: 'JaneDoe', content: 'Spaghetti was delicious!', rating: 5, avatarSrc: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 'r3', author: 'JimDoe', content: 'Great atmosphere and good service', rating: 4, avatarSrc: 'https://randomuser.me/api/portraits/men/1.jpg' },
        
      ],
    },
  };

  const handleAddToCart = (item) => {
    setCart(oldCart => [...oldCart, item]);
  }

 return (
    <div className="bg-white">
      <MenuNav />
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
    <Restaurant restaurant={restaurant} handleAddToCart={handleAddToCart} />
</div>
      <FAQ restaurant={restaurant} />  {/* Pass the restaurant data as a prop */}
      <MenuFooter />
    </div>
  );
}
