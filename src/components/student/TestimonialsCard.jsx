import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {dummyTestimonial.map((testimonial, index) => (
        <div 
          key={index} 
          className="bg-white shadow-lg rounded-2xl p-6 w-80 flex flex-col items-center text-center"
        >
          <img 
            src={testimonial.image} 
            alt="test-image" 
            className="w-20 h-20 rounded-full border-2 border-gray-300 mb-4"
          />
          <span className="text-lg font-semibold text-gray-800">{testimonial.name}</span>
          <span className="text-sm text-gray-500">{testimonial.role}</span>
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, ind) => (
              <img 
                key={ind} 
                src={ind < testimonial.rating ? assets.star : assets.star_blank} 
                alt="star" 
                className="w-5 h-5"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-3">{testimonial.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCard;
