// components/CarList.js
import React from "react";
import Image from "next/image";
import car1 from "/public/images/car1.png";
import car2 from "/public/images/car3.png";
import car3 from "/public/images/car4.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: car1,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container mx-auto px-4">
        <div className="space-y-4 pb-12">
          <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif">
            Car list
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                key={index}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <Image
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
