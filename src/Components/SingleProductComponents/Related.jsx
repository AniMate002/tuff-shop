import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useFetcher } from "react-router-dom";
import { setRelated } from "../../Redux/Slices/ProductsSlice";

export default function Related({products, amount, error, isLoading, id}){
    const [rand, setRand] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        if(products.length != 0)
            setRand(Math.floor(Math.random() * (products.length - amount)));

    }, [id])

    const trending = products.filter((_, index) => index > rand && index <= rand + amount)
    const renderedProducts = trending.map(product => {
        return(
            <Link to={`/products/${product.id}`} key={product.id} className="bg-mainColor rounded-b-lg">
                <div className=" overflow-hidden w-100% desktop:h-[250px]">
                    <img src={product.images[0]} className=" rounded-t-lg h-full w-full"/>
                </div>
                <div className="px-4 py-4">
                    <h1 className="text-md font-bold text-white mb-2">{product.title}</h1>
                    <h3 className=" text-greyText text-sm mb-7">{product.category.name}</h3>
                    <div className="flex gap-5 items-center">
                        <span className="font-bold text-2xl text-secondaryColor">{product.price}$</span>
                        <span className=" text-darkerGreyText line-through laptop:text-lg">{Math.floor(product.price *1.2 + 3)}$</span>
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
        <div className=" bg-secondaryDarkColor tablet:px-10 px-2 py-7 rounded-lg">
            <h1 className="text-center text-white font-bold text-2xl mb-7">Related</h1>
            <div className="grid grid-cols-1 desktop:grid-cols-5 tablet:grid-cols-3 grid-flow-row gap-10 sm-tablet:grid-cols-2">
                {isLoading? <h1 className="text-white text-center text-3xl">Loading <i className="fa-solid fa-spinner fa-spin"></i></h1> : renderedProducts}
            </div>
            <Link to={"/products"} className=" px-7 py-3 block w-fit mt-8 bg-secondaryColor rounded-lg text-white font-medium hover:bg-white hover:text-secondaryColor transition-all mx-auto text-center">See more</Link>
        </div>
    )
}