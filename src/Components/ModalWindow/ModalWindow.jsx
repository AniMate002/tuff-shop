import React from "react";
import { useForm } from "react-hook-form";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import { TYPE_LOGIN, TYPE_SIGNUP } from "../../Redux/Slices/UserSlice";
import LogInForm from "./LogInForm";
import UserPage from "./UserPage";

export default function ModalWindow() {
    const {showModul, type, isLogged} = useSelector(state => state.user)
    if(!showModul){
      return
    }
    let content;
    if(isLogged)
      content = <UserPage />
    else if(type === TYPE_SIGNUP)
      content = <SignUpForm />
    else if(type == TYPE_LOGIN)
      content = <LogInForm />


  return (
    <div className={`fixed inset-0 flex items-center justify-center z-10 bg-transparantColor ${showModul ? "" : "hidden"}`}>
        {content}
    </div>
  );
}
