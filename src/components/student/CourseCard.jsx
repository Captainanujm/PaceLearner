import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
const CourseCard = (props) => {
const {currency}=useContext(AppContext);
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
const convertedPrice = props.price * (exchangeRates[currency] || 1);
  return (
    <div onClick={props.onClick} className="bg-white shadow-lg rounded-lg overflow-hidden w-60 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <img
        src={props.courseThumbnail}
        alt={props.title}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{props.title}</h3>
        <p className="text-xs text-gray-600 mb-2">by {props.educator}</p>

        <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) =>
              props.rating >= i + 1 ? (
                <FaStar key={i} className="w-4 h-4" />
              ) : props.rating >= i + 0.5 ? (
                <FaStarHalfAlt key={i} className="w-4 h-4" />
              ) : (
                <FaRegStar key={i} className="w-4 h-4" />
              )
            )}
          </div>
          <span className="ml-1 text-xs text-gray-600">({props.totalReviews || 0})</span>
        </div>
        <p className="text-lg font-bold text-blue-600">{`${currency} ${convertedPrice.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default CourseCard;