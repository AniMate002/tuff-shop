import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import ModalWindow from "./ModalWindow/ModalWindow";

export default function LayOut (){
    return(
        <div className="container mx-auto pb-10">
            <ModalWindow />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}