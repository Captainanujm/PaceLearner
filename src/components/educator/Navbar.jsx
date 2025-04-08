import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
        <Link to="/">
        <div className="flex items-center gap-3">
        <img src={assets.logo} alt="logo" className="h-10" />
      </div>
      </Link>
     

      
      <div className="flex items-center gap-4">
        <p className="text-lg font-medium text-gray-700">
          Hi, {user ? user.fullName : "Developers"}
        </p>
        <div className="flex items-center">
          {user ? (
            <UserButton />
          ) : (
            <img
              src="../../assets/user_icon2.svg"
              alt="user"
              className="h-8 w-8 rounded-full border border-gray-300"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
