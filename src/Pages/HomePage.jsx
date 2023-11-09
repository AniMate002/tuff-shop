import React from "react";
import SideBar from "../Components/SideBar";
import Banner from "../Components/Banner";
import Trending from "../Components/Trending";
import { useSelector } from "react-redux";
import WorthSeeing from "../Components/WorthSeeing";
import Sale from "../Components/Sale";
import LessThan from "../Components/LessThan";

export default function HomePage (){
    const {products, error: productsError, isLoading: productsIsLoading} = useSelector(state => state.products)
    return(
        <div>
            <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-10 flex-wrap mb-10 mx-5 sm-tablet:mx-0">
                <Banner />
            </div>
            <Trending products={products} amount={5} error={productsError} isLoading={productsIsLoading}/>
            <WorthSeeing products={products} amount={5} error={productsError} isLoading={productsIsLoading} />
            <Sale />
            <LessThan products={products} amount={5} error={productsError} isLoading={productsIsLoading}/>

        </div>
    )
}