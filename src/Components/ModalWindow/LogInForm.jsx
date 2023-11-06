import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { TYPE_LOGIN, TYPE_SIGNUP, createUser, logInUser, toggleModalType, toggleModalWindow } from "../../Redux/Slices/UserSlice";


export default function LogInForm (){
    const { handleSubmit, register, formState: {errors, isValid, isSubmitted}} = useForm({
        mode: 'onBlur'
    })

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log("Login")
        console.log(data)
        dispatch(logInUser({email: data.email, password: data.password}))
        dispatch(toggleModalWindow(false))
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="bg-secondaryDarkColor shadow-2xl shadow-secondaryColor rounded-lg border-secondaryColor sm-tablet:px-10 sm-tablet:py-10 px-3 py-5">
            <div className="text-white text-3xl text-center mb-10">Log In</div>

            <p className="text-red-600 mb-2">{errors?.email?.message}</p>
            <input placeholder="Your email..." className="block mb-7 bg-mainColor focus:outline-none text-lg px-5 py-2 text-white rounded-lg sm-tablet:w-[400px] mx-auto"
            {...register('email', {
                required: "Email is required!",
            })} type="email" />

            <p className="text-red-600 mb-2">{errors?.password?.message}</p>
            <input placeholder="Password" className="block mb-7 bg-mainColor focus:outline-none text-lg px-5 py-2 text-white rounded-lg sm-tablet:w-[400px] mx-auto"
            {...register('password', {
                required: "Password is required!",
                minLength: 5
            })} type='password' />
            <input type="submit" value="Log in" className="text-white bg-secondaryColor sm-tablet:w-[400px] w-full cursor-pointer px-7 py-2 block mx-auto rounded-lg mb-4"/>
            <button onClick={() => dispatch(toggleModalType(TYPE_SIGNUP))} className="text-white bg-darkerGreyText sm-tablet:w-[400px] w-full mb-4 cursor-pointer px-7 py-2 block mx-auto rounded-lg hover:bg-secondaryColor transition-all">Create an account</button>
            <button onClick={() => dispatch(toggleModalWindow(false))} className="text-white bg-darkerGreyText sm-tablet:w-[400px] w-full cursor-pointer px-7 py-2 block mx-auto rounded-lg ">Close</button>
        </form>
    )
}