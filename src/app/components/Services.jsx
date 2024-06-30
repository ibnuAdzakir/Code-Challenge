import React from "react";
import { FaDollarSign, FaShieldAlt, FaUserTie } from "react-icons/fa";

const servicesData = [
  {
    name: "Best Price",
    Icon: FaDollarSign,
    description: "Get the best deals on our services without compromising on quality.",
  },
  {
    name: "Fast and Safe",
    Icon: FaShieldAlt,
    description: "Experience quick and secure service delivery with our reliable team.",
  },
  {
    name: "Experienced Drivers",
    Icon: FaUserTie,
    description: "Our professional drivers ensure a comfortable and safe journey.",
  },
];

const Services = () => (
  <section className="text-black" id="services">
    <div className="dark:bg-white dark:text-black py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {servicesData.map(({ name, Icon, description }) => (
            <div
              key={name}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16"
            >
              <div className="flex items-center justify-center">
                <Icon className="text-5xl text-primary group-hover:text-black" />
              </div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
