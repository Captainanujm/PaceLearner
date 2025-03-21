import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyCourses } from "../../assets/assets";
import Youtube from "react-youtube";
import { AppContext } from "../../context/AppContext";
import Footer from "../../components/student/Footer";

function Player() {
  const { playinglecture, setPlayingLecture } = useContext(AppContext);
  const { courseID } = useParams();
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [open, setOpen] = useState(false);

  const getCourse = dummyCourses.find((course) => course._id === courseID);

  return (
    <div className="w-full min-h-screen flex flex-col">
     
      <div className="flex flex-col md:flex-row flex-grow">
      
        <div className="md:w-2/3 w-full flex justify-center items-center p-5">
          {playinglecture ? (
            <Youtube
              videoId={playinglecture}
              opts={{
                width: "100%",
                height: "500px",
                playerVars: { autoplay: 1 },
              }}
              className="w-full rounded-lg shadow-lg"
            />
          ) : (
            <img
              src={getCourse?.courseThumbnail}
              alt="Course"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          )}
        </div>

       
        <div className="md:w-1/3 w-full border-l border-gray-300 p-5 overflow-y-auto max-h-[500px]">
          <h2 className="text-xl font-bold mb-3 text-center">📚 Lecture List</h2>
          {getCourse &&
            getCourse.courseContent.map((chapter) => (
              <div key={chapter.chapterId} className="border rounded-lg p-3 mb-2 bg-white shadow">
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
                  <div className="mt-2 p-2 bg-gray-50 border rounded">
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
      </div>
      <Footer className="w-full" />
    </div>
  );
}

export default Player;
