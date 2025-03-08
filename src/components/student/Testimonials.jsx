import React from 'react';
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Hear from our learners as they share their journeys of transformation, success, 
        and how our platform has made a difference in their lives.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Testimonials;
