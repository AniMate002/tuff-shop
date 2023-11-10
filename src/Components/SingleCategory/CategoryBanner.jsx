import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBanner({category}){

    return(
        <div className=" tablet:flex-1 w-full dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor px-10 rounded-lg relative pb-20 mx-auto tablet:mx-0">
            <h1 className=" text-mainColor uppercase text-center tracking-widest font-bold desktop:text-[120px] sm-tablet:text-[55px] text-[25px] mt-10 mb-5 laptop:mb-0 tablet:mt-5 desktop:mt-0">{category?.name}</h1>
            <div className="truncate tablet:h-[80px]  h-[60px] rounded-lg desktop:w-1/2 w-3/4 mx-auto hover:w-full transition-all hover:rounded-2xl mb-10">
                <img src={category?.image} className="w-full mx-auto desktop:mt-[-300px] sm-tablet:mt-[-100px] mt-[-40px]" />
            </div>
            <h3 className=" text-darkerGreyText uppercase text-center text-2xl mb-4">The bestseller of 2025</h3>
            {/* <h3 className="text-white tablet:text-[40px] font-bold pb-7 tablet:max-w-[550px] uppercase">LENNON r2d2 with NVIDIA 5090 TI</h3> */}
            <Link to={"/products"} className=" px-5 py-3 block w-fit mx-auto dark:bg-secondaryColor bg-LightBlueSecondaryColor hover:bg-secondaryDarkColor rounded-lg text-white font-medium dark:hover:bg-white dark:hover:text-secondaryColor transition-all">Shop Now</Link>

        </div>
    )
}