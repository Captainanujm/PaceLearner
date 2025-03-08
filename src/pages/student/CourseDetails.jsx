import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dummyCourses } from "../../assets/assets";
const CourseDetails = () => {
  const { courseID } = useParams();
  const course = dummyCourses.find((c) => c._id === courseID);

  if (!course) {
    return <h2 className="text-center text-red-500">Course not found</h2>;
  }
useEffect(()=>{
  console.log(course)
},[courseID]);
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
      {/* Left Section - Course Details */}
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-4">{course.courseTitle}</h1>
        <img 
          src={course.courseThumbnail} 
          alt={course.courseTitle} 
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <div 
          className="mb-4 text-gray-700" 
          dangerouslySetInnerHTML={{ __html: course.courseDescription }}
        ></div>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Course Content</h2>
        {course.courseContent.map((chapter) => (
          <div key={chapter.chapterId} className="mb-6 p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600">
              {chapter.chapterOrder}. {chapter.chapterTitle}
            </h3>
            <ul className="list-disc pl-5 mt-2">
              {chapter.chapterContent.map((lecture) => (
                <li key={lecture.lectureId} className="mb-2 flex items-center gap-2">
                  <span className="font-medium">{lecture.lectureTitle}</span> - {Math.floor(lecture.lectureDuration / 60)} min {lecture.lectureDuration % 60} sec
                  {lecture.isPreviewFree && (
                    <a 
                      href={lecture.lectureUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 underline ml-2"
                    >[Watch Free]</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Section - Pricing & Enrollment */}
      <div className="md:w-1/3 p-6 border rounded-lg shadow-md bg-gray-100">
        <p className="text-gray-600 mb-2">Limited-time offer</p>
        <h3 className="text-4xl font-bold text-green-600">$
          {(course.coursePrice - (course.coursePrice * course.discount) / 100).toFixed(2)}
        </h3>
        <p className="text-sm text-gray-500 line-through">${course.coursePrice.toFixed(2)}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700">
          Enroll Now
        </button>
        <ul className="mt-4 text-gray-700 text-sm">
          <li>✔ Lifetime access</li>
          <li>✔ Step-by-step project guidance</li>
          <li>✔ Certificate of completion</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
