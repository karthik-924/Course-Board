import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCourse } from '../queries/Queries';
import CourseModel from '../types/CourseModel';
// import ClassRoom from '../assets/ClassRoom.avif'
import { FaLocationDot } from "react-icons/fa6";
import Syllabus from '../components/Course/Syllabus';
import Loading from '../components/Loading';


const Course = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState<CourseModel>();
  const [loading, setLoading] = useState<boolean>(true);
  console.log(id);
  useEffect(() => {
    getCourse(id as string)
      .then((data) => {
        console.log(data);
        setCourseDetails(data as CourseModel);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }
    , [id])

  return (
    <>
      {loading ? <Loading /> :
        <div className={`w-[100vw] min-h-[100vh] bg-slate-200 flex flex-col gap-10 justify-center items-center`} >
          <div className='w-3/4 max-sm:w-[95%] justify-between flex items-center'>
            <div className='w-5/6 max-sm:mt-10 flex gap-10'>
              <img src={courseDetails?.thumbnail} className='w-20 h-20' />
              <div className='flex flex-col gap-5'>
                <p className='text-xl font-bold'>{courseDetails?.name}</p>
                <p className='text-lg'>{courseDetails?.instructor}</p>
              </div>
            </div>
            <div className='flex w-1/6 mr-3'>
              <p className={` text-base font-bold ${courseDetails?.enrollmentStatus === 'Open' ? "text-green-500" : courseDetails?.enrollmentStatus === 'In Progress' ? "text-yellow-400" : "text-red-600"}`}>{courseDetails?.enrollmentStatus}</p>
            </div>
          </div>
          <div className='w-3/4 max-sm:w-[95%] justify-between flex items-center'>
            <p className='text-lg w-3/4'>{courseDetails?.description}</p>
            <div className='flex w-fit'>
              <p className='text-sm font-bold'>{courseDetails?.duration}</p>
            </div>
          </div>
          <div className='w-3/4 max-sm:w-[90%] justify-between flex items-center'>
            <div className='w-3/4 flex flex-col gap-10'>
              <div className='w-full flex gap-2'>
                <p className='text-base font-bold'>Schedule</p>
                <p>:</p>
                <p className='text-base'>{courseDetails?.schedule}</p>
              </div>
              <div className='w-full flex gap-2'>
                <p className='text-base font-bold'>Duration</p>
                <p>:</p>
                <p className='text-base'>{courseDetails?.duration}</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <FaLocationDot size={20} />
              <p className='text-base font-bold'>{courseDetails?.location}</p>
            </div>
          </div>
          <div className='w-3/4 max-sm:w-[95%] flex gap-2'>
            <p className='text-base font-bold'>Prerequisites</p>
            <p>:</p>
            <div className='flex-col flex gap-3'>
              {courseDetails?.prerequisites.map((pre, index) => (
                <p key={index} className='text-base'>{pre}</p>
              ))}
            </div>
          </div>
          <div className='w-3/4 max-sm:w-[95%] flex flex-col justify-center items-center gap-5'>
            <p className='text-lg font-bold'>Syllabus</p>
            <Syllabus syllabus={courseDetails?.syllabus as { week: number; topic: string; content: string; }[]} />
          </div>
        </div>
      }
    </>
  )
}

export default Course