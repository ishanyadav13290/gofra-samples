import { Route, Routes } from "react-router-dom";
import Protected from "../protected";

export default function AllRoutes(){
    return <Routes> 
    <Route path="/" element=<h1>Home</h1> />
    <Route path="/about" element=<h1>About</h1> />
    <Route path="/contact" element=<h1>Contact</h1> />
    <Route path="/login" element=<h1>Login</h1> />
    <Route path="/products" element=<Protected /> />
</Routes>
}