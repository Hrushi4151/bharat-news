'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React,{useState} from 'react'

const Navbar = () => {

    let location = usePathname();
    const [toogle, settoogle] = useState(true);
  return (
    <div className=' sticky top-0 left-0 right-0 z-[100]'>
    
<nav className=" border-gray-200 bg-gray-900 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://insta-saver.vercel.app" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logoinside.jpg" className="h-12" alt="instasaver Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Bharat News</span>
    </a>
    <button onClick={()=>settoogle(!toogle)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`${!toogle?"fixed top-14 left-0 z-40":"sm:hidden"}navbar-default w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900">
      <li>
          <Link href={"/"} className={`block py-2 px-3  rounded ${
                  location === "/"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>Home</Link>
        </li>
        
        <li>
          <Link href={"/category/tech"} className={`block py-2 px-3  rounded ${
                  location === "/category/tech"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>टेक्नोलॉजी</Link>
        </li>
        <li>
          <Link href={"/category/automobile"} className={`block py-2 px-3  rounded ${
                  location === "/category/automobile"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>ऑटोमोबाइल</Link>
        </li>
        <li>
          <Link href={"/category/business"} className={`block py-2 px-3  rounded ${
                  location === "/category/business"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>बिज़नेस</Link>
        </li>
        <li>
          <Link href={"/category/finance"} className={`block py-2 px-3  rounded ${
                  location === "/category/finance"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>फाइनेंस</Link>
        </li>
        <li>
          <Link href={"/category/education"} className={`block py-2 px-3  rounded ${
                  location === "/category/education"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>एजुकेशन</Link>
        </li>
        <li>
          <Link href={"/category/money-game"} className={`block py-2 px-3  rounded ${
                  location === "/category/money-game"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>पैसा ही पैसा</Link>
        </li>
        <li>
          <Link href={"/category/job"} className={`block py-2 px-3  rounded ${
                  location === "/category/job"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>जॉब</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar