import { Route, Routes } from "react-router-dom";
import Protected from "../protected";

export default function AllRoutes(){
    return <Routes> 
    <Route path="/" element=<h1>Home</h1> />
    <Route path="/login" element=<h1>Login</h1> />
    <Route path="/products" element=<Protected /> />
    <Route path="/cart" element=<h1>Cart</h1> />
    <Route path="/signup" element=<h1>Signup</h1> />
</Routes>
}