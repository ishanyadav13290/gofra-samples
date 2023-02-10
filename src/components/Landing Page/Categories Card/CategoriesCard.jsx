import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Cards({name,image}){
    return <Box >
    <Box><img src={image} alt={""} width={["140px","180px"]} /></Box>
    <Typography>{name}</Typography>
    </Box>
}