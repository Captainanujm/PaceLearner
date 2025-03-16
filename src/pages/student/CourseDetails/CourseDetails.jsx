import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dummyCourses } from "../../../assets/assets";
import CourseDiscountCard from "./CourseDiscountCard";
const CourseDetails = () => {
  const { courseID } = useParams();
  const course = dummyCourses.find((c) => c._id === courseID);

 return(<div>
        <CourseDiscountCard course={course}/>
 </div>)
}
export default CourseDetails;
  