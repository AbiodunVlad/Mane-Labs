import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex sm:flex-col gap-2 lg:mb-0 lg:mt-0  lg:items-center">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <NavLink to="aboutus" className="flex items-center">
          About Us
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Join Our Team
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" fixed top-0 z-30 w-screen border-none ">
      <Navbar
        style={{ backgroundColor: "#0C3959" }}
        className=" h-max max-w-full rounded-none sm:px-4 sm:py-2 px-40 py-4 backdrop-blur-none bg-opacity-none border-none backdrop-filter-none "
      >
        <div className="flex items-center justify-between text-white">
        <div className="mr-4 cursor-pointer py-1.5 flex">
        <img src="./images/Mane.png" width={50} className="rounded-lg"></img>
          <Typography
            as="a"
            href="#"
            className="font-medium my-auto px-5"
          >
            MÅNE Labs
          </Typography></div>
          <div className="mr-4 sm:hidden  ">{navList}</div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1  sm:hidden">
              <Button
              style={{backgroundColor:"#A8E4F9"}}
               variant="text" size="sm" className=" inline-block">
                <span>Build your project</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent hidden sm:block"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="hiddem sm:block">
          {navList}
          <div className="flex items-center gap-x-1 ">
              <Button
              style={{backgroundColor:"#A8E4F9"}}
               variant="text" size="sm" className=" inline-block">
                <span>Build your project</span>
              </Button>
            </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
