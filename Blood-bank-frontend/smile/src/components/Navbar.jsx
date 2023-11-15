import smile from "../download.svg";
import { IoMenu } from 'react-icons/io5';
import { IoClose} from 'react-icons/io5';

import { useState } from "react";

function Navbar() {

  const [ open , setOpen ] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full bg-white shadow-md fixed top-0 left-0 px-2 md:px-20 py-2">
      <div className="w-[120px] mb-1">
        <img src={smile} alt="" className="w-full" />
      </div>

      <div className="md:hidden absolute top-12 right-8">
        {
          !open && (
            <IoMenu className="text-3xl cursor-pointer text-red-500" onClick={() => setOpen(!open)} />
          )
          
        }
        {
          open && (
            <IoClose className="text-3xl text-red-500 cursor-pointer" onClick={() => setOpen(!open)} />
          )
        }
       
      </div>

     
      <ul className={ `md:flex justify-evenly gap-8 md:static absolute transition-all ease-out duration-500 text-left bg-white md:w-auto w-full md:pl-0 pl-9 md:z-auto z-[-1] ${open ? "top-28" : "top-[-480px]" }`  }>
        <li className="md:ml-8 text-md md:my-0 my-5">
          <a href="/" className="text-gray-800 hover:text-gray-400 duration-500">Home</a></li>
        <li className="md:ml-8 text-md md:my-0 my-5">
          <a href="/" className="text-gray-800 hover:text-gray-400 duration-500">About Us</a>
        </li>
        <li className="md:ml-8 text-md md:my-0 my-5">
          <a href="/" className="text-gray-800 hover:text-gray-400 duration-500">Looking For Blood</a>
        </li>
        <li className="md:ml-8 text-md md:my-0 my-5">
          <a href="/" className="text-gray-800 hover:text-gray-400 duration-500">Donate Blood</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
