import { useParams } from "react-router-dom";
import reactSelect from "react-select";
import SideBar from "../Components/SideBar";
import Banner from "../Components/Banner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryBanner from "../Components/SingleCategory/CategoryBanner";
import { getSingleCategory, getSingleCategoryProducts } from "../Redux/Slices/CategorySlice";
import SingleCategoryProducts from "../Components/SingleCategory/SingleCategoryProducts";

export default function SingleCategoryPage(){
    const {categoryId} = useParams()
    const dispatch = useDispatch()
    const {singleCategory, singleCategoryProducts, isLoading} = useSelector(state => state.categories)
    useEffect(() => {
        dispatch(getSingleCategory(categoryId))
        dispatch(getSingleCategoryProducts(categoryId))
        window.scrollTo(0,0)
    }, [dispatch, categoryId])
    return(
        <div>
            <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-10 flex-wrap mb-10 sm-tablet:mx-0 mx-5 tablet:mx-0">
                <SideBar />
                <CategoryBanner category={singleCategory}/>
            </div>
            <SingleCategoryProducts singleCategoryProducts={singleCategoryProducts} isLoading={isLoading}/>
        </div>
    )
}