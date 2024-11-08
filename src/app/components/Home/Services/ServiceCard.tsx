"use client"

import { PropsWithRef } from "react";
import Image from "next/image"
import {servicesData} from "../../../Data/data"

import Tilt from "react-parallax-tilt"

type Props ={
    service:{
        id: number;
        title: string;
        description: string;
        icon: string;
}
}
export default function ServiceCard({service}:Props){
    return(
        
            <Tilt className="shadow-2xl p-6 rounded-lg bg-[#4566fa] ">
                <Image src={`${service.icon}`} alt={service.title} width={50} height={50}/>
                <h1 className=" mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
                <p className="mt-3 text-sm text-white text-opacity-80">{service.description}</p>
            </Tilt>
        
    )
}