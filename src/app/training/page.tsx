import FAQ from '@/components/AI/FAQ'
import Companies from '@/components/Home/Companies'
import Placement from '@/components/Home/Placement'
import MemberShip from '@/components/MemberShip/MemberShipCard'
import Super30 from '@/components/Super30/Super30'
import CourseCard from '@/components/Training/CourseCard'
import Training from '@/components/Training/Training'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Training />
        {/* <Companies /> */}
        <CourseCard />
        <Super30/>
        <Placement />
        <MemberShip />
        <FAQ />

    </div>
  )
}

export default Page