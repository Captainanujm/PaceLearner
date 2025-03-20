import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react';
const Rating = ({initialRating}) => {
    const totalRating=5;
    const [rate,setRate]=useState(initialRating||0);
    function giveRating(starRate){
        setRate(starRate);
    }
  return (
    <div>
      {[...Array(totalRating)].map((_, index) => {
  const starRating = index + 1;
  return <FaStar onClick={()=>giveRating(starRating)} key={starRating} size={24} color={rate >= starRating ? "#ffc107" : "#e4e5e9"} />;
})}

    </div>
  )
}

export default Rating
