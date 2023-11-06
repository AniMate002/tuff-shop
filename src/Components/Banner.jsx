import React from "react";
import { Link } from "react-router-dom";
import comp from '../images/image1.png'

export default function Banner(){
    return(
        <div className=" tablet:flex-1 w-full bg-secondaryDarkColor px-10 rounded-lg relative pb-20 mx-auto tablet:mx-0">
            <h1 className=" text-mainColor uppercase text-start font-bold laptop:text-[120px] tablet:text-[55px] text-[25px] mb-10 mt-10 tablet:mt-0">Big sale 20%</h1>
            <h3 className=" text-darkerGreyText uppercase text-2xl mb-4">The bestseller of 2025</h3>
            <img src={comp} alt="Image 1" className=" tablet:w-1/2 tablet:absolute right-0 desktop:top-[100px] laptop:top-[130px] tablet:top-[250px]"/>
            <h3 className="text-white tablet:text-[40px] font-bold pb-7 tablet:max-w-[550px] uppercase">LENNON r2d2 with NVIDIA 5090 TI</h3>
            <Link to={"/products"} className=" px-5 py-3 bg-secondaryColor rounded-lg text-white font-medium hover:bg-white hover:text-secondaryColor transition-all">Shop Now</Link>

        </div>
    )
}