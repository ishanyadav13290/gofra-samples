import { Route, Routes } from "react-router-dom";
import SignUp from "../Authorisation/SignUp";
import Cart from "../Cart/Cart";

export default function AllRoutes(){
    return <Routes> 
    <Route path="/" element=<h1>Home</h1> />
    <Route path="/login" element=<h1>Login</h1> />
    <Route path="/cart" element=<Cart /> />
    <Route path="/cart" element=<h1>Cart</h1> />
    <Route path="/signup" element=<SignUp /> />
</Routes>
}