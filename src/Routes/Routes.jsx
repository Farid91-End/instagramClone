import { lazy } from "react"




export const Add = lazy (() => import ("../Pages/Add/Add.jsx"))
export const Home = lazy (() => import ("../Pages/Home/Home.jsx"))
export const Like = lazy (() => import ("../Pages/Like/Like.jsx"))
export const Message = lazy (() => import ("../Pages/Message/Message.jsx"))
export const Profile = lazy (() => import ("../Pages/Profile/Profile.jsx"))
export const Top = lazy (() => import ("../Pages/Top/Top.jsx"))
export const Layout = lazy (() => import ("../Layout/Layout.jsx"))
export const EditProfile = lazy (() => import ("../Pages/EditProfile/EditProfile.jsx")) 
export const EditPassword = lazy (() => import ("../Pages/EditPassword/EditPassword.jsx"))
export const SignUp = lazy (() => import ("../Pages/SignUp/SignUp.jsx"))
export const Login = lazy (() => import ("../Pages/Login/Login.jsx"))
export const Direct = lazy (() => import ("../Pages/Direct/Direct.jsx"))