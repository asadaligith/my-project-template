import React from 'react'
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-100% h-[100px] bg-[#FBEBB5] text-[#000000] flex justify-between pr-[100px]">
        {/* left side Links */}
        <div className="flex w-[430px] h-[24] gap-[75px] relative left-[505px] pt-[38px] font-semibold">
           
            <Link href="/"> Home</Link>
            <Link href="/Shop"> Shop</Link>
            <Link href="/About"> About</Link>
            <Link href="/Contact"> Contact</Link>
        </div>
       
{/* Right side Icons */}
        <div className="flex w-[247px] h-[28px]  gap-[45px]  pt-[36px] ">

             <FaRegUser size={24}/> 
            <IoIosSearch size={24}/> 
            <CiHeart size={24}/> 
             <IoCartOutline size={24}/> 
        </div>
            
    </div>
  )
}

export default Navbar