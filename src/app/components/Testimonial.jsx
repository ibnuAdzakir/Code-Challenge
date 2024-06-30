import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import client from "../utils/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'testimonial'
        });
        const items = response.items.map((item) => ({
          name: item.fields.name,
          image: `https:${item.fields.image.fields.file.url}`,
          description: item.fields.description,
        }));
        setTestimonialData(items);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Testimonials - Your Website</title>
      </Head>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container mx-auto">
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
                <div className="relative rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <Image
                    src={testi.image}
                    alt={`Picture of ${testi.name}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <div>{documentToReactComponents(testi.description)}</div>
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
