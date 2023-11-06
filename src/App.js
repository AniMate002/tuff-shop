import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LayOut from "./Components/LayOut";
import CartPage from "./Pages/CartPage";
import { useDispatch } from "react-redux";
import { getCategories } from "./Redux/Slices/CategorySlice";
import { getProducts } from "./Redux/Slices/ProductsSlice";
import SingleProductPage from "./Pages/SingleProductPage";
import { storageName } from "./Redux/Slices/UserSlice";
import ProductsPage from "./Pages/ProdctsPage";
import SingleCategoryPage from "./Pages/SingleCategoryPage";
import FavoritesPage from "./Pages/FavoritesPage";
import NotFoundPage from "./Pages/NotFoundPage";

if(!localStorage.getItem(storageName)){
  localStorage.setItem(storageName, JSON.stringify([]))
}

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div className="App bg-mainColor min-h-[100vh] flex flex-col">
      <Routes>  
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />}/>
          <Route path="cart" element={<CartPage />} />
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="category/:categoryId" element={<SingleCategoryPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
