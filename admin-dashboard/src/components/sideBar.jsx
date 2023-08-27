import React from 'react'
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const SideBar = () => {

  
  return (
    <div className=" bg-[color:var(--background-color-2)] h-[100%]  flex flex-col align-center w-[100%] xl:w-[20%] p-5 xl:fixed z-[10000]">
      <div className=" w-[100%] ">
        <h1
          className={
            "text-[var(--header-text-color)] text-[25px] leading-[24px] font-extrabold cursor-pointer md:mt-7"
          }
        >
          Brand Name
        </h1>
        <h1 className="text-white text-[20px]  font-extrabold cursor-pointer mt-3 md:mt-7">
          Admin Panel
        </h1>
        <a className="mt-3 md:mt-7  text-xl ml-2 p-3  rounded hover:cursor-pointer block bg-white text-[color:var(--background-color-2)]">
          Dashboard
        </a>
        <a className="mt-1 md:mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Product
        </a>
        <a className="mt-1 md:mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Payment
        </a>
        <a className="mt-1 md:mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Customer
        </a>
        <a className="mt-1 md:mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Orders
        </a>
      </div>
      <div className="absolute bottom-0">
        <button
          href="#"
          className="block text-xl font-bold text-white p-6 hover:cursor-pointer "
        >
          Setting
        </button>
        <button
          href="#"
          className="block text-xl font-bold text-white p-6 hover:cursor-pointer "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar
