import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Hero() {
const navigate=useNavigate();
const [typedInput,setTypedInput]=useState("");
function handleChange(e){
    
    setTypedInput(e.target.value);
    
}
function handleSubmit(){

    navigate(`/course-list/${typedInput}`);
 setTypedInput("");

}
    return (
      <section className="flex justify-center h-fit-content px-6 pt-36">
        <div className="text-center max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empower your future with the <br />
            <span className="text-blue-600 decoration-wavy">
              fit your choice
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700">
            We bring together world-class instructors, interactive content, and a supportive
            community to help you achieve your personal and professional goals.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <input  onChange={(event)=>handleChange(event)}
              type="text"
              placeholder="Search for courses..."
              value={typedInput}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1"
            />
            <button onClick={handleSubmit} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-full hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>
    );
}
