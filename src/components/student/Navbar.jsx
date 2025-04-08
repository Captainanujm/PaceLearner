import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import { assets } from "../../assets/assets";
import { useMatch } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isCourseListPage = useMatch("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <nav className="w-full h-[70px] flex items-center justify-between px-6 lg:px-12 border-b border-gray-300">
      <Link to="/">
        <img src={assets.logo} alt="logo-img" className="h-12" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {user && (
          <>
            <Link 
              to="/my-enrollments" 
              className="hover:text-gray-600 transition duration-200"
            >
              My Enrollments
            </Link>
            <Link to="educator">
            <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition">
              Become an Educator
            </button></Link>
          
          </>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button 
            onClick={() => openSignIn()} 
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-gray-900 bg-opacity-95 flex flex-col items-center py-6 space-y-4 transition-all duration-300 md:hidden">
          {user && (
            <Link 
              to="/my-enrollments" 
              className="text-white text-lg hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              My Enrollments
            </Link>
          )}
          
          {user ? (
            <button 
              className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition"
              onClick={() => setIsOpen(false)}
            >
              Become an Educator
            </button>
          ) : (
            <button 
              onClick={() => openSignIn()} 
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
            >
              Create Account
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
