import React from "react";
import SideBar from "../Components/SideBar";
import FavoritesList from "../Components/Favorites/FavoritesList";

export default function FavoritesPage (){
    return(
        <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-10 flex-wrap mb-10 mx-5 tablet:mx-0">
            <SideBar />
            <FavoritesList />
        </div>
    )
}