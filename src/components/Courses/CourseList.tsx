import React from 'react'
import CourseModel from '../../types/CourseModel'
import { useNavigate } from 'react-router'

type Props = {
  course: CourseModel
}

const CourseList = (props: Props) => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/course/${props.course.id}`)} className='w-full flex flex-col h-fit bg-slate-200 cursor-pointer'>
          <div className='flex justify-between items-center p-4'>
              <div className='flex'>
                  <img src={props.course.thumbnail} alt={props.course.name} className='w-12 h-12 rounded-full' />
                  <div className='flex flex-col ml-4'>
                      <p className='text-lg font-bold'>{props.course.name}</p>
                      <p className='text-sm'>{props.course.instructor}</p>
                    </div>
              </div>
                <div className='flex'>
                  <p className={`text-sm font-bold ${props.course.enrollmentStatus==='Open'?"text-green-500":props.course.enrollmentStatus==='In Progress'?"text-yellow-400":"text-red-600"}`}>{props.course.enrollmentStatus}</p>
              </div>
          </div>
            <div className='flex justify-between items-center p-4'>
                <p className='text-sm w-3/4'>{props.course.description}</p>
                <div className='flex w-fit'>
                    <p className='text-sm font-bold'>{props.course.duration}</p>
              </div>
              </div>
    </div>
  )
}

export default CourseList
