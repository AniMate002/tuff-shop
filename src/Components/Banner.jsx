import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import compDark from '../images/image1.png'
import compLight from '../images/img2.png'
import { useSelector } from "react-redux";

export default function Banner(){
    const {isDarkTheme} = useSelector(state => state.user)
    return(
        <div className=" tablet:flex-1 w-full dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor px-10 rounded-lg relative pb-20 mx-auto tablet:mx-0">
            <h1 className=" dark:text-mainColor text-LightMainColor uppercase text-start font-bold laptop:text-[120px] tablet:text-[55px] text-[25px] mb-10 mt-10 tablet:mt-0">Big sale 20%</h1>
            <h3 className=" dark:text-darkerGreyText text-LightBlueSecondaryColor uppercase text-2xl mb-4">The bestseller of 2025</h3>
            <img src={isDarkTheme ? compDark : compLight} alt="Image 1" className=" tablet:w-1/2 tablet:absolute right-0 desktop:top-[50px] dark:desktop:top-[100px] laptop:top-[130px] tablet:top-[250px]"/>
            <h3 className="dark:text-white text-LightTextColor tablet:text-[40px] font-bold pb-7 tablet:max-w-[550px] uppercase">LENNON r2d2 with NVIDIA 5090 TI</h3>
            <Link to={"/products"} className=" px-5 py-3 dark:bg-secondaryColor bg-LightBlueSecondaryColor hover:bg-mainColor rounded-lg text-white font-medium dark:hover:bg-white dark:hover:text-secondaryColor transition-all">Shop Now</Link>

        </div>
    )
}