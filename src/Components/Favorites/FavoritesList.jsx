import React, { useEffect, useState } from "react";
import SingleFavoritesItem from "./SinglefavoritesItem";

export default function FavoritesList(){
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('happyCoachingFavorites')))
    }, [])
    const renderedItems = favorites.map(item => <SingleFavoritesItem key={item.id} item={item} favorites={favorites} setFavorites={setFavorites}/>)
    return(
        <div className=" tablet:flex-1 w-full dark:bg-secondaryDarkColor bg-LightSecondaryDarkColor tablet:px-10 tablet:py-10 px-2 py-5 rounded-lg relative mx-auto tablet:mx-0 text-center tablet:text-left">
            <h1 className=" dark:text-white text-LightTextColor font-bold tablet:text-2xl text-lg mb-10">Your favorites <i className="fa-regular fa-heart"></i></h1>
            {
            favorites.length === 0 ? 
            <div className="text-center dark:text-white text-LightTextColor text-3xl font-bold mb-5">Your dont have favorite items <i className="fa-regular fa-face-sad-tear"></i></div> 
            :
            renderedItems
            }
        </div>
    )
}