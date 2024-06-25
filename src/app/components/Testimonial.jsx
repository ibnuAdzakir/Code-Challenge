import React from "react";
import Head from "next/head";

const testimonialData = [
  {
    name: "Kaka",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Kiki",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Koko",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

const Testimonial = () => {
  return (
    <>
      <Head>
        <title>Testimonials - Your Website</title>
      </Head>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container mx-auto">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p className="text-3xl font-semibold text-center sm:text-4xl font-serif">
              What Our Clients Say About Us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testi, index) => (
              <div
                key={index}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testi.description}</p>
                <p className="text-center font-semibold">{testi.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
