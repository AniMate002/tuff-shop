import React from "react";
import santa from "../images/santa.png"
import { Link } from "react-router-dom";

export default function Sale(){
    return(
        <div className="flex flex-col tablet:flex-row items-stretch justify-between mt-10 mx-2 sm-tablet:mx-0">
            <div className=" dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor p-10  rounded-lg tablet:rounded-l-lg w-full tablet:w-1/2">
                <h1 className=" dark:text-secondaryColor text-LightBlueSecondaryColor desktop:text-[80px] text-[40px] laptop:text-[60px] tracking-widest text-center uppercase">New Year</h1>
                <h1 className=" dark:text-secondaryColor text-LightBlueSecondaryColor desktop:text-[180px] tablet:text-[60px] laptop:text-[100px] tracking-widest text-center uppercase">Sale</h1>
                <Link to={"/products"} className=" tablet:px-7 tablet:py-3 px-4 py-2 block w-fit mt-8 dark:bg-secondaryColor bg-LightBlueSecondaryColor  hover:bg-secondaryDarkColor rounded-lg text-white font-medium dark:hover:bg-white dark:hover:text-secondaryColor transition-all mx-auto text-center">See more</Link>
            </div>
            <img src={santa} className=" rounded-lg tablet:w-1/2 w-full"/>
        </div>
    )
}