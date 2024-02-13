import { Button, Input } from "@material-tailwind/react";
import React from "react";

const Contact = () => {
  return (
    <div className="sm:mt-16 mt-24 w-screen py-5 px-40  sm:px-5 sm:w-full">
      {" "}
      <h1 className="text-center sm:text-4xl">Let’s help you realize that dream.</h1>
      <p className="text-center py-10">Send a message and we’ll reach out to you shortly.</p>
   
   <div className="flex gap-5 justify-evenly  m-auto sm:flex-col">
    <img src="/images/Message.png" width={420} className="sm:w-full"></img>
    <div>
    <form className=" w-96 flex-col gap-5 flex m-auto sm:w-full">
    <Input variant="standard" label="Name" placeholder="John Doe"/>
    <Input variant="standard" label="Email" placeholder="johndoe@gmail.com"/>
    <Input variant="standard" label="What do you wish to do?" placeholder="Build a Landing page for my Company"/>
    <Input variant="standard" label="More Details" placeholder="More Details"/>
<Button type="submit" style={{backgroundColor:"#A8E4F9"}}
><p>Send</p></Button>
      
    </form>
    </div>
   </div>
    </div>
  );
};

export default Contact;
