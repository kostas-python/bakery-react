import { ClockIcon,MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'


const cards = [
  {
    name: 'Find Us',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur. ',
    icon: MapPinIcon,
  },
  {
    name: 'Hours',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: ClockIcon,
  },
  {
    name: 'Call Us',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: PhoneIcon,
  },
]

export default function Example() {
    return (
      <div className="bg-cover bg-[url('/footer1.jpg')] py-24 sm:py-32">
        <img
          src="/footer.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#6B4721] sm:text-6xl">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-[#6B4721]">
              "For any inquiries, orders, or feedback, please don't hesitate to reach out. Our friendly team is here to
              assist you with all your baking needs. You can contact us by phone, email, or visit our bakery location. We
              look forward to hearing from you and serving up delicious treats!"
            </p>
          </div>
          <div className="mx-auto mt-16 flex flex-wrap justify-center gap-4 sm:mt-20 lg:mx-0">
            {cards.map((card) => (
              <div
                key={card.name}
                className="max-w-xs flex gap-x-4 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-[#6B4721]"
              >
                <card.icon className="h-6 w-4 flex-none text-[#C38D5E]" aria-hidden="true" />
                <div className="text-sm leading-6">
                  <h3 className="font-semibold text-white text-sm">{card.name}</h3>
                  <p className="mt-1 text-[#C38D5E] text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
  
