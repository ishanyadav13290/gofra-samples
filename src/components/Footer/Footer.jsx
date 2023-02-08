import { Box } from "@mui/material"

export default function Footer(){
    let style={
        backgroundColor:"black",
        position:"absolute",
        bottom:0,
        width:"100%",
        color:"white",
        fontWeight:700,
        fontSize:"20px",
        padding:"10px 0"
    }
    return <Box sx={style}>
        Footer
    </Box>
}