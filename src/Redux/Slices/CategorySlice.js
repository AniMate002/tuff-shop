import axios from "axios"
import { act } from "react-dom/test-utils"
import { PRODUCTS_URL } from "./ProductsSlice"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    categories: [],
    isLoading: false,
    error: null,
    singleCategory: {},
    singleCategoryProducts: []
}

const CATEGORIES_URL = 'https://api.escuelajs.co/api/v1/categories'

export const getCategories = createAsyncThunk('categories/getCategories', async (_, {rejectWithValue}) => {
    try {
        const res = await axios.get(CATEGORIES_URL)
        const data = res.data
        if(!data)
            throw new Error('Error has accured')

        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getSingleCategory = createAsyncThunk("categories/getSingleCategory", async (id, {rejectWithValue}) => {
    try {
        const res = await axios.get(CATEGORIES_URL + `/${id}`)
        const data = res.data
        if(!data)
            throw new Error("error has accured")
        console.log(data)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getSingleCategoryProducts = createAsyncThunk("categories/getSingleCategoryProducts", async(id, {rejectWithValue}) => {
    try {
        const res = await axios.get(PRODUCTS_URL + `/?categoryId=${id}`)
        const data = res.data
        if(!data)
            throw new Error("error has accured")

        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload.filter(cat => cat.id <= 5)
            console.log(action.payload)
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getCategories.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(getSingleCategory.fulfilled, (state, action) => {
            state.singleCategory = action.payload
            state.isLoading = false;
            state.error = null
        })
        .addCase(getSingleCategory.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        .addCase(getSingleCategory.pending, (state, action) => {
            state.isLoading = true;
            state.error = null
        })
        .addCase(getSingleCategoryProducts.fulfilled, (state, action) => {
            state.singleCategoryProducts = action.payload
            state.isLoading = false
            state.error = null
        })
        .addCase(getSingleCategoryProducts.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        .addCase(getSingleCategoryProducts.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
    }
})

export default categorySlice.reducer