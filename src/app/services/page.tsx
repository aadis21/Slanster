import Catogories from '@/components/Services/Catogories';
import Discuss from '@/components/Services/Discuss';
import GetInTouch from '@/components/Services/GetInTouch';
import Services from '@/components/Services/Services';
import Vision from '@/components/Services/Vision';
import Wining from '@/components/Services/Wining';
import React from 'react'

const Page = () => {
  return (
    <div>
        <Services />
        <Discuss />
        <Catogories />
        <GetInTouch/>
        <Vision />
        <Wining />
    </div>
  )
}

export default Page;