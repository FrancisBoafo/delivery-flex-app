import MenuNav from './Menu-Navigation'
import { useState } from 'react'


const MenuItem = ({ item }) => (
  <div className="flex justify-between my-4">
    <p className="text-lg">{item.name}</p>
    <p className="text-lg">${item.price.toFixed(2)}</p>
  </div>
)

const Restaurant = ({ restaurant, menus }) => {
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
      <div>
        <h4 className="mt-2 text-sg font-medium text-left text-gray-800">Menu</h4>
        {menus.filter(menu => menu.restaurantId === restaurant.id).map(menu => (
          <MenuItem key={menu.id} item={menu} />
        ))}
      </div>
   <div className="flex justify-end">
  <div className="relative h-80 w-80 mt-4 p-4 bg-gray-100 rounded-lg">
    <h3 className="text-xl font-bold mb-2">Location</h3>
    <p className="mb-2">{restaurant.location}</p>
  </div>
</div>

    </div>
  );
};

export default function RestaurantPage() {
  const [menus, setMenus] = useState([
  ]);
  
  const restaurant = {
    id: '123',
    name: 'Mario\'s Italian Kitchen',
    description: 'The best Italian food in Springfield!',
    location: '123 Fake St, Springfield',
    imageSrc: 'https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWNkb25hbGRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
    logo: 'https://img.cdn4dd.com/p/fit=contain,width=200,height=200,format=auto,quality=95/media/restaurant/cover_square/efe58558-a9dc-466d-922b-ecce4b3213b1.png',
    coordinates: [51.505, -0.09] 
  }

  return (
    <div className="bg-white">
      <MenuNav />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Restaurant restaurant={restaurant} menus={menus} />
      </div>
    </div>
  );
}



  
