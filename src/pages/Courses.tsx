import React, { useEffect } from 'react'
import { addCourses } from '../queries/Queries'


const Courses = () => {
    useEffect(() => {
        addCourses()
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
  return (
    <div>Courses</div>
  )
}

export default Courses