import React from "react";
import SideBar from "../Components/SideBar";
import Banner from "../Components/Banner";
import Products from "../Components/ProductsComponents/Products";


export default function ProductsPage(){

    return(
        <div>
            <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-10 flex-wrap mb-10 mx-5 tablet:mx-0">
                <SideBar />
                <Banner />
            </div>
            <Products/>
        </div>
    )
}