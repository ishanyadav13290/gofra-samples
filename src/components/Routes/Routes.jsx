import { Route, Routes } from "react-router-dom";
import Login from "../Authorisation/Login";
import SignUp from "../Authorisation/SignUp";
import Cart from "../Cart/Cart";
import HomePage from "../Landing Page/HomePage";

export default function AllRoutes(){
    return <Routes> 
    <Route path="/" element=<HomePage /> />
    <Route path="/login" element=<Login /> />
    <Route path="/cart" element=<Cart /> />
    <Route path="/cart" element=<h1>Cart</h1> />
    <Route path="/signup" element=<SignUp /> />
</Routes>
}