import { Accordion } from '@mantine/core'
import React from 'react'

type Props = {
    syllabus: {
        week: number,
        topic: string,
        content: string,
    }[]
}

const Syllabus = (props: Props) => {
    return (
        <Accordion className='w-full bg-white'>
            {props.syllabus.map((syllab,index) => {
                return (
                    <Accordion.Item className='' key={index} value={syllab.topic}>
                        <Accordion.Control>Week {syllab.week}</Accordion.Control>
                        <Accordion.Panel className='gap-3 bg-gray-100'>
                            <p className='text-lg font-semibold'>{syllab.topic}</p>
                            <p className='text-gray-500'>{syllab.content}</p>
                        </Accordion.Panel>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}

export default Syllabus