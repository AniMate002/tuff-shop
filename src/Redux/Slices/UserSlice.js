import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { act } from "react-dom/test-utils"

export const TYPE_SIGNUP = 'signup'
export const TYPE_LOGIN = 'login'
export const storageName = "happyCoachingFavorites"


const initialState = {
    currentUser: {},
    cart: [],
    totalPrice: 0,
    isLoading: false,
    error: null,
    type: TYPE_LOGIN,
    showModul: false,
    isLogged: false
}

const POST_USER_URL = "https://api.escuelajs.co/api/v1/users"
const LOGIN_USER_URL = 'https://api.escuelajs.co/api/v1/auth/login'
const GET_USER_URL = 'https://api.escuelajs.co/api/v1/auth/profile'

export const createUser = createAsyncThunk('user/createUser', async (user, {rejectWithValue}) => {
    try {
        const res = await axios.post(POST_USER_URL, user)
        const data = res.data
        console.log(data)
        if(!data)
            throw new Error('error has accured')
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const logInUser = createAsyncThunk('user/logInUser', async(user, {rejectWithValue}) => {
    try {
        const res = await axios.post(LOGIN_USER_URL, user)
        if(!res)
            throw new Error('error has accured')
        const login = await axios.get(GET_USER_URL, {
            headers: {
                Authorization: `Bearer ${res.data.access_token}`,
            }
        })
        if(!login)
            throw new Error('error has accured')
        console.log(login)
        return login.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})



const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers:{
        toggleModalWindow:(state, action) => {
            state.showModul = action.payload
        },
        toggleModalType:(state, action) => {
            state.type = action.payload
        },
        addItemToCart: (state, action) => {
            const found = state.cart.find(product => product.id == action.payload.id && product.size == action.payload.size)
            if(found)
                found.amount++
            else
                state.cart.push(action.payload)
            // state.totalPrice+= action.payload.price
        },
        logOutUser: (state, action) => {
            state.isLogged = false
            state.currentUser = {}
            state.cart = []
        },
        changeAmount: (state, action) => {
            const found = state.cart.find(item => item.id == action.payload.id)
            found.amount += action.payload.amount
            // state.totalPrice += action.payload.price
        },
        deleteItemFromCart: (state, action) => {
            // const found = state.cart.find(item => item.id == action.payload)
            // state.cart.splice(found.id, 1)
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.isLogged = true
            state.isLoading = false;
            state.error = null
            state.showModul = false
        })
        .addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.error = null
        })
        .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        .addCase(logInUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.currentUser = action.payload
            state.isLogged = true
        })

    }
})


export default userSlice.reducer
export const {toggleModalType, toggleModalWindow, addItemToCart, logOutUser, changeAmount, deleteItemFromCart} = userSlice.actions