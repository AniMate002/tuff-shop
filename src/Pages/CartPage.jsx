import React from "react";
import SideBar from "../Components/SideBar";
import CartList from "../Components/Cart/CartList";
import { useSelector } from "react-redux";

export default function CartPage(){
    const { isLogged } = useSelector(state => state.user)
    return(
        <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-10 flex-wrap mb-10 mx-5 tablet:mx-0 ">
            <SideBar />
            <CartList isLogged={isLogged}/>
        </div>
    )
}