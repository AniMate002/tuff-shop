import { isAction } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function SideBar(){
    const {categories, isLoading, error} = useSelector(state => state.categories)
    const renderedCategories = categories?.map(cat => {
        return(
            <NavLink to={`/category/${cat.id}`} key={cat.id} className={` text-darkerGreyText tracking-wider hover:text-white transition-all text-md`}>
                {cat.name}
            </NavLink>
        )
    })

    if(error){
        return <h1 className=" text-darkerGreyText text-3xl">Error {error}</h1>
    }
    
    return(
        <div className=" bg-secondaryDarkColor rounded-lg p-10 flex flex-col justify-between items-start mx-auto tablet:mx-0 w-full tablet:w-auto">
            <h1 className=" tracking-widest font-bold text-white mb-5 uppercase text-2xl mx-auto tablet:mx-0">Categories</h1>
            <div className="flex flex-col gap-2 mb-10 mx-auto tablet:mx-0 text-center tablet:text-left">
                <NavLink to={`/products`} className={` text-secondaryColor tracking-wider hover:text-white transition-all text-md`}>
                    See all products
                </NavLink>
                {isLoading ? <h1 className=" text-darkerGreyText text-3xl">Loading <i className="fa-solid fa-spinner fa-spin"></i></h1> 
                : 
                renderedCategories
                }
            </div>
            <div className="flex justify-between items-center text-darkerGreyText underline text-sm space-x-10 mt-auto mx-auto tablet:mx-0 text-center tablet:text-left">
                <Link>Help</Link>
                <Link>Terms & Conditions</Link>
            </div>
        </div>
    )
}