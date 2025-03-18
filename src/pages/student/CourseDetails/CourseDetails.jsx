import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dummyCourses } from "../../../assets/assets";
import CourseDiscountCard from "./CourseDiscountCard";
import { CourseStructure } from "./CourseStructure";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
const CourseDetails = () => {
  const { courseID } = useParams();
  const course = dummyCourses.find((c) => c._id === courseID);
  const totalReviews=course.courseRatings.length;
  const averageRating = totalReviews > 0
  ? course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0) / totalReviews
  : 0;
 return(<div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-50 min-h-screen items-start justify-center">
  
       <div className="flex-1 bg-white p-5 rounded-lg shadow-md max-w-3xl">
       <div className="flex-1 bg-white p-5 rounded-lg shadow-md max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">{course?.courseTitle}</h2>
         <p className="text-gray-700 text-lg flex items-center">
                   <strong>⭐ Rating:</strong>
                   <span className="ml-2 text-yellow-500 flex items-center">
                     {[...Array(5)].map((_,id)=>
                       averageRating>=id+1? <FaStar key={id} className="w-4 h-4" />:
                       averageRating>=0.5? <FaStarHalfAlt key={id} className="w-4 h-4" />:
                       <FaRegStar key={id} className="w-4 h-4" />
                   )}
                   </span>
                 </p>
        </div>
       <CourseStructure/>
       </div>
      
       <div className="w-full lg:w-96 bg-white p-5 rounded-lg shadow-md self-start">
        <CourseDiscountCard course={course} />
      </div>
 </div>)
}
export default CourseDetails;
  