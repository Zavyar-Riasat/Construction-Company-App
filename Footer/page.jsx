import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footerpage = () => {
  return (
    <footer className="bg-[#0D1321] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Company Info */}
        <div>
          <Image className="bg-white" src="/images/logo.png" alt="Company Logo" width={160} height={120} />
          <p className="mt-3 text-sm leading-relaxed">
            AM Bouwbedrijf is een ervaren bouwbedrijf dat door de jaren heen een
            goede reputatie heeft opgebouwd. Wij werken over heel Nederland maar
            ook in het buitenland.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold flex items-center gap-2">
            <FaPhoneAlt /> Telefoon
          </h3>
          <p className="text-sm mt-1">+31 6 87328258</p>

          <h3 className="font-bold flex items-center gap-2 mt-3">
            <FaEnvelope /> Email
          </h3>
          <p className="text-sm mt-1">info@bouwbedrijf-am.nl</p>

          <h3 className="font-bold flex items-center gap-2 mt-3">
            <FaMapMarkerAlt /> Adres
          </h3>
          <p className="text-sm mt-1">Betsy van Goorstraat 70, 6702 DC Wageningen</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold">Navigation</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Nieuwbouw & Verbouw</li>
            <li>Badkamers</li>
            <li>Renovaties</li>
            <li>Verandas</li>
          </ul>

          <h3 className="font-bold mt-4">Diensten</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Home</li>
            <li>Over ons</li>
            <li>Offerte aanvragen</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-bold">Werkuren</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Ma - Vr: 07:00 - 17:00</li>
            <li>Zaterdag: 09:00 - 15:00</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm border-t border-gray-600 pt-4">
        © 2024 Construction company - AM | Created by <span className="font-bold">Zavyar-Riasat</span>
      </div>
    </footer>
  );
};

export default Footerpage;