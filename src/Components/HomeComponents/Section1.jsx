import React from "react";

const Section1 = () => {
  return (
    <div className="h-96 px-40 ">
    <div className="flex justify-between">
      <div className="py-40">
        <span>
          <h1 className="text-7xl">Lets Build</h1>
          <h1 className="py-4">Together</h1>
        </span>
        <div className="flex gap-5">
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
        <div className="p-20">
          <img src="./images/image1.png" className="rounded-lg"></img>
        </div>
      </div>
    </div>
  );
};

export default Section1;
