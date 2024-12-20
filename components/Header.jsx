"use client";
import Link from "next/link";
import { useState } from "react";

import Nav from "./Nav";
import NavMobile from "./NavMobile";


const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center mx-auto xl:px-20 px-5 py-2  h-15 mb-5 gap-3 ">
          {/* LOGO */}
          <Link
            href="/"
            className="flex justify-center items-center gap-2  text-3xl"
          >
            <p className="text-blue-500 font-bold "># <span className="text-white">G T M</span></p>
          </Link>

          {/* HAMBURGER ICON */}
          {/* <div
            className="flex lg:hidden md:hidden  justify-center items-center  rounded-full font-bold hover:bg-blue-100 w-10 h-10 text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#3b82f6"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div> */}
        

        {/* ------------------- LINKS - DESKTOP -------------------- */}
        <div className="hidden xl:flex lg:flex   text-white text-sm justify-center items-center gap-10 ">
          <Nav />
        </div>

        {/* ------------------- LINKS - MOBILE -------------------- */}
        <div className="xl:hidden lg:hidden">
        <NavMobile/>
        </div>
{/* 
        
        {show && (
          <div className="flex-col w-full lg:hidden md:hidden sm:grid sm:grid-cols-2 justify-start items-center rounded-b-lg text-sm">
            <Link
              href="/"
              className="flex justify-center  hover:text-blue-500  hover:bg-blue-100"
            >
              <button className="p-1 m-1 ">Home</button>
            </Link>
            <Link
              href="/"
              className="flex justify-center hover:text-blue-500  hover:bg-blue-100"
            >
              <button className="p-1  m-1 ">Projects</button>
            </Link>
            <Link
              href="/"
              className="flex justify-center hover:text-blue-500  hover:bg-blue-100"
            >
              <button className="p-1  m-1  ">About</button>
            </Link>
            <Link
              href="/"
              className="flex justify-center hover:text-blue-500  hover:bg-blue-100"
            >
              <button className="p-1 m-1  ">Contact</button>
            </Link>
            {/* <div className="p-2 gap-5 flex justify-center items-center col-span-2">
            <Link href='/login' className="flex justify-center">
              <button className="py-1 px-2  border rounded-lg border-blue-500 hover:bg-blue-500 hover:rounded-md text-sm text-blue-500 hover:text-white ">Log In</button>
            </Link>
            <Link href='/signup'>
              <button className="py-1 px-2  border rounded-lg border-blue-500 bg-blue-500 text-sm text-white ">Sign Up</button>
            </Link>
            </div> 
          </div>
        )} 
        */}
      </header>
    </>
  );
};

export default Header;
