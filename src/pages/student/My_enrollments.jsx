import React, { useContext } from 'react';
import { dummyCourses } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/student/Footer';
import { Line } from "rc-progress";

const MyEnrollments = () => {
  const { calculateDuration, lectureCount } = useContext(AppContext);
  const navigate = useNavigate();
  const lecturesCompleted = [4, 3, 2, 2, 1, 3, 2, 4];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-5">📚 My Enrollments</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-6 py-3 w-2/5">Course</th>
              <th className="border border-gray-300 px-4 py-3">Duration</th>
              <th className="border border-gray-300 px-4 py-3">Lectures Completed</th>
              <th className="border border-gray-300 px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyCourses.map((enrollment, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-6 py-4 text-left">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <img 
                        src={enrollment.courseThumbnail} 
                        alt={enrollment.courseTitle} 
                        className="w-16 h-16 object-cover rounded-md" 
                      />
                      <span className="font-semibold text-lg">{enrollment.courseTitle}</span>
                    </div>
                    <Line strokeWidth={2} percent={(lecturesCompleted[index] / lectureCount(enrollment._id)) * 100} className="mt-1" />
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-4">{calculateDuration(enrollment._id)} hours</td>
                <td className="border border-gray-300 px-4 py-4">{`${lecturesCompleted[index]}/${lectureCount(enrollment._id)}`}</td>
                <td className="border border-gray-300 px-4 py-4">
                  <div className="w-full bg-gray-200 rounded-full h-6 relative">
                    <div 
                      onClick={() => navigate(`/player/${enrollment._id}`)}
                      className={`h-full text-white text-xs cursor-pointer flex items-center justify-center rounded-full w-full ${
                        (lecturesCompleted[index] / lectureCount(enrollment._id)) * 100 === 100
                          ? "bg-green-600"
                          : "bg-blue-600"
                      }`}
                    >
                      {lecturesCompleted[index] < lectureCount(enrollment._id) ? "Pending" : "Completed"}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default MyEnrollments;
