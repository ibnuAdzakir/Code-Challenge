import React from "react";
import { FaDollarSign, FaShieldAlt, FaUserTie } from "react-icons/fa";

const servicesData = [
  {
    name: "Best Price",
    icon: (
      <FaDollarSign className="text-5xl text-primary group-hover:text-black" />
    ),
    description:
      "Get the best deals on our services without compromising on quality.",
  },
  {
    name: "Fast and Safe",
    icon: (
      <FaShieldAlt className="text-5xl text-primary group-hover:text-black" />
    ),
    description:
      "Experience quick and secure service delivery with our reliable team.",
  },
  {
    name: "Experienced Drivers",
    icon: (
      <FaUserTie className="text-5xl text-primary group-hover:text-black" />
    ),
    description:
      "Our professional drivers ensure a comfortable and safe journey.",
  },
];

const Services = () => {
  return (
    <section className="text-black" id="services">
      <div className="dark:bg-white dark:text-black py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif">
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16"
              >
                <div className="flex items-center justify-center">
                  {service.icon}
                </div>
                <h1 className="text-2xl font-bold">{service.name}</h1>
                <p className="text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
