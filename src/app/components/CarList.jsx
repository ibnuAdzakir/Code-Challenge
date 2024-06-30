import React, { useEffect, useState } from "react";
import Image from "next/image";
import client from "../utils/contentfulClient";

const CarList = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'car'
        });
        const items = response.items.map((item) => ({
          name: item.fields.name,
          price: item.fields.price,
          image: `https:${item.fields.image.fields.file.url}`,
          width: item.fields.image.fields.file.details.image.width,
          height: item.fields.image.fields.file.details.image.height
        }));
        setCarList(items);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchData();
  }, []);

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
                <div className="relative w-full h-[120px]">
                  <Image
                    src={data.image}
                    alt={data.name}
                    layout="fill"
                    objectFit="contain"
                    className="sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
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
