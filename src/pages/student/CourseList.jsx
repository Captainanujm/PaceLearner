import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import Footer from "../../components/student/Footer.jsx"

const CourseList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [typedInputCourse, setTypedInputCourse] = useState("");

  useEffect(() => {
    if (params.courseName) {
      setTypedInputCourse(params.courseName);
    }
  }, [params.courseName]);

  function handleChangeCourse(event) {
    setTypedInputCourse(event.target.value);
  }

  function handleSubmitCourse() {
    if (typedInputCourse.trim() === "") {
      navigate(`/course-list`);
    } else {
      navigate(`/course-list/${typedInputCourse}`);
    }
  }
  return (
    <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 py-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Course List</h1>
      <p className="text-gray-600 text-lg mb-6">
        <span 
          className="cursor-pointer text-blue-600 hover:underline" 
          onClick={() => navigate("/")}
        >
          Home
        </span> 
        / Course List
      </p>
      
      <div className="mt-6 flex items-center justify-center">
        <input 
          onChange={handleChangeCourse}
          type="text"
          placeholder="Search for courses..."
          value={typedInputCourse}
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleSubmitCourse} 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-full hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>
      
      <div className="mt-8">
        <Outlet />
      </div>
      <div className="mt-12">
        <Footer />
      </div>
     
    </div>
  );
};

export default CourseList;