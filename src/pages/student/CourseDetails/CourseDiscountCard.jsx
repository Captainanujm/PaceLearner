import { Star } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
const CourseCard = (props) => {
const courseTitle=props.course.courseTitle;
const {currency}=useContext(AppContext);
const totalReviews=props.course.courseRatings.length;
const exchangeRates = {
  USD: 1,   
  INR: 80,  
  GBP: 0.78, 
  EUR: 0.92, 
  JPY: 130,  
  AUD: 1.5,  
  CAD: 1.3,  
  CHF: 0.9   
};
const averageRating = totalReviews > 0
? props.course.courseRatings.reduce((sum, rating) => sum + rating.rating, 0) / totalReviews
: 0;
const convertedPrice = props.course.coursePrice * (exchangeRates[currency] || 1);
const discountedPrice=(convertedPrice*props.course.discount)/100;
  return (
    <div className="max-w-sm mx-auto border border-gray-200 rounded-2xl shadow-xl bg-white overflow-hidden">
      <img
        src={props.course.courseThumbnail}
        alt="Course"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{courseTitle}</h2>
        <p
  dangerouslySetInnerHTML={{ __html: `${props.course.courseDescription.slice(0, 80)}...` }}
  className="text-sm text-gray-500 mb-3"
></p>
        <div className="mt-3 space-y-3">
          <p className="text-gray-700 text-lg">
            <strong>📚 Lectures:  {props.course.courseContent.reduce((countLec,currentIndex)=>
                countLec+currentIndex.chapterContent.length
            ,0
            )}</strong>
          </p>
          <p className="text-gray-700 text-lg">
            <strong>⏳ Total Hours:</strong> {props.course.courseContent.reduce((lecDur,chapter)=>
            lecDur+chapter.chapterContent.reduce((lec,index)=>lec+Number(index.lectureDuration),0)

            ,0)/60} hours
          </p>
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
          <p className="text-gray-700 text-lg">
           
            <strong>💰 Price:</strong>  <span>{`${currency}`}</span> <span className="line-through text-red-500"> {` ${convertedPrice.toFixed(2)}`}</span> 
            <span className="text-green-600 font-bold text-xl">     {discountedPrice.toFixed(2)}</span>
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-600">📌 What you'll learn:</h3>
          <ul className="list-disc text-gray-600 text-sm pl-5 mt-1 space-y-1">
          {props.course.courseContent.slice(0, 4).map((content) => (
   <li key={content.chapterId}>🔥 {content.chapterTitle}</li>
))}
<li> 🔥 and much more...</li>
          </ul>
        </div>
        <button className="mt-5 w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          Enroll Now 🚀
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
