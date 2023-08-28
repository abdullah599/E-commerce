import React from 'react'
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { navBar } from '../App';
import { useAtom } from "jotai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import {TbLogout2} from 'react-icons/tb'

import './sidebar.css';

const SideBar = () => {
  const [nav, setNav] = useAtom(
    navBar
  );

  const setNavBar = () => {
    setNav(!nav);
  };
  
  return (
    <div className=" bg-[color:var(--background-color-2)] h-[100%]  flex flex-col align-center w-[100%] xl:w-[20%] p-5 xl:fixed z-[10000]">
      <div className=" w-[100%] ">
        <h1
          className={
            "text-[var(--header-text-color)] text-[25px] leading-[24px] font-extrabold cursor-pointer md:mt-7 xl:ml-5"
          }
        >
          Brand Name
        </h1>
        <h1 className="text-white text-[20px]  font-extrabold cursor-pointer mt-3 md:mt-7 xl:ml-5">
          Admin Panel
        </h1>
        <NavLink
          className="mt-3 md:mt-7  text-xl ml-2 p-3  rounded hover:cursor-pointer block bg-[color:var(--background-color-2)] text-white"
          to="/"
          onClick={setNavBar}
        >
          <MdOutlineSpaceDashboard className="inline" />
          <h1 className="ml-3 inline-block"> Dashboard</h1>
        </NavLink>
        <NavLink
          className="mt-1 md:mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block "
          to="/product"
          onClick={setNavBar}
        >
          <BiCube className="inline" />
          <h1 className="ml-3 inline-block">Product</h1>
        </NavLink>

        <NavLink
          className="mt-1 md:mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block "
          to="/customer"
          onClick={setNavBar}
        >
          <FiUsers className="inline" />
          <h1 className="ml-3 inline-block">Customer</h1>
        </NavLink>
        <NavLink
          className="mt-1 md:mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block"
          to="/order"
          onClick={setNavBar}
        >
          <AiOutlineStar className="inline" />
          <h1 className="ml-3 inline-block">Orders</h1>
        </NavLink>
      </div>
      <div className="absolute bottom-0">
        <button
          href="#"
          className="block text-xl font-bold text-white p-6 hover:cursor-pointer "
        >
          {" "}
          <TbLogout2 className="inline" />
          <h1 className="ml-3 inline-block">Logout</h1>
        </button>
      </div>
    </div>
  );
}

export default SideBar
