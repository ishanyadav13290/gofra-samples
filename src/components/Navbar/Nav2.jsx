import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

let arr=["Reinforced Steel","I Beam","Angles","DI Pipes","Red Oxide Primar","Plyboard","Nails","HDPE Pipes","Wires and Cables"]

export default function Nav2(){
    return <Box display={"flex"} justifyContent={"space-between"}>
    <NavLink to="/newcomings" ><Typography sx={{cursor:"pointer"}} fontSize={"13px"}  color={"red"}>New Comings</Typography></NavLink>
    {arr.map((el,i)=>{
        return <Typography sx={{cursor:"pointer"}} key={i} fontSize={"13px"}  color={"rgba(0,0,0,.362)"}>{el}</Typography>
    })}
    </Box>
}