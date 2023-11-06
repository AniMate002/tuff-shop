import React from "react";

import { Link } from "react-router-dom";

export default function LessThan({products, amount, error, isLoading}){
    const trending = products.filter(product => product.price < 100).filter((_, index) =>  index < amount)
    const renderedProducts = trending.map(product => {
        return(
            <Link to={`/products/${product.id}`} key={product.id} className="bg-mainColor rounded-b-lg">
                <div className=" overflow-hidden w-100% desktop:h-[250px]">
                    <img src={product.images[0]} className=" rounded-t-lg h-full w-full"/>
                </div>
                <div className="px-4 py-4">
                    <h1 className="text-md font-bold text-white mb-2">{product.title}</h1>
                    <h3 className=" text-greyText text-sm mb-7">{product.category.name}</h3>
                    <div className=" flex justify-between items-center">
                        <span className="font-bold text-2xl text-secondaryColor">{product.price}$</span>
                        <span className=" text-darkerGreyText line-through text-lg">{Math.floor(product.price *1.2 + 3)}$</span>
                        <span className=" text-darkerGreyText text-vsm">19 people purchased</span>
                    </div>
                </div>
            </Link>
        )
    })
    if(error){
        return <h1 className="text-white text-3xl text-center">{error}</h1>
    }
    return(
        <div className=" bg-secondaryDarkColor px-10 py-7 rounded-lg mt-10 mx-2 sm-tablet:mx-0">
            <h1 className="text-center text-white font-bold text-2xl mb-7">Less Than 100$</h1>
            <div className="grid grid-cols-1 desktop:grid-cols-5 tablet:grid-cols-3 grid-flow-row gap-10 sm-tablet:grid-cols-2">
                {isLoading? <h1 className="text-white text-center text-3xl">Loading <i className="fa-solid fa-spinner fa-spin"></i></h1> : renderedProducts}
            </div>
            <Link to={"/products"} className=" px-7 py-3 block w-fit mt-8 bg-secondaryColor rounded-lg text-white font-medium hover:bg-white hover:text-secondaryColor transition-all mx-auto text-center">See more</Link>
        </div>
    )
}