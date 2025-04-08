import React,{useState} from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const Sidebar = () => {
  const [sideopen,setSideOpen]=useState(false);
  const navigate=useNavigate();
   return (
    sideopen==true?(

      <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 space-y-4">
        <button
          className="text-white text-xl self-end p-2 md:hidden"
          onClick={() => setSideOpen(false)}
        >
          ✖
        </button>
      <div onClick={()=>navigate("dashboard")} className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
        <img src={assets.home_icon} alt="Home-icon" className="w-6 h-6" />
        <span  className="text-lg font-semibold">Dashboard</span>
      </div>
      <div  onClick={()=>navigate("add-courses")}  className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
        <img src={assets.add_icon} alt="Add-icon" className="w-6 h-6" />
        <span className="text-lg font-semibold">Add Courses</span>
      </div>
      <div onClick={()=>navigate("my-courses")}  className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
        <img src={assets.my_course_icon} alt="My-courses" className="w-6 h-6" />
        <span className="text-lg font-semibold">My Courses</span>
      </div>
      <div onClick={()=>navigate("students-enrolled")} className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
        <img src={assets.person_tick_icon} alt="Student-enrolled" className="w-6 h-6" />
        <span  className="text-lg font-semibold">Student Enrolled</span>
      </div>
      
    </div>
    ):(<div>
      <FiMenu onClick={()=>setSideOpen(!sideopen)} size={24} />
    </div>)


   
  );
};

export default Sidebar;

