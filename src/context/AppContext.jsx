import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import {DateTime,Duration} from "luxon";
export const AppContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const currencyMap = {
    US: "USD",
    IN: "INR",
    GB: "GBP",
    EU: "EUR",
    JP: "JPY",
    AU: "AUD",
    CA: "CAD",
    CH: "CHF",
  };

  const [currency, setCurrency] = useState("USD");
  const [playinglecture,setPlayingLecture]=useState(null);
  function lectureCount(courseID){
    const courseFindedForDuration=dummyCourses.find(ind_course=>ind_course._id===courseID)
    if (!courseFindedForDuration) return 0;
    return courseFindedForDuration.courseContent.reduce((leccount,chapter)=>{
      return leccount+  chapter.chapterContent.length;
    },0)
  }
  function calculateDuration(courseID){
    const courseFindedForDuration=dummyCourses.find(ind_course=>ind_course._id===courseID)
    if (!courseFindedForDuration) return 0;
      const minutes=courseFindedForDuration.courseContent.reduce((lecdur,chapter)=>{
          return lecdur+chapter.chapterContent.reduce((lec,lec_object)=>{
              return lec+lec_object.lectureDuration;
          },0)
      },0);


    //   const totalMinutes = courseFindedForDuration.courseContent.reduce((lecdur, chapter) => {
    //     return lecdur + chapter.chapterContent.reduce((lec, lec_object) => {
    //         return lec + lec_object.lectureDuration;
    //     }, 0);
    // }, 0);



      const duration=Duration.fromObject({minutes:minutes}).shiftTo("hours", "minutes");
      return `${duration.hours}h ${duration.minutes}m`

  }
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const country_code = data.country_code;

        if (currencyMap[country_code]) {
          setCurrency(currencyMap[country_code]);
        }
      } catch (error) {
        console.error("Error in fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <AppContext.Provider value={{ currency,playinglecture,setPlayingLecture,calculateDuration,lectureCount }}>
      {children}
    </AppContext.Provider>
  );
};
