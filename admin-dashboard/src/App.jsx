import SideBar from "./components/sideBar"
import Main from "./pages/dashboard"

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function App() {
  
 const [nav, setNav] = useState(0);

 const setNavBar = () => {
   setNav(!nav);
 };

 
    
  return (
    <div className="flex flex-col xl:flex-row bg-[#ffffff] ">
      <div
        className={
          nav
            ? "text-white"
            : "flex gap-6 xl:hidden text-[color:var(--background-color-1)] p-5 basis-[12%]  "
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
            : "fixed h-[100%]  text-[color:var(--background-color-1)] w-[60%] sm:w-[40%] md:w-[30%] z-20"
        }
      >
        <div
          className={
            nav
              ? " xl:hidden font-bold text-white bg-[color:var(--background-color-2)] width-[100%] p-5"
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
      <div className="w-[100%] xl:w-[80%] xl:basis-[80%]">
        <Main />
      </div>
    </div>
  );
}

export default App
