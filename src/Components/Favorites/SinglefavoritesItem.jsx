import React from "react";
import { Link } from "react-router-dom";

export default function SingleFavoritesItem({ item, favorites, setFavorites }) {
  const deleteFromfavorites = () => {

    localStorage.setItem("happyCoachingFavorites", JSON.stringify(favorites.filter(pr => pr.id !== item.id)))
    setFavorites(JSON.parse(localStorage.getItem('happyCoachingFavorites')))
  }

  return (
    <div className=" bg-mainColor flex flex-col tablet:flex-row items-center justify-between px-5 py-5 rounded-xl mb-10">
      <Link to={`/products/${item.id}`} className="flex flex-col tablet:flex-row justify-start items-center gap-3">
        <div className=" truncate w-[180px] h-[100px] rounded-lg">
          <img src={item.images?.[1]} className="my-[-35px]  transition-all" alt="Product Image" />
        </div>
        <div>
          <div className="text-white text-md font-bold mb-2">{item.title}</div>
          <div className=" text-greyText text-sm">{item.category.name}</div>
        </div>
      </Link>
      <button onClick={deleteFromfavorites}><i className="fa-solid fa-square-minus text-darkerGreyText text-2xl"></i></button>
    </div>
  );
}
