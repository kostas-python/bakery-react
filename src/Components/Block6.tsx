
import React from 'react';



const TestimonialsSection = () => {
  return (
    <section className="flex items-center justify-center h-[1000px] bg-[url('/88-min.jpg')] bg-cover bg-center from-gray-100 to-gray-300">
      <div className="container mx-auto py-16 text-white">
        <h2 className="text-3xl font-bold mb-8">Read what our customers say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-orange-400/75 rounded-lg p-6">
            <p className="text-xl italic mb-12">
              &quot;I express deep appreciation for the exceptional customer service provided by the staff, who went above and beyond to ensure my experience was nothing short of delightful.&quot;
            </p>
            <h5 className="text-xl font-semibold">CELIA ALMEDA</h5>
          </div>
          <div className="bg-orange-400/75 rounded-lg p-6">
            <p className="text-xl italic mb-6">
              &quot;In my opinion, I appreciated the mouthwatering array of baked goods and the seamless ordering process offered by the bakery. Overall, I found the bakery to be a reliable source of delicious treats.&quot;
            </p>
            <h5 className="text-xl font-semibold">FRANK KINNEY</h5>
          </div>
          <div className="bg-orange-400/75 rounded-lg p-6">
            <p className="text-xl italic mb-14">
              &quot;I was pleasantly surprised by the quality and taste of the baked goods, which exceeded my expectations. I highly recommended the bakery to others seeking delicious treats.&quot;
            </p>
            <h5 className="text-xl font-semibold">SAM PERRY</h5>
          </div>
          <div className="bg-orange-400/75 rounded-lg p-6">
            <p className="text-xl italic mb-14">
              &quot;I highlight the attention to detail and the fresh ingredients used in their products, which contributed to my overall satisfaction and enjoyment of the bakery's offerings.&quot;
            </p>
            <h5 className="text-xl font-semibold">MARRY HUDSON</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

