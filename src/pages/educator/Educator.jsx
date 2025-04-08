import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/educator/Sidebar";
import Navbar from "../../components/educator/Navbar";

const Educator = () => {
  return (
    <div className="flex flex-col flex-1">
      
      <Navbar />
      
      <div className=" flex h-screen bg-gray-100">
       
       
        <Sidebar />
       
        <div className="p-4 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Educator;
