import React, { useEffect } from "react";

export default function ProductsPagination({amount, setAmount, page, max}){
    const checkMin = page - 20 < 0
    const checkMax = (Number(page) + 20) > max

    return(
        <div className="flex justify-center gap-5 items-center">
            <button disabled={checkMin} className={`${checkMin ? "bg-greyText" : "dark:bg-secondaryColor bg-LightBlueSecondaryColor"} text-white text-xl text-center px-5 py-3 rounded-lg hover:bg-mainColor transition-all`} onClick={() => setAmount(prev => prev - 20)}><i className="fa-solid fa-arrow-left"></i></button>
            <button disabled={checkMax} className={`${checkMax ? "bg-greyText" : "dark:bg-secondaryColor bg-LightBlueSecondaryColor"} text-white text-xl text-center px-5 py-3 rounded-lg hover:bg-mainColor transition-all`} onClick={() => setAmount(prev => prev + 20)}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    )
}