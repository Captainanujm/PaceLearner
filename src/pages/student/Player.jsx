import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyCourses } from "../../assets/assets";
import Youtube from "react-youtube";
import Rating from "../../components/student/Rating";
import { AppContext } from "../../context/AppContext";
function Player(){
  const {playinglecture}=useContext(AppContext);
  const { courseID } = useParams();
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [open, setOpen] = useState(false);
 const {setPlayingLecture}=useContext(AppContext);
 const getCourse=dummyCourses.find(course=>course._id===courseID);
  return (
    <div className="w-96 mx-auto mt-5">
      
      <h2 className="text-xl font-bold mb-3 text-center">Lecture List</h2>
      {dummyCourses.map((course) =>
        course._id === courseID ? (
          <div key={course._id} className="space-y-3">
            {course.courseContent.map((chapter) => (
              <div key={chapter.chapterId} className="border rounded-lg p-3 bg-gray-100">
                <button
                  onClick={() => {
                    setSelectedLecture(selectedLecture === chapter.chapterId ? null : chapter.chapterId);
                    setOpen(selectedLecture !== chapter.chapterId);
                  }}
                  className="w-full flex justify-between items-center text-lg font-medium cursor-pointer"
                >
                  <span>{chapter.chapterTitle}</span>
                  <span>{selectedLecture === chapter.chapterId ? "▲" : "▼"}</span>
                </button>

                {selectedLecture === chapter.chapterId && open && (
                  <div className="mt-2 p-2 bg-white border rounded shadow">
                    {chapter.chapterContent.map((lecture) => (
                      <div key={lecture.lectureId} className="p-2 border-b last:border-none">
                          <button
                            onClick={() => setPlayingLecture(lecture.lectureId)}
                            className="text-blue-500 underline mr-2"
                          >
                            ▶ Watch
                          </button>
                        
                        {lecture.lectureTitle}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : null
      )}
      <div>
      {playinglecture?<Youtube videoId={playinglecture} opts={{
      width: "100%",  
      height: "100%", 
      playerVars: {
        autoplay: 1, 
      },
    }} />: <img
        src={getCourse.courseThumbnail}
        alt="Course"
        className="w-full h-48 object-cover"
      />}
      </div>
    </div>
  );
};
export default Player
