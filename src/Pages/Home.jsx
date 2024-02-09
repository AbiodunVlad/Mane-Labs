import React from 'react'
import Section1 from '../Components/HomeComponents/Section1'
import { Section2 } from '../Components/HomeComponents/Section2'
import Section3 from '../Components/HomeComponents/Section3'

const Home = () => {
  return (
    <div className='sm:mt-10 mt-24'>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  )
}

export default Home