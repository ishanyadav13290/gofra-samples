import { Typography } from "@mui/material";
import { Box } from "@mui/system";

let arr=["Category","Category","Category","Category","Category","Category","Category","Category"]

export default function Nav2(){
    return <Box display={"flex"} justifyContent={"space-between"}>
    {arr.map((el,i)=>{
        return <Typography sx={{cursor:"pointer"}} key={i} fontSize={"13px"}  color={"rgba(0,0,0,.361)"}>{el}</Typography>
    })}
    </Box>
}