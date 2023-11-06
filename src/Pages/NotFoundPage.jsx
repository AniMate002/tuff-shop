import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage(){

    return(
        <div className="bg-secondaryDarkColor rounded-lg tablet:px-10 tablet:py-10 px-5 py-5 mx-2 sm-tablet:mx-0">
            <h1 className="text-center text-white font-bold tablet:text-[70px] text-[25px]">Ooops... 404 <i className="fa-regular fa-face-dizzy fa-spin fa-spin-reverse"></i></h1>
            <h3 className="text-center text-white font-bold tablet:text-[40px] text-[15px]">This page was not found</h3>
            <Link to="/" className="text-center block mx-auto tablet:mt-10 mt-5 text-base text-secondaryColor underline font-bold">Go back home</Link>
        </div>
    )
}