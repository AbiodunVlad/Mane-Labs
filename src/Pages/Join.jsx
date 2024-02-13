import React from 'react'
import { Button, Input } from "@material-tailwind/react";

const Join = () => {
  return (
    <div><div className="sm:mt-16 mt-24 w-screen py-5 px-40  sm:px-5 sm:w-full">
    {" "}
    <h1 className="text-center sm:text-4xl">Join Our Team</h1>
    <p className="text-center py-10">We are a growing company and we need talents like you.</p>
 
 <div className="flex gap-5 justify-evenly  m-auto sm:flex-col">
  <img src="/images/join.png" width={420} className="sm:w-full"></img>
  <div>
  <form className=" w-96 flex-col gap-5 flex m-auto sm:w-full">
  <Input variant="standard" label="Name" placeholder="John Doe"/>
  <Input variant="standard" label="Email" placeholder="johndoe@gmail.com"/>
  <Input variant="standard" label="Skills" placeholder="e.g React, Node.js etc"/>
  <Input variant="standard" label="Years of Experience" placeholder=""/>
<Button type="submit" style={{backgroundColor:"#A8E4F9"}}
><p>Send</p></Button>
    
  </form>
  </div>
 </div>
  </div></div>
  )
}

export default Join