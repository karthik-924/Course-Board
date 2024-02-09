import React, { useEffect, useState } from 'react'
import { getCourses } from '../queries/Queries'
import ClassRoom from '../assets/ClassRoom.avif'
import CourseModel from '../types/CourseModel';
import CourseList from '../components/Courses/CourseList';
import Loading from '../components/Loading';
import "./Courses.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateCourses } from '../app/features/courseSlice';
import { RootState } from '../app/store';


const Courses = () => {
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();
  const originalCourses = useSelector((state: RootState ) => state.course.courses);
  useEffect(() => {
    getCourses()
      .then((data) => {
        // console.log(data);
        setCourses(data as CourseModel[])
        setLoading(false);
        dispatch(updateCourses(data as CourseModel[]))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  // addCourses()
  //     .then((data) => {
  //         console.log(data)
  //     })
  //     .catch((error) => {
  //         console.log(error)
  //     })

  // }, [])

  const filteredCourses = originalCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.enrollmentStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.duration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if(searchTerm.length > 0){
      setCourses(filteredCourses)
    }
    
  },[searchTerm])

  return (
    <>
      {loading ? <Loading /> :
        <div className={`w-[100vw] h-[100vh] flex justify-center items-center`} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${ClassRoom})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
          <div className='w-[45%] h-[95%] max-xl:w-[55%] max-lg:w-[60%] max-md:w-[75%] max-sm:w-[90%] bg-gray-200 justify-center items-center flex flex-col'>
            <div className='w-full flex justify-between pl-5 pr-5'>
              <p className='text-3xl font-bold text-center p-4'>Courses</p>
              <div className="group">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                  <g>
                    <path
                      d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                    ></path>
                  </g>
                </svg>
                <input className="input" type="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search" />
              </div>

            </div>
            <div className='flex flex-col h-[80%] bg-white w-[90%] gap-3 overflow-y-auto p-4'>
              {courses.map((course: CourseModel) => (
                <CourseList key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Courses