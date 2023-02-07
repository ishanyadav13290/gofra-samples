import { NavLink } from "react-router-dom";

export default function Navbar(){
    return <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>about</NavLink>
        <NavLink to={"/contact"}>contact</NavLink>
        <NavLink to={"/login"}>login</NavLink>
    </>
}