import Companies from '@/components/Home/Companies'
import CourseCard from '@/components/Training/CourseCard'
import Training from '@/components/Training/Training'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Training />
        {/* <Companies /> */}
        <CourseCard />
    </div>
  )
}

export default Page