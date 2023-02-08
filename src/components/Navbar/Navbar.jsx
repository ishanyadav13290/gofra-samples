import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";

export default function Navbar(){
    let styles = {
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        padding:"1%",
        backgroundColor:"black",
        fontWeight:700
    }
    let styles2 = {color:"white", textDecoration:"none"}
    return <>
        <Box sx={styles} fontSize={["13px","15px","20px"]}>
        <Hamburger />
        <NavLink style={styles2} to={"/"}>Home</NavLink>
        <NavLink style={styles2} to={"/about"}>About</NavLink>
        <NavLink style={styles2} to={"/contact"}>Contact</NavLink>
        <NavLink style={styles2} to={"/products"}>Products</NavLink>
        <NavLink style={styles2} to={"/login"}>Login</NavLink>
        </Box>
    </>
}