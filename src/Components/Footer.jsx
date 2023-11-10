import React from "react";
import { Link } from "react-router-dom";

export default function Footer (){
    return(
        <footer className="flex flex-col tablet:flex-row items-center justify-between dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor px-10 py-5 rounded-lg mt-10 mx-2 sm-tablet:mx-0">
            <div className="flex items-center justify-center space-x-3 mb-5 tablet:mb-0">
                <i className="fa-solid fa-dollar-sign dark:text-secondaryColor text-LightBlueSecondaryColor text-3xl"></i>
                <p className="dark:text-white text-LightTextColor tracking-wider text-3xl font-bold">TUFF</p>
            </div>
            <div className="text-md text-center tablet:text-left mb-5 tablet:mb-0">
                <span className=" text-greyText">Developed by </span>
                <Link target="_blank" to={'https://github.com/AniMate002'} className=" text-LightBlueSecondaryColor font-medium dark:text-secondaryColor">Kiryl Shauchenka</Link>
            </div>
            <div className="flex items-center justify-center space-x-4 text-greyText text-2xl">
                <i className="fa-brands fa-instagram hover:text-LightBlueSecondaryColor dark:hover:text-secondaryColor transition-all cursor-pointer"></i>
                <i className="fa-brands fa-tiktok hover:text-LightBlueSecondaryColor dark:hover:text-secondaryColor transition-all cursor-pointer"></i>
                <i className="fa-brands fa-discord hover:text-LightBlueSecondaryColor dark:hover:text-secondaryColor transition-all cursor-pointer"></i>
            </div>
        </footer>
    )
}