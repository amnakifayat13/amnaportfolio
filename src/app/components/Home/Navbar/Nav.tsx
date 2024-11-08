"use client"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "../../../../../constant/constant"
import { HiBars3BottomRight } from "react-icons/hi2"
import { useState, useEffect} from "react"
// define props types
type props ={
    openNav:()=>void
}
export default function Nav({openNav}:props){
    const [navBg, setNavBg]= useState(false);
    useEffect(() =>{
        const handler = ()=>{
            if(window.scrollY >= 90){
                setNavBg(true)
            }
            if(window.scrollY<90){
                setNavBg(false)
            }
        };
        window.addEventListener("scroll",handler)
        return ()=>{
            window.removeEventListener("scroll",handler)
        }
        
    },[])


    return(
        <div className={`fixed ${navBg ? 'bg-[#240b39]':'fixed'} h-[12vh] z-[10] bg-blue-800 w-full transition-all duration-200`}>
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <h2 className="ml-[0rem] sm:ml-0 text-white">Portfolio</h2>
                {/* Nav links */}
                <div className="flex items-center space-x-10">
                        <div className="hidden lg:flex items-center space-x-8">
                        
                            {navLinks.map((navLink)=>{
                        return(
                        <Link key={navLink.id} href={navLink.url}>
                            <p className="nav__link">{navLink.label}</p>
                        </Link>
                        )
                    })}
                    </div>
                    {/* Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800  font-semibold sm:text-base
                        bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                            Hire me
                        </button>
                        {/* burger menu */}
                        <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}