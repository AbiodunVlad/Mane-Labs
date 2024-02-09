import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="container px-40 sm:px-10 py-14">
      <div className="flex">
        <img src="./images/Mane.png" width={50} className="rounded-lg"></img>
        <Typography as="a" href="#" className="font-medium my-auto px-5">
          MÅNE Labs
        </Typography>
      </div>
      <div className="flex py-10  justify-between sm:flex-col">
      <span>
        <p className="text-white  w-96 text-sm">
          We are a SAAS company out to meet various needs for individuals and
          firms. Our offering range from product and identity design to web and
          mobile app development, hosting and related services.
        </p>
        </span>
        <span className="text-white text-right ">
            <p className="text-white">Let’s Work Together</p>
            <p className="text-white">Shoot us an email and we’ll respond ASAP!</p>
          <span className="flex justify-end gap-5 py-5">
            <img src="./Icons/x.png" width={20}></img>
            <img src="./Icons/linkedin.png" width={20}></img>
</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
