import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../Redux/Slices/ProductsSlice";
import SingleProductForm from "../Components/SingleProductComponents/SingleProductForm";
import Related from "../Components/SingleProductComponents/Related";


export default function SingleProductPage(){
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleProduct(id))
        window.scrollTo(0,0)
    }, [dispatch, id])
    const {singleProduct: product, isLoading, error, products} = useSelector(state => state.products)
    return(
        <div>
            <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-10 mb-10 mx-2 tablet:mx-0">
                <SideBar />
                <SingleProductForm product={product} isLoading={isLoading} error={error}/>
            </div>
            <Related products={products} isLoading={isLoading} error={error} amount={5} id={id} />
        </div>
    )
}