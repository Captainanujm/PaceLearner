import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CourseSection from "../../components/student/CourseSection";
import TestimonialsCard from "../../components/student/TestimonialsCard";
import Testimonials from "../../components/student/Testimonials";
import CalltoAction from "../../components/student/CalltoAction";
import Footer from "../../components/student/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6FFFF] to-white">
      <Hero />
      <div className="mt-16 md:mt-18">
        <Companies />

      </div>
      <CourseSection/>
      <Testimonials/>
      <CalltoAction/>
      <Footer/>
    </div>
  );
};

export default Home;
