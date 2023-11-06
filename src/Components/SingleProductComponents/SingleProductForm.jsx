import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withReactContent  from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { addItemToCart, storageName, toggleModalWindow } from "../../Redux/Slices/UserSlice";

export default function SingleProductForm({product, isLoading, error}){
    const navigate = useNavigate()
    const [currImage, setCurrImage] = useState('')
    const [activeBtn, setActiveBtn] = useState(0)
    const [size, setSize] = useState(4)
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)
    const MySwal = withReactContent(Swal)
    const {id} = useParams()
    useEffect(() => {
        console.log(product)
        setCurrImage(product.images?.[0])
    }, [product])
    const addToCartHandler = () => {
        if(currentUser.id){
            const pr = {...product, size, amount: 1}
            dispatch(addItemToCart(pr))
            MySwal.fire({
                title: "Success",
                icon: 'success',
                text: 'Item has been added to the cart'
            })
        }else{
            dispatch(toggleModalWindow(true))
        }
    }
    const addToFavoritesHandler = () => {
        let favorites = JSON.parse(localStorage.getItem(storageName))
        const found = favorites.find(fav => fav.id == product.id)
        if(found){
            found.amount++

        }else{
            favorites.push({...product, size, amount: 1})
        }
        MySwal.fire({
            title: 'Success',
            icon: 'success',
            text: 'Item has added to favorites'
        })
        localStorage.setItem(storageName, JSON.stringify(favorites))
    }
    const handleBtnClick = (index, size) => {
        setSize(size)
        setActiveBtn(index)
    }
    if(error){
        navigate('/')
    }
    return(
        <div className="flex-1 laptop:w-1/2 bg-secondaryDarkColor rounded-lg tablet:px-10 tablet:py-10 px-4 py-6">
            { isLoading ?
             <h1 className="text-white text-3xl font-bold text-center">Loading <i className="fa-solid fa-spinner fa-spin"></i></h1>
            : 
             <div className="flex flex-col desktop:flex-row justify-start gap-2">
                <div className=" truncate tablet:w-[380px] tablet:h-[380px]">
                    <img className="rounded-lg" src={currImage || product?.images?.[0]} alt="main picture" />
                </div>
                <div className="flex desktop:flex-col flex-row gap-5 flex-wrap">
                    {product?.images?.map((image, index) => {
                        return(
                            <div key={index} onMouseEnter={() => setCurrImage(image)} className=" cursor-pointer truncate w-[90px] h-[90px] rounded-lg hover:rounded-2xl transition-all hover:border-2 border-secondaryColor">
                                <img src={product?.images?.[index]} className="h-[90px] w-[90px]" alt="picure" />
                            </div>
                        )
                    })}
                </div>
                <div className="desktop:ml-10">
                    <h1 className="text-white text-2xl mb-3">{product.title}</h1>
                    <p className="text-white font-bold text-lg mb-5">{product.price}$</p>
                    <p className="text-lg text-white mb-5"><span className=" text-darkerGreyText">Color: </span>Blanc</p>
                    <div className="flex items-center gap-2 mb-5">
                        <span className=" text-darkerGreyText text-lg">Sizes: </span>
                        <button onClick={() => handleBtnClick(0, 4)} className={`text-white px-2 py-1 bg-mainColor rounded-lg ${activeBtn == 0? " bg-secondaryColor" : 'bg-mainColor'}`}>4</button>
                        <button onClick={() => handleBtnClick(1, 4.5)} className={`text-white px-2 py-1 bg-mainColor rounded-lg ${activeBtn == 1? " bg-secondaryColor" : 'bg-mainColor'}`}>4.5</button>
                        <button onClick={() => handleBtnClick(2, 5)} className={`text-white px-2 py-1 bg-mainColor rounded-lg ${activeBtn == 2? " bg-secondaryColor" : 'bg-mainColor'}`}>5</button>
                    </div>
                    <p className=" text-greyText text-md mb-5">{product.description}</p>
                    <div className="flex items-baseline gap-4 mb-10">
                        <button onClick={addToCartHandler} className=" desktop:px-7 tablet:py-3 py-3 px-5 hover:bg-secondaryColor rounded-lg hover:text-white font-medium bg-white text-secondaryColor transition-all">Add to cart</button>
                        <button onClick={addToFavoritesHandler} aria-disabled className=" desktop:px-7 tablet:py-3 py-3 px-5 bg-secondaryColor rounded-lg text-white font-medium hover:bg-white hover:text-secondaryColor transition-all">Add to favorites</button>
                    </div>
                    <p className="text-sm text-darkerGreyText">19 people purchased</p>
                </div>
            </div>}
        </div>
    )
}