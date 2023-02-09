import { Input } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";

export default function Cart(){

    let {isAuth} = useContext(AuthContext)
   return !isAuth? <Navigate to="/login" /> : 
   <Box m={"2% 0"}>
    Cart Page
   </Box>
}