"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-black" id="about">
      <div className="md:flex md:justify-between gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:w-1/2">
          <Image
            src="/images/rent-cars.png"
            width={500}
            height={500}
            alt="Rent Cars"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col justify-center md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            Welcome to PT Holiday, your premier destination for car rentals. We
            pride ourselves on offering a diverse fleet of high-quality vehicles
            to meet all your transportation needs. Whether you are looking for a
            luxury sedan for a business trip, an SUV for a family vacation, or a
            compact car for city driving, we have the perfect ride for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
