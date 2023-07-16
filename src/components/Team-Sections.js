import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const people = [
  {
    name: 'Rama Osei Boafo',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'Francis Osei Boafo',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://media.istockphoto.com/id/1348671636/photo/young-businessman-smiling-while-standing-in-a-modern-office.webp?s=170667a&w=0&k=20&c=g6cWEIYDQ7pKjnvyB4o3qoKWTeBTRWREgmLNHWeTYvQ=',
  },
  {
    name: 'Jane Doe',
    role: 'Head of Marketing',
    imageUrl:
      'https://images.unsplash.com/photo-1503467913725-8484b65b0715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'John Smith',
    role: 'Head of Sales',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Andy Steingass',
    role: 'Board Memeber',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format',
  }
];

export default function Example() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With a commitment to exceptional service and the highest quality food delivery, our team is passionate about making sure your meals arrive hot, fast, and delicious.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person, index) => (
            <li key={person.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



