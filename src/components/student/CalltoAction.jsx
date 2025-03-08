import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon

const CalltoAction = () => {
  return (
    <div className="bg-blue-100 text-gray-800 text-center py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Learn Anything, Anytime, Anywhere</h1>
      <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eius ratione 
        adipisci rem libero pariatur sed a, aliquam quod voluptatibus, voluptas cumque excepturi sit.
      </p>
      <div className="flex justify-center gap-6 items-center">
        <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition">
          Get Started
        </button>
        <Link to="" className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
          Learn More <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default CalltoAction;

