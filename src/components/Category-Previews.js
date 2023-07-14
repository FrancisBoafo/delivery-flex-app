import { Link } from 'react-router-dom';

const restaurants = [
    {
      name: 'Pizza Man',
      description: 'The best Italian cuisine in town',
      imageSrc: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      imageAlt: 'Restaurant 1 image',
      href: '/restaurant1',
    },
    {
      name: 'Sushi Express',
      description: 'Exquisite sushi and more',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1684351369708-0eecc53e2691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtmY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
      imageAlt: 'Restaurant 2 image',
      href: '/restaurant2',
    },
    {
      name: 'Taco Place',
      description: 'A fantastic fusion of flavours',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1685316938388-c3dfe9a57ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjbyUyMGJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
      imageAlt: 'Restaurant 3 image',
      href: '/restaurant3',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Restaurants</h2>
            <Link to="/menu" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            <span>Explore Menu</span>
            <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {restaurants.map((restaurant) => (
                <div key={restaurant.name} className="group relative">
                  <div className="relative w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                    <img
                      src={restaurant.imageSrc}
                      alt={restaurant.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 text-left">
                    <a href={restaurant.href}>
                      <span className="absolute inset-0" />
                      {restaurant.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 text-left">{restaurant.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  
  