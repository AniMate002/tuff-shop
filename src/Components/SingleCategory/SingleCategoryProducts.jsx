import React from "react";

import { Link } from "react-router-dom";


export default function SingleCategoryProducts( {singleCategoryProducts ,isLoading} ){
    const renderedProducts = singleCategoryProducts?.map(product => {
        return(
            <Link to={`/products/${product.id}`} key={product.id} className="bg-mainColor rounded-b-lg">
                <div className=" overflow-hidden w-100% desktop:h-[250px]">
                    <img src={product.images[0]} className=" rounded-t-lg h-full w-full"/>
                </div>
                <div className="px-4 py-4 flex flex-col justify-between">
                    <h1 className="tablet:text-md text-sm font-bold text-white mb-2">{product.title}</h1>
                    <h3 className=" text-greyText laptop:text-sm text-vsm laptop:mb-7 mb-4">{product.category.name}</h3>
                    <div className=" flex justify-between laptop:items-center items-start bottom-0 laptop:flex-row flex-col">
                        <span className="font-bold tablet:text-2xl text-lg text-secondaryColor">{product.price}$</span>
                        <span className=" text-darkerGreyText line-through laptop:text-lg text-md">{Math.floor(product.price *1.2 + 3)}$</span>
                        <span className=" text-darkerGreyText text-vsm">19 people purchased</span>
                    </div>
                </div>
            </Link>
        )
    })

    

    return(
        <div className="rounded-xl bg-secondaryDarkColor tablet:px-10 tablet:py-10 px-2 py-5">
            <div className="text-white font-bold text-center text-2xl mb-10">Products </div>             
            <div className="grid desktop:grid-cols-5 tablet:grid-cols-4 laptop:gap-10 gap-4 mb-10 grid-cols-2 sm-tablet:grid-cols-3">
                {isLoading ? <h1 className=" font-bold text-3xl text-white">Loading <i className="fa-solid fa-spinner fa-spin"></i></h1> : renderedProducts}
            </div>            
        </div>
    )
}