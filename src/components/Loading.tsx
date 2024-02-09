import { Loader } from '@mantine/core'
import React from 'react'


const Loading = () => {
  return (
      <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-gray-200'>
          <Loader color='blue'/>
    </div>
  )
}

export default Loading