import Image from 'next/image';
import React from 'react'
import Footerpage from '../Footer/page';

const page = () => {
  // Define the services array BEFORE JSX
  const services = [
    { imgSrc: "/images/1-1.png", hoverText: "New Constructions" },
    { imgSrc: "/images/2-1.png", hoverText: "Bathrooms" },
    { imgSrc: "/images/3-1.png", hoverText: "Renovation" },
  ];

  return (
    <div>
      <div className="md:p-28 p-12 bg-gray-300 bg-[url('/images/Wood-Textures-17-1.png')] text-black text-center font-extrabold text-7xl backdrop-brightness-50">
        OVER ONS
      </div>
      <div className='bg-black text-white text-center md:text-7xl text-4xl font-bold p-12'>
        <p>A PROFESSIONAL CONSTRUCTION COMPANY</p>

        {/* Services List */}
        <div className="bg-black flex flex-wrap gap-5 p-20 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border-black p-3 bg-slate-700"
            >
              {/* Image */}
              <Image
                width={200}
                height={100}
                alt={`service-${index + 1}`}
                src={service.imgSrc}
                className="w-full h-auto"
              />

              {/* Overlay Effect */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black/60 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:h-full group-hover:opacity-100">
                <span className="text-white text-xl font-semibold">
                  {service.hoverText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footerpage />
    </div>
  )
}

export default page