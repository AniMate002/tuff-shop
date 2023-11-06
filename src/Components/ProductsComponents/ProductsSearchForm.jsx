import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import { filterProducts, resetFilterByName } from "../../Redux/Slices/ProductsSlice";

const stylesForSelect = {
    option: (styles, {data, isSelected}) => {
        return{
            ...styles,
            backgroundColor: "#212123",
            color: "white",
            borderColor: "red"
        }
    },
    control: (styles, {data}) => {
        return{
            ...styles,
            backgroundColor: "#212123",
            color: "white",
            borderColor: "#212123",

        }
    },
    input: (styles, {data, isSelected}) => {
        return{
            ...styles,
            color:"white",

        }
    },
    singleValue: (styles, {data, isSelected}) => {
        return{
            ...styles,
            color: '#B8B8B8',
            
        }
    }
}

export default function ProductsSearchForm (){
    const dispatch = useDispatch()
    const [category, setCategory] = useState("")
    const { categories, isLoading } = useSelector(state => state.categories)
    const { handleSubmit, register, formState: {errors, isValid, isSubmitted}} = useForm({
        mode: 'onSubmit'
    })
    const onSubmit = (data) => {
        if(data.productTitle != "" || data.priceFrom > 0 || category != "")
            dispatch(filterProducts({...data, category}))
        if(data.productTitle == "" & data.priceFrom == 0 & category == '')
            dispatch(resetFilterByName())
        
        console.log({...data, category})
    }
    const options = [{value: "", label: "---"}].concat(categories.map(cat => {
        return(
            {
                value: cat.name,
                label: cat.name
            }
        )
    }))

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-start items-center gap-5 mb-10 flex-col tablet:flex-row">
                <input className=" bg-mainColor tablet:text-base text-sm w-full tablet:w-fit text-greyText px-5 py-2 rounded-lg" {...register('productTitle')} type="text" placeholder="Product name" />
                <input className=" bg-mainColor text-greyText tablet:text-base tablet:w-fit text-sm w-full px-5 py-2 rounded-lg" {...register('priceFrom', {
                    min: 0
                })} type="number" placeholder="Price from" />
                <Select onChange={(data) => setCategory(data.value)} options={options} isLoading={isLoading} styles={stylesForSelect}/>
                <button type="submit" className=" cursor-pointer hover:bg-mainColor text-white px-5 py-2 rounded-lg bg-secondaryColor transition-all">Search</button>
        </form>
    )
}