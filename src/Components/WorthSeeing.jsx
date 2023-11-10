import React from "react";
import { Link } from "react-router-dom";

export default function WorthSeeing({products, amount, error, isLoading}){
    const trending = products.filter((_, index) => index <= 5 + amount && index > 5)
    const renderedProducts = trending.map(product => {
        return(
            <Link to={`/products/${product.id}`} key={product.id} className="rounded-lg hover:bg-LightMainColor dark:hover:bg-mainColor transition-all">
                <img src={product.images[0]} className=" rounded-t-lg laptop:h-[300px] h-[250px] mx-auto"/>
                <div className="px-4 py-4">
                    <h1 className="text-md font-bold dark:text-white text-LightTextColor mb-2 text-center">{product.title}</h1>
                </div>
            </Link>
        )
    })
    if(error){
        return <h1 className="dark:text-white text-LightTextColor text-3xl text-center">{error}</h1>
    }
    return(
        <div className=" dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor px-10 py-7 rounded-lg mt-10 ">
            <h1 className="text-center dark:text-white text-LightTextColor font-bold text-2xl mb-7">Worth Seeing</h1>
            <div className="grid grid-cols-1 desktop:grid-cols-5 tablet:grid-cols-3 grid-flow-row gap-10 sm-tablet:grid-cols-2">
                {isLoading? <h1 className="text-white text-center text-3xl">Loading <i className="fa-solid fa-spinner fa-spin"></i></h1> : renderedProducts}
            </div>
        </div>
    )
}