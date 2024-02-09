import { Button } from '@material-tailwind/react'
import React from 'react'

export const Section2 = () => {
  return (
    <div className='container px-40 sm:px-10 py-14' >
    <div>
        <h1 className='text-white sm:text-3xl'>Projects</h1>

        <div className='flex sm:flex-col gap-10 py-10'>
            <img src='./images/mask.png' className=' hvr-bounce-out cursor-pointer'></img>
            <img src='./images/mask1.png' className=' hvr-bounce-out cursor-pointer'></img> 
            <img src='./images/mask2.png' className=' hvr-bounce-out cursor-pointer'></img>


        </div>
        <div className="flex items-center gap-x-1">
              <Button
              style={{backgroundColor:"#A8E4F9"}}
               variant="text" size="sm" className=" inline-block">
                <span>View More</span>
              </Button>
            </div>
    </div>
    
    </div>
  )
}
