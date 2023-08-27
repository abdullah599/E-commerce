import SideBar from "./components/sideBar"
import Main from "./pages/dashboard"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CustomerPage from "./pages/customerPage";
import OrderPage from "./pages/orderPage";
import ProductPage from "./pages/productPage";
import { atom,useAtom } from "jotai";


export const navBar = atom(false);
function App() {
  
 const [nav, setNav] = useAtom(navBar);

 const setNavBar = () => {
   setNav(!nav);
 };

 
    
  return (
    <BrowserRouter>
      <div className="flex flex-col xl:flex-row bg-[#ffffff] ">
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
        <div className="w-[100%] xl:w-[80%] xl:basis-[80%]">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
