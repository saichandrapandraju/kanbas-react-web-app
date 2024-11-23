import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { 
  toggleShowAllCourses, 
  enrollInCourse, 
  unenrollFromCourse, 
  setEnrollments
} from "./Enrollments/reducer";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./Enrollments/client";
import { useEffect } from "react";

interface DashboardProps {
  courses: any[];
  allCourses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

interface Enrollment {
  user: string;
  course: string;
  _id: string;
}


export default function Dashboard({
  courses,
  allCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentsReducer);

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => 
        enrollment.user === currentUser?._id && 
        enrollment.course === courseId
    );
  };
    // Handle enrollment toggle
    const handleEnrollmentToggle = (courseId: string) => {
      if (isEnrolled(courseId)) {
        handleUnenroll(courseId);
      } else {
        console.log("Enrolling in course", courseId);
        handleEnroll(courseId);
      }
    };
    // Filter courses based on enrollment status and showAllCourses flag
  const getDisplayedCourses = () => {
    if (currentUser?.role !== "STUDENT") {
      return courses;
    } else if (showAllCourses && currentUser?.role === "STUDENT") {
      return allCourses;
    } else {
      console.log("Getting displayed courses", enrollments, currentUser);
      const filteredCourses = allCourses.filter(course => 
        enrollments.some(
          (enrollment: any) => 
            enrollment.user === currentUser?._id && 
            enrollment.course === course._id
        )
      );
      console.log("Filtered courses", filteredCourses);
      return filteredCourses;
    }
  };

  // Protect course access
  const handleCourseClick = (e: React.MouseEvent, courseId: string) => {
    if (currentUser?.role === "STUDENT" && !isEnrolled(courseId)) {
      e.preventDefault();
      alert("You must be enrolled in this course to access it.");
    }
  };
  const handleEnroll = async (courseId: string) => {
    try {
      await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
      dispatch(enrollInCourse({
        studentId: currentUser._id,
        courseId
      }));
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };
  
  const handleUnenroll = async (courseId: string) => {
    try {
      await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
      dispatch(unenrollFromCourse({
        studentId: currentUser._id,
        courseId
      }));
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };
  useEffect(() => {
    const loadEnrollments = async () => {
      if (currentUser?._id) {
        try {
          const userEnrollments = await enrollmentsClient.findEnrollmentsByStudent(currentUser._id);
          dispatch(setEnrollments(userEnrollments));
        } catch (error) {
          console.error("Error loading enrollments:", error);
        }
      }
    };
    loadEnrollments();
  }, [currentUser, dispatch]);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* Only show course management UI for faculty */}
      {currentUser?.role === "FACULTY" && (
        <div className="mb-4">
          <h5>
            Course Management
            <button 
              className="btn btn-success float-end ms-2"
              onClick={addNewCourse}
              id="wd-add-new-course-click">
              Add
            </button>
            <button 
              className="btn btn-primary float-end"
              onClick={updateCourse}
              id="wd-update-course-click">
              Update
            </button>
          </h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <textarea
            value={course.description || ""}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            placeholder="Description"
          />
        </div>
      )}

      {/* Show Enrollments toggle for students */}
      {currentUser?.role === "STUDENT" && (
        <div className="mb-3">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(toggleShowAllCourses())}
          >
            {showAllCourses ? "Show My Courses" : "Show All Courses"}
          </button>
        </div>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "My Courses"} ({getDisplayedCourses().length})
      </h2>
      <hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {getDisplayedCourses().map((course: any) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img src={course.image || "/images/reactjs.jpg"} className="card-img-top" alt="course" />
                <div className="card-body">
                  <Link 
                    to={`/Kanbas/Courses/${course._id}`}
                    className="text-decoration-none"
                    onClick={(e) => handleCourseClick(e, course._id)}
                  >
                    <h5 className="card-title">{course.name}</h5>
                  </Link>
                  <p className="card-text">{course.description}</p>
                  
                  {currentUser?.role === "FACULTY" && (
                    <>
                      <button
                        className="btn btn-danger float-end"
                        onClick={() => deleteCourse(course._id)}
                        id="wd-delete-course-click">
                        Delete
                      </button>
                      <button
                        className="btn btn-warning float-end me-2"
                        onClick={() => setCourse(course)}
                        id="wd-edit-course-click">
                        Edit
                      </button>
                    </>
                  )}

                  {currentUser?.role === "STUDENT" && (
                    <button
                      className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'} float-end`}
                      onClick={() => handleEnrollmentToggle(course._id)}
                    >
                      {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}