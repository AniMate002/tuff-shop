import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkTheme, toggleModalWindow } from "../Redux/Slices/UserSlice";

export default function Header (){
    const dispatch = useDispatch()
    const { currentUser, cart, isDarkTheme } = useSelector(state => state.user)
    
    const onGuestCLick = () => {
        dispatch(toggleModalWindow(true))
    }
    const changeTheme = () => {
        const html = document.getElementsByTagName('html')[0]
        html.classList.toggle('dark')
        dispatch(toggleDarkTheme(!isDarkTheme))
    }
    return(
        <header className="flex flex-col tablet:flex-row items-center rounded-b-xl justify-between py-8 px-10">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-5 tablet:mb-0">
                <i className="fa-solid fa-dollar-sign dark:text-secondaryColor text-LightBlueSecondaryColor text-3xl"></i>
                <p className="dark:text-white text-LightTextColor tracking-wider text-3xl font-bold">TUFF</p>
            </Link>
            <div onClick={onGuestCLick} className=" flex items-center justify-center space-x-4 rounded-lg cursor-pointer dark:hover:bg-secondaryColor hover:bg-blue-300 px-3 py-1 transition-all mb-5 tablet:mb-0">
                <i className="fa-solid fa-piggy-bank dark:text-secondaryColor text-LightBlueSecondaryColor text-3xl dark:bg-secondaryDarkColor bg-white px-3 py-1 rounded-full"></i>
                <p className="dark:text-greyText text-LightTextColor font-medium leading-1">{currentUser.name || "Guest"}</p>
            </div>
            <div className="dark:bg-secondaryDarkColor bg-white py-2 px-6 flex items-center justify-center space-x-2 rounded-lg mb-5 tablet:mb-0">
                <i className="fa-solid fa-magnifying-glass text-greyText cursor-pointer"></i>
                <input type="text" placeholder="Search for anything..." className="dark:bg-secondaryDarkColor bg-white text-sm focus:outline-none text-greyText laptop:min-w-[300px] w-full"/>
            </div>
            <div className=" flex items-center justify-center space-x-10">
                <i onClick={changeTheme} className={`fa-solid fa-${isDarkTheme ? 'sun' : 'moon'} text-greyText text-2xl hover:text-LightBlueSecondaryColor dark:hover:text-secondaryColor transition-all cursor-pointer`}></i>
                <Link to={"/favorites"}><i className="fa-regular fa-heart text-3xl text-greyText cursor-pointer dark:hover:text-secondaryColor hover:text-LightBlueSecondaryColor transition-all"></i></Link>
                <Link to='/cart' className=" relative cursor-pointer">
                    <i className="fa-regular fa-copy text-2xl text-greyText "></i>
                    <p className=" absolute top-3 left-4 font-bold text-sm text-white dark:hover:text-secondaryColor dark:hover:bg-white hover:bg-white hover:text-LightBlueSecondaryColor transition-all dark:bg-secondaryColor bg-LightBlueSecondaryColor px-2 py-1 rounded-full">{cart.length}</p>
                </Link>
            </div>
        </header>
    )
}