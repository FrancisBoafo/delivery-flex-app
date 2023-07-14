const posts = [
    {
      id: 1,
      title: 'Our Newest Partner: Pizza Man',
      href: '#',
      description:
        'We\'re excited to announce a new partnership with Pizza Man! Enjoy their world-famous pepperoni pizza from the comfort of your home.',
      date: 'Jul 13, 2023',
      datetime: '2023-07-13',
      category: { title: 'Partnerships', href: '#' },
      author: {
        name: 'John Doe',
        role: 'Community Manager',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Taco Fiesta Joins Our Network',
      href: '#',
      description:
        'We\'re thrilled to welcome Taco Fiesta into our growing list of partners. Get ready for some delicious Mexican food delivered straight to your doorstep!',
      date: 'Jul 14, 2023',
      datetime: '2023-07-14',
      category: { title: 'Partnerships', href: '#' },
      author: {
        name: 'Rama Osei Akoto',
        role: 'Community Manager',
        href: '#',
        imageUrl:
        'https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
      },
    },
    {
      id: 3,
      title: 'New Features Added to Our App',
      href: '#',
      description:
        'Check out the new features in our app, making it even easier for you to order food and track your delivery in real-time.',
      date: 'Jul 15, 2023',
      datetime: '2023-07-15',
      category: { title: 'App Updates', href: '#' },
      author: {
        name: 'Emmanuel Boafo',
        role: 'Director of Marketing',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
      },
    },
  ]
  
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Updates</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Stay updated with the latest news from our community.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50 object-cover" />
            <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                <a href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                </a>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
            </div>
            </div>

            
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
