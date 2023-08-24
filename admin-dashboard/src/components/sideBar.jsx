import React from 'react'

const SideBar = () => {
  return (
    <div className="bg-[color:var(--background-color-2)] h-screen flex flex-col align-center w-[100%] p-5">
      <div className="w-[100%]">
        <h1 className="text-[var(--header-text-color)] text-[25px] leading-[24px] font-extrabold cursor-pointer">
          Brand Name
        </h1>
        <h1 className="text-white text-[20px]  font-extrabold cursor-pointer mt-7">
          Admin Panel
        </h1>
        <a className="mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block bg-white text-[color:var(--background-color-2)]">
          Dashboard
        </a>
         <a className="mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Product
        </a>
         <a className="mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Payment
        </a>
         <a className="mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Customer
        </a>
         <a className="mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Orders
        </a>
         <a className="mt-7 text-white text-xl ml-2 p-3  rounded hover:cursor-pointer block active:bg-white active:text-[color:var(--background-color-2)]">
          Statistics
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
