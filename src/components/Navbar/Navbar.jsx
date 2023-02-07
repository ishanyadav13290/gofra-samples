import { NavLink } from "react-router-dom";

export default function Navbar(){
    let styles = {
        display:"flex",
        justifyContent:"space-around",
        padding:"1%",
        backgroundColor:"black",
        fontSize:"20px",
        fontWeight:700
    }
    let styles2 = {color:"white", textDecoration:"none"}
    return <>
        <div style={styles}>
        <NavLink style={styles2} to={"/"}>Home</NavLink>
        <NavLink style={styles2} to={"/about"}>About</NavLink>
        <NavLink style={styles2} to={"/contact"}>Contact</NavLink>
        <NavLink style={styles2} to={"/login"}>Login</NavLink>
        </div>
    </>
}