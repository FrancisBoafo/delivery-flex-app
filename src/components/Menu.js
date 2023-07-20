import { useState } from 'react';
import MenuNav from './Menu-Navigation';
import Reviews from './Reviews';
import { StarIcon } from '@heroicons/react/20/solid'
import FAQ from './FAQ';
import MenuFooter from './Menu-Footer';

const MenuItem = ({ item, handleAddToCart }) => (
  <div className="flex justify-between my-4">
    <div>
      <p className="text-lg">{item.name}</p>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
    <div>
      <p className="text-lg">${item.price.toFixed(2)}</p>
      <button onClick={() => handleAddToCart(item)} className="text-xs px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600">Add to Cart</button>
    </div>
  </div>
);

const Restaurant = ({ restaurant, handleAddToCart }) => {
  const averageRating = restaurant.reviews.average;

  return (
    <div className="mb-4">
      <div className="relative h-80 w-full overflow-hidden rounded-lg">
        <img
          src={restaurant.imageSrc}
          alt={restaurant.imageAlt}
          className="w-full h-full object-cover"
        />
        <img
          src={restaurant.logo}
          alt={`${restaurant.name} logo`}
          className="h-20 w-20 object-cover rounded-full border-4 border-white absolute bottom-0 transform -translate-y-1/4 translate-x-2"
        />
      </div>

      <h2 className="mt-2 text-s text-left font-bold">{restaurant.name}</h2>
      <p className='text-left text-sm text-gray-600'>{restaurant.description}</p>
      <p className='text-left text-sm text-gray-600'>{`Average Rating: ${averageRating.toFixed(1)} / 5`}</p>


    

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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Restaurant restaurant={restaurant} handleAddToCart={handleAddToCart} />
      </div>
      <FAQ />
      <MenuFooter />
    </div>
  );
}
