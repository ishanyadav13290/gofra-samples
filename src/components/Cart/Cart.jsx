import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";

export default function Cart(){
    let {cart} = useContext(AuthContext)
    let {isAuth} = useContext(AuthContext)
   return !isAuth? <Navigate to="/login" /> : 
   <Box height={"100vh"}>
    <Box >
    {cart.length===0?<Typography variant="h3" fontWeight={700}>Your Cart is Empty</Typography>:null}
   </Box>
   </Box>
}