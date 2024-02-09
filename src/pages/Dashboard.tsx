import React, { useEffect, useState } from 'react'
import CourseModel from '../types/CourseModel';
import { getStudentDetails } from '../queries/Queries';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import ClassRoom from '../assets/ClassRoom.avif';
import CourseCard from '../components/Dashboard.tsx/CourseCard';

const Dashboard = () => {
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [student, setStudent] = useState<{ id: number, name: string, email: string }>({
    name: '',
    email: '',
    id: 0
  });
  const { id } = useParams()
  useEffect(() => {
    getStudentDetails(id as string)
      .then((data) => {
        console.log(data);
        setCourses(data as CourseModel[])
        setStudent(data[0].students.find((student: { id: number; }) => student.id === parseInt(id as string)) as { id: number, name: string, email: string })
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    , []);

  return (
    <>
      {loading ? <Loading /> :
        <div className='w-[98.37vw] min-h-[95vh] flex flex-col gap-16 items-center overflow-x-hidden' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${ClassRoom})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className='w-3/4 max-lg:w-[85%] max-sm:w-[95%] flex flex-col items-center p-10 mt-20 bg-slate-200'>
          <div className='w-3/4 max-lg:w-[85%] max-sm:w-[95%] flex items-center p-5'>
            <div className='w-3/4 flex flex-col gap-5'>
              <p className='text-3xl font-bold'>Welcome {student.name}</p>
              <p className='text-xl font-bold'>{student.email}</p>
            </div>
          </div>
          <div className='w-3/4 max-lg:w-[85%] max-sm:w-[95%] gap-5 flex flex-col items-center justify-center'>
            <p className='text-3xl font-bold'>Your Courses</p>
            <div className='w-full flex flex-col gap-5'>
              {courses.map(course => <CourseCard course={course} key={course.id} />)}
            </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Dashboard