import React, { useContext } from 'react';
import { dummyCourses } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const MyEnrollments = () => {
  const { calculateDuration,lectureCount } = useContext(AppContext);
const lecturesCompleted=[4,3,1,2,1,3,2,4];
  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-5">📚 My Enrollments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Duration</th>
              <th className="border border-gray-300 px-4 py-2">Lectures Completed</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyCourses.map((enrollment, index) => (
              <tr key={index} className="text-center">
                {/* ✅ Course Column - Thumbnail + Title */}
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={enrollment.courseThumbnail} 
                      alt={enrollment.courseTitle} 
                      className="w-14 h-14 object-cover rounded-md" 
                    />
                    <span className="text-left">{enrollment.courseTitle}</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">{calculateDuration(enrollment._id)}</td>
                <td className="border border-gray-300 px-4 py-2"> {`${lecturesCompleted[index]}/${lectureCount(enrollment._id)}`}</td>
                <td className="border border-gray-300 px-4 py-2">
               <div className="w-full bg-gray-200 rounded-full h-6 relative">
                <div
      className={`h-full text-white text-xs flex items-center justify-center rounded-full ${
        (lecturesCompleted[index] / lectureCount(enrollment._id)) * 100 === 100
          ? "bg-green-600"
          : "bg-blue-600"
      }`}
      style={{
        width: `${(lecturesCompleted[index] / lectureCount(enrollment._id)) * 100}%`,
      }}
    >
      {Math.round((lecturesCompleted[index] / lectureCount(enrollment._id)) * 100)}%
    </div>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollments;
