import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";

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
      const totalHours=courseFindedForDuration.courseContent.reduce((lecdur,chapter)=>{
          return lecdur+chapter.chapterContent.reduce((lec,lec_object)=>{
              return lec+lec_object.lectureDuration;
          },0)
      },0)/60;
      return totalHours.toFixed(2);
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
