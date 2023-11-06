import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { act } from "react-dom/test-utils"

const initialState = {
    products: [],
    paginationProducts: [],
    singleProduct: {},
    related: [],
    isLoading: false,
    error: null,
    filtered: [],
    notFound: false
}
export const PRODUCTS_URL = 'https://api.escuelajs.co/api/v1/products'

export const getProducts = createAsyncThunk('products/getProducts', async (_, {rejectWithValue}) => {
    try{
        const res = await axios.get(PRODUCTS_URL)
        const data = res.data
        if(!data)
            throw new Error('Error has accured')
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getPaginationProducts = createAsyncThunk('products/getpaginationProducts', async(amount, {rejectWithValue}) => {
    try {
        const res = await axios.get(PRODUCTS_URL + `?offset=${amount}&limit=20`)
        const data = res.data
        if(!data)
            throw new Error('error has accured')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id, {rejectWithValue}) => {
    try {
        const res = await axios.get(PRODUCTS_URL + "/"+id)
        const data = res.data
        console.log(data)
        if(!data)
            throw new Error('error has accured')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const productsSlice = createSlice({
    initialState,
    name: 'products',
    reducers:{
        filterProducts: (state, {payload: {productTitle = "", priceFrom = 0, category = ""}}) => {
            console.log("Filtering:" + priceFrom +  " " + productTitle)
            state.filtered = state.products
            state.filtered = state.filtered.filter(product => product.title.toLowerCase().includes(productTitle.toLowerCase()))
            state.filtered = state.filtered.filter(product => product.price > priceFrom)
            state.filtered = state.filtered.filter(product => product.category.name.toLowerCase().includes(category.toLowerCase()))
            console.log(state.filtered)
            if(state.filtered.length === 0)
                state.notFound = true

        },
        resetFilterByName: (state, action) => {
            console.log("reseting")
            state.filtered = []
            state.notFound = false
        } 
    },
    extraReducers:(builder) =>{
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            console.log(action.payload)
            state.products = action.payload
        })
        .addCase(getProducts.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        .addCase(getSingleProduct.fulfilled, (state, action) => {
            state.isLoading = false 
            state.error = null
            state.singleProduct = {...action.payload, size: null}
        })
        .addCase(getSingleProduct.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        .addCase(getSingleProduct.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        .addCase(getPaginationProducts.fulfilled, (state, action) => {
            state.error = null
            state.isLoading = false
            console.log(action.payload)
            state.paginationProducts = action.payload
        })
    }
})

export default productsSlice.reducer
export const { filterProducts, resetFilterByName } = productsSlice.actions