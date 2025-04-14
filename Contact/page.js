import React from "react";
import Footerpage from "../Footer/page";
import { BsTelephonePlus } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiAddressBookDuotone } from "react-icons/pi";

// Data Array for Cards
const contactDetails = [
  {
    icon: <BsTelephonePlus />,
    title: "Telefoon",
    info: "+31 6 87328258",
  },
  {
    icon: <HiOutlineMailOpen />,
    title: "E-mail",
    info: "info@bouwbedrijf-am.nl",
  },
  {
    icon: <PiAddressBookDuotone />,
    title: "Adres",
    info: "Betsy van goorstraat 70, Wageningen",
  },
];

const Page = () => {
  return (
    <div>
      {/* Video Section */}
      <div className="w-full bg-black flex justify-center p-20 text-center">
        <video
          width="400"
          height="200"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none"
        >
          <source src="/videos/next.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contact Cards */}
      <div className="w-full bg-black h-96 flex justify-center p-16 text-center gap-10">
        {contactDetails.map((item, index) => (
          <div key={index} className="bg-gray-300 w-72 flex">
            <div className="p-16 text-center mt-3">
              <div className="font-bold text-6xl w-[50%] mx-auto">{item.icon}</div>
              <div className="font-bold text-3xl">{item.title}</div>
              <div className="mt-4">{item.info}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footerpage />
    </div>
  );
};

export default Page;