import {Routes,Route,BrowserRouter,useMatch} from "react-router-dom"
import Dashboard from "./pages/educator/Dashboard";
import Educator from "./pages/educator/Educator";
import Mycourses from "./pages/educator/Mycourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import AddCourse from "./pages/educator/AddCourse";
import Navbar from "./components/student/Navbar";
import My_enrollments from "./pages/student/My_enrollments";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import CourseMapList from "./pages/student/CourseMapList";
import CourseDetails from "./pages/student/CourseDetails/CourseDetails";
import Player from "./pages/student/Player";
 function App() {
  const isEducatorRoute=useMatch("/educator/*");
  
  return (
    <div>
      {!isEducatorRoute?  <Navbar/>:null}
     

  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/course-list" element={<CourseList/>}>
          <Route index element={<CourseMapList/>}/>
          <Route path=":courseName" element={<CourseMapList/>}/>
        </Route>
        <Route path="/course/:courseID" element={<CourseDetails/>}/>
  <Route path="my-enrollments" element={<My_enrollments/>}/>
  <Route path="/player/:courseID" element={<Player/>}/>
        <Route path="/educator" element={<Educator/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="my-courses" element={<Mycourses/>}/>
          <Route path="students-enrolled" element={<StudentsEnrolled/>}/>
          <Route path="add-courses" element={<AddCourse/>}/>
  </Route>
      </Routes>

    </div>
   
     

  )
}
export default App;