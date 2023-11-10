import React from "react";
import { useDispatch } from "react-redux";
import { changeAmount } from "../../Redux/Slices/UserSlice";

export default function CartItemCounter({amount, id}){
    const dispatch = useDispatch()
    const OnCick = (number) => {
        dispatch(changeAmount({id, amount: number}))
    }
    return(
        <div className="flex items-center gap-5">
            <button disabled={amount === 1} onClick={() => OnCick(-1)} className={`${amount === 1 ? "bg-darkerGreyText text-greyText" : " dark:bg-secondaryColor bg-LightBlueSecondaryColor text-white"} tablet:px-5 font-bold text-lg tablet:py-2 px-3 py-1 rounded-lg`}>-</button>
            <div className=" text-darkerGreyText text-xl">{amount}</div>
            <button onClick={() => OnCick(+1)} className={` dark:bg-secondaryColor bg-LightBlueSecondaryColor text-white tablet:px-5 font-bold text-lg tablet:py-2  px-3 py-1 rounded-lg`}>+</button>

        </div>
    )
}