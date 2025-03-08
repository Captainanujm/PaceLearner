import React from "react";
import { assets } from "../../assets/assets";
const Companies = () => {
  const companyLogos = [
    assets.walmart_logo,
    assets.microsoft_logo,
    assets.paypal_logo,
    assets.accenture_logo,
    assets.adobe_logo,
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-8">
          Trusted by Learners from
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                className="h-10 w-40 sm:h-16 object-contain hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
