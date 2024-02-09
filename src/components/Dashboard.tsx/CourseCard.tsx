import React, { useEffect, useState } from 'react'
import CourseModel from '../../types/CourseModel'
import { useNavigate } from 'react-router'
import { Progress } from '@mantine/core'
import { updateCourse } from '../../queries/Queries'

type Props = {
    course: CourseModel
}

const CourseCard = (props: Props) => {
    const navigate = useNavigate();
    const [randomVal, setRandomVal] = useState<number>(0);
    const generateRandomFutureDate = (daysInFuture: number) => {
        const currentDate = new Date();
        const futureDate = new Date(currentDate.getTime() + daysInFuture * 24 * 60 * 60 * 1000);
        return futureDate;
    }
    const generateRandomValue = () => {
        setRandomVal(Math.floor(Math.random() * 100) + 1);
    }
    const handleCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
        
        console.log(e)
        e.stopPropagation()
        const checkbox = e.target as HTMLInputElement;
        // console.log(checkbox.checked)
        if (checkbox.checked) {
            updateCourse(props.course.id, true)
        }
        else {
            updateCourse(props.course.id, false)
        }
    }
    useEffect(() => {
        generateRandomValue()
    }, [])
    return (
        <div onClick={() => navigate(`/course/${props.course.id}`)} className='w-full flex flex-col h-fit bg-slate-200 cursor-pointer shadow-lg'>

            <div className='flex justify-between items-center p-2 pl-4 pr-4'>
                <div className='flex'>
                    <img src={props.course.thumbnail} alt={props.course.name} className='w-12 h-12 rounded-full' />
                    <div className='flex flex-col ml-4'>
                        <p className='text-lg font-bold'>{props.course.name}</p>
                        <p className='text-sm'>{props.course.instructor}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className={`text-sm font-bold ${props.course.enrollmentStatus === 'Open' ? "text-green-500" : props.course.enrollmentStatus === 'In Progress' ? "text-yellow-400" : "text-red-600"}`}>{props.course.enrollmentStatus}</p>
                </div>
            </div>
            <div className='flex justify-between items-center p-2 pl-4 pr-4'>
                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <p className='text-sm font-bold'>Due Date</p>
                        <p>:</p>
                        <p className='text-sm'>{generateRandomFutureDate(Math.floor(Math.random() * 100) + 1).toLocaleDateString()}</p>
                    </div>
                    <p className='text-sm w-3/4'>{props.course.description}</p>
                </div>
                <div className='flex w-fit'>
                    <p className='text-sm font-bold'>{props.course.duration}</p>
                </div>
            </div>
            <div className='flex w-full justify-between items-center mt-5 mb-5'>
                <div className='flex w-3/4 justify-center items-center gap-5'>
                    <Progress className='w-2/4' radius="xl" size="lg" value={randomVal} color={`${randomVal <= 30 ? 'red' : randomVal >= 80 ? 'green' : 'yellow'}`} />
                    <p className='text-sm font-bold ml-2'>{randomVal}%</p>
                </div>
                <div className='flex justify-center items-center gap-3 mr-5'>
                    <input type='checkbox' defaultChecked={props.course?.complete||false} onClick={handleCheckbox} className='w-5 h-5 rounded-md' placeholder='Mark as Complete' />
                    <p className='text-sm'>Mark as Complete</p>
                </div>
            </div>

        </div>
    )
}

export default CourseCard