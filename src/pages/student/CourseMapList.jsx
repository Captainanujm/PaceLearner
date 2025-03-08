import React from 'react';
import { useEffect } from 'react';
import { dummyCourses } from '../../assets/assets.js';
import CourseCard from '../../components/student/CourseCard';
import { useNavigate,useParams,useLocation } from 'react-router-dom';

const CourseMapList = () => {
  let filteredCourses = [];
  const navigate = useNavigate();
  const { courseName } = useParams();
  if (!courseName) {
    filteredCourses = dummyCourses;
  } else {
    filteredCourses = dummyCourses.filter((course) =>
      course.courseTitle && course.courseTitle.toLowerCase().includes(courseName.toLowerCase())
    );
  }
  return (
    <div className="mt-12 w-full px-4 sm:px-8 md:px-12 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">Explore Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 place-items-center">
       
        {filteredCourses.length>0?filteredCourses.map((course) => {
          const totalReviews = course.courseRatings.length;
          const averageRating = totalReviews > 0
            ? course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0) / totalReviews
          : 0;

          return (
            <CourseCard 
              key={course._id} 
              courseThumbnail={course.courseThumbnail} 
              title={course.courseTitle} 
              educator={course.educator} 
              rating={averageRating} 
              price={course.coursePrice} 
              totalReviews={totalReviews} 
              onClick={() => navigate(`/course/${course._id}`)} 
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          );
        }):<div className="col-span-full flex flex-col items-center justify-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
        <p className="text-xl font-semibold text-gray-700">No courses found</p>
        <p className="text-gray-500 mt-2">Try a different search term or browse all courses</p>
        <button 
          onClick={() => navigate('/course-list')} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Courses
        </button>
      </div>
          }
      </div>
    </div>
  );
};

export default CourseMapList;