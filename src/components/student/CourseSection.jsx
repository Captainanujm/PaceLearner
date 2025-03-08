import React from 'react';
import CourseCard from './CourseCard';
import { dummyCourses } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const CourseSection = () => {
  const newdummycourses = dummyCourses.slice(0, 4);
  const navigate = useNavigate(); 
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Learn from the Best
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
          Discover our top-rated courses across various categories. From coding and design 
          to business and wellness, our courses are crafted to deliver results.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full place-items-center">
          {newdummycourses.map((course) => {
            const totalReviews = course.courseRatings.length;
            const averageRating = totalReviews > 0
              ? course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0) / totalReviews
              : 0;

            return (
              <CourseCard onClick={()=>navigate(`/course/${course._id}`)}
                key={course._id}
                courseThumbnail={course.courseThumbnail}
                title={course.courseTitle}
                educator={course.educator}
                rating={averageRating}
                price={course.coursePrice}
                totalReviews={totalReviews}
              />
            );
          })}
        </div>
        <button onClick={() => navigate("/course-list")}  className="mt-8 sm:mt-12 bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
          Explore All Courses
        </button>
      </div>
    </section>
  );
};

export default CourseSection;
