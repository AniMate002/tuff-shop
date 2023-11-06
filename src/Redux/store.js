import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Slices/CategorySlice";
import ProductsSlice from "./Slices/ProductsSlice";
import UserSlice from "./Slices/UserSlice";


const store = configureStore({
    reducer:{
        categories: CategorySlice,
        products: ProductsSlice,
        user: UserSlice,
    }
})

export default store