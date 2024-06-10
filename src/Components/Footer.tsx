'use client'
import { ClockIcon,MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import LazyLoad from 'react-lazyload';


const cards = [
  {
    name: 'Find Us',
    description: [
      '121 Rock Sreet', 
      '21 Avenue',
      'New York', 
      'NY 92103-9000',
    ],
    icon: MapPinIcon,
  },
  {
    name: 'Hours',
    description: ['Monday – Saturday', '9am – 7pm', 'Sunday  10am – 6pm',
  ],
    icon: ClockIcon,
  },
  {
    name: 'Call Us',
    description: [ '​​1 (234) 567-8912', 'or', '2 (345) 333-897',
  ],
    icon: PhoneIcon,
  },
]

export default function Example01() {
  return (
    <footer className="bg-cover bg-[url('/footer1.jpg')] py-24 sm:py-32 h-[800px]">
      <LazyLoad>
      <img
        src="/footer.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      </LazyLoad>
      <div className="px-6 h-full py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#6B4721] mb-2 sm:text-6xl">Contact Us</h2>
          <p className="mt-6 text-lg font-semibold leading-8 text-[#6B4721]">
            "For any inquiries, orders, or feedback, please don't hesitate to reach out. Our friendly team is here to
            assist you with all your baking needs. You can contact us by phone, email, or visit our bakery location. We
            look forward to hearing from you and serving up delicious treats!"
          </p>
          <div className="mx-auto mb-16 flex flex-wrap justify-center gap-4 sm:mt-20 lg:mx-0 h-full">
            {cards.map((card) => (
              <div
                key={card.name}
                className="max-w-xs flex gap-x-4 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-[#6B4721]"
              >
                <card.icon className="h-6 w-4 ml-2 mt-2 flex-none text-[#C38D5E]" aria-hidden="true" />
                <div className="text-sm mt-2 leading-6">
                  <h3 className="font-semibold text-[#6B4721] text-xl text-center">{card.name}</h3>
                  {Array.isArray(card.description) ? (
                    <div>
                      {card.description.map((line, index) => (
                        <p key={index} className="mt-4 text-[#6B4721] text-base text-center">{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-1 text-[#C38D5E] text-sm">{card.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
       {/* </div><div className="absolute bottom-0 right-0 mx-6 mb-6 text-xs leading-5 text-[#6B4721]">
          <p className="text-xs leading-5 text-black">&copy; 2020 Your Company, Inc. All rights reserved.</p>
           */}
        </div>       
      </div>
    </footer>
  );
}


  
  
  
