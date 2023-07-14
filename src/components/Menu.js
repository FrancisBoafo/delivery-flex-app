import MenuNav from './Menu-Navigation'
const restaurants = [
    {
      id: 1,
      name: 'Italian Bistro',
      href: '#',
      location: 'Downtown',
      imageSrc: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      imageAlt: 'Italian restaurant with bright and cozy interior.',
    },
    {
      id: 2,
      name: 'Sushi Bar',
      href: '#',
      location: 'City Center',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1684351369708-0eecc53e2691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtmY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
      imageAlt: 'Sushi bar with traditional Japanese style.',
    },

    {
        id: 3,
        name: 'Taco Place',
        href: '#',
        location: 'City Center',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1685316938388-c3dfe9a57ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjbyUyMGJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
        imageAlt: 'Taco Place with traditional Mexican style.',
        },
    {
        id: 4,
        name: 'Burger Joint',
        href: '#',
        location: 'City Center',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1685316938388-c3dfe9a57ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjbyUyMGJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
        imageAlt: 'Burger Joint with traditional American style.',
        },
    {
        id: 5,
        name: 'Pizza Place',
        href: '#',
        location: 'City Center',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1685316938388-c3dfe9a57ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjbyUyMGJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
        imageAlt: 'Pizza Place with traditional Italian style.',
        },
    {
        id: 6,
        name: 'Steak House',
        href: '#',
        location: 'City Center',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1685316938388-c3dfe9a57ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjbyUyMGJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
        imageAlt: 'Steak House with traditional American style.',
        },
  
  ]
  export default function Example() {
    return (
      <div className="bg-white">
        <MenuNav />
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Restaurants</h2>
    
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {restaurants.map((restaurant) => (
              <a key={restaurant.id} href={restaurant.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={restaurant.imageSrc}
                    alt={restaurant.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{restaurant.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{restaurant.location}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
