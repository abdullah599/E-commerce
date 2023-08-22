import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Element } from "react-scroll";
import { useState } from "react";




function NavBar() {
    const [nav, setNav ] = useState(0);
    
    const setNavBar = () => {
        setNav( !nav );
    
    };
    

    return (
      <>
        <div className="  flex text-2xl text-[color:var(--primary-text-color)] justify-between  bg-[color:var(--background-color-1)] h-24 w-full  font-semibold mx-auto  p-[1rem] border-b border-b-white">
          <h1 className="flex items-center md:p-4 md:ml-0 text-2xl sm:text-2xl text-[color:var(--header-text-color)]">
            BrandName
          </h1>
          <div className="p-4 block md:hidden z-10" onClick={setNavBar}>
            {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
          
<div className='hidden md:flex items-start justify-start  w-[50%]'>
    <div className="flex items-center  mx-auto bg-white rounded-lg w-full md:w-[60%]" >
        <div className="w-full">
            <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none text-sm"
                placeholder="search"/>
        </div>
        <div>
            <button type="submit" className="flex items-center bg-[color:var(--background-color-2)] justify-center w-12 h-12 text-white rounded-r-lg">
               
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    </div>
</div>
          <ul className="hidden md:flex lg:ml-[-13rem]">
            <Link
              to=""
              smooth={true}
              duration={500}
              className="p-4 text-xl hover:cursor-pointer hover:underline"
            >
              Profile
            </Link>
            <Link
              to=""
              smooth={true}
              duration={500}
              className="p-4 text-xl hover:cursor-pointer hover:underline "
            >
              Message
            </Link>
            <Link
              to=""
              smooth={true}
              duration={500}
              className="p-4 text-xl hover:cursor-pointer hover:underline"
            >
              Order
            </Link>

            <Link
              to=""
              smooth={true}
              duration={500}
              className="p-4 text-xl hover:cursor-pointer hover:underline"
            >
              Cart
            </Link>
          </ul>
        </div>
        <div
          className={
            nav
              ? "hidden"
              : "relative transition-all duration-500   border-r border-r-gray-900 h-fit bg-[color:var(--background-color-1)] text-white ease-in-out z-2"
          }
        >
          <ul className=" flex flex-col  md:hidden pt-4 z-3">
            <Link
              to="Profile"
              smooth={true}
              duration={500}
              className="py-4 text-sm border-b  border-white "
              onClick={setNavBar}
            >
              Profile
            </Link>
            <Link
              to="Messageme"
              smooth={true}
              duration={500}
              className=" text-sm border-b py-4  border-white"
              onClick={setNavBar}
            >
              Message
            </Link>
            <Link
              to="Order"
              smooth={true}
              duration={500}
              className="text-sm border-b py-4  border-white"
              onClick={setNavBar}
            >
              Order
            </Link>
            <Link
              to="Cart"
              smooth={true}
              duration={500}
              className="text-sm border-b py-4  border-white "
              onClick={setNavBar}
            >
              Cart
            </Link>
          </ul>
        </div>
      </>
    );
}

export default NavBar;




