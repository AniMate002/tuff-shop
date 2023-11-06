import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPaginationProducts } from "../../Redux/Slices/ProductsSlice";
import ProductsPagination from "./ProductsPagination";
import { useSearchParams } from "react-router-dom";
import ProductsSearchForm from "./ProductsSearchForm";


export default function Products(){
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get('page') || 0
    const [amount, setAmount] = useState(0)
    const { products, paginationProducts, isLoading, error, filtered, notFound } = useSelector(state => state.products)
    const {register, handleSubmit, formState:{errors, isValid, isSubmitted}} = useForm({
        mode: 'onSubmit'
    })

    useEffect(() => {
        dispatch(getPaginationProducts(amount))
        setSearchParams({page: amount})
        window.scrollTo(0,0)
    }, [amount]) 

    const filteredProducts = filtered.length === 0 ?  paginationProducts : filtered
    console.log("Filtered length: " + filtered)
    // const filteredProducts = paginationProducts
    const renderedProducts = filteredProducts?.map(product => {
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
            <div className="text-white font-bold text-center text-2xl mb-10">Products</div>
            <ProductsSearchForm />
            {notFound ? <h1 className="text-center text-white mb-10 text-3xl font-bold">Products were not found <i className="fa-regular fa-face-frown fa-shake"></i></h1> 
            : 
            <div className="grid desktop:grid-cols-5 tablet:grid-cols-4 laptop:gap-10 gap-4 mb-10 grid-cols-2 sm-tablet:grid-cols-3">
                {
                isLoading ? <h1 className=" font-bold text-3xl text-white">Loading <i className="fa-solid fa-spinner fa-spin"></i></h1>
                :
                renderedProducts
                }
            </div>}
            {filtered.length !== 0 ? "" : <ProductsPagination page={page} amount={amount} setAmount={setAmount} max={products.length}/>}
            
        </div>
    )
}