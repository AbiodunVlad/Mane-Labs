import React from "react";

const Section1 = () => {
  return (
    <div className="px-40 sm:px-5  w-screen ">
    <div className="flex  sm:flex-col-reverse justify-between py-10">
      <div className="py-40 sm:py-10">
        <span>
          <h1 className="text-7xl sm:text-6xl">Lets Build</h1>
          <h1 className="py-4 sm:text-4xl">Together</h1>
        </span>
        <div className="flex gap-5 sm:gap-2 ">
          <span className=" bg-light-blue-100 p-4">
            <p>Figma</p>
          </span>
          <span className=" bg-light-blue-100 p-4">
            <p>HTML</p>
          </span>
          <span className=" bg-light-blue-100 p-4">
            <p>Python</p>
          </span>
          <span className=" bg-light-blue-100 p-4">
            <p>SQL</p>
          </span>
        </div>
        </div>
        <div className="">
          <img src="./images/image1.png" className=" rounded-3xl sm:h-full" style={{width:"600px", height:"460px"}}></img>
        </div>
      </div>
    </div>
  );
};

export default Section1;
