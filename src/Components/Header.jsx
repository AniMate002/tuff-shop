import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleModalWindow } from "../Redux/Slices/UserSlice";

export default function Header (){
    const dispatch = useDispatch()
    const { currentUser, cart } = useSelector(state => state.user)
    const onGuestCLick = () => {
        dispatch(toggleModalWindow(true))
    }
    return(
        <header className="flex flex-col tablet:flex-row items-center justify-between py-8 px-10">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-5 tablet:mb-0">
                <i className="fa-solid fa-dollar-sign text-secondaryColor text-3xl"></i>
                <p className="text-white tracking-wider text-3xl font-bold">TUFF</p>
            </Link>
            <div onClick={onGuestCLick} className=" flex items-center justify-center space-x-4 rounded-lg cursor-pointer hover:bg-secondaryColor px-3 py-1 transition-all mb-5 tablet:mb-0">
                <i className="fa-solid fa-piggy-bank text-secondaryColor text-3xl bg-secondaryDarkColor px-3 py-1 rounded-full"></i>
                <p className="text-greyText leading-1">{currentUser.name || "Guest"}</p>
            </div>
            <div className="bg-secondaryDarkColor py-2 px-6 flex items-center justify-center space-x-2 rounded-lg mb-5 tablet:mb-0">
                <i className="fa-solid fa-magnifying-glass text-greyText cursor-pointer"></i>
                <input type="text" placeholder="Search for anything..." className="bg-secondaryDarkColor text-sm focus:outline-none text-greyText laptop:min-w-[300px] w-full"/>
            </div>
            <div className=" flex items-center justify-center space-x-10">
                <Link to={"/favorites"}><i className="fa-regular fa-heart text-3xl text-greyText cursor-pointer hover:text-white transition-all"></i></Link>
                <Link to='/cart' className=" relative cursor-pointer">
                    <i className="fa-regular fa-copy text-2xl text-greyText "></i>
                    <p className=" absolute top-3 left-4 font-bold text-sm text-white bg-secondaryColor px-2 py-1 rounded-full">{cart.length}</p>
                </Link>
            </div>
        </header>
    )
}