import React from "react";

import { Outlet } from "react-router";
import SideBar from "./sideBar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAtom } from "jotai";
import { navBar } from "../App";

export default () => {
  const [nav, setNav] = useAtom(navBar);
  const setNavBar = () => {
    setNav(!nav);
  };
  return (
    <>
      <div
        className={
          nav
            ? "text-white  xl:hidden"
            : "flex gap-6 xl:hidden text-[color:var(--background-color-1)] p-5 basis-[12%]  xl:hidden "
        }
      >
        <AiOutlineMenu size={30} onClick={setNavBar} />
        <h1 className="text-2xl text-[color:var(--primary-color)">
          {" "}
          Brand Name
        </h1>
      </div>

      <div
        className={
          !nav
            ? "hidden"
            : "fixed h-[100%]  text-[color:var(--background-color-1)] w-[60%] sm:w-[40%] md:w-[30%] z-20 xl:hidden"
        }
      >
        <div
          className={
            nav
              ? " xl:hidden font-bold text-white bg-[color:var(--background-color-2)] width-[100%] p-5  xl:hidden"
              : "hidden "
          }
        >
          {" "}
          <AiOutlineClose size={30} onClick={setNavBar} />
        </div>

        <SideBar />
      </div>

      <div className="hidden xl:flex xl:h-screen  text-[color:var(--background-color-1)] basis-[20%] ">
        <SideBar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
