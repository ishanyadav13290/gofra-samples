import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/Contexts";

export default function NewComings(){
    let {allSellerItems, setAllSellerItems} = useContext(AuthContext)

    useEffect(()=>{
        (async ()=>{
          let temp=  await axios.get("https://sedate-laced-chestnut.glitch.me/allItems")
          setAllSellerItems(temp.data)
        //   console.log(temp.data)

        })()
    },[])
    return <Box height={"100vh"} mt={["30%", "20%", "10%"]}>
        {allSellerItems.map((el,i)=>{
            return <Box key={i} mb={"10px"} display={["box","flex"]} justifyContent={"space-around"}>
           <Box maxHeight={"150px"} maxWidth={"150px"} sx={{objectFit:"cover"}}><img src={el.Img} alt="blank" style={{height:"100%",width:"100%"}}  /></Box>
           <Box width={"60%"} textAlign={"left"}>
            <Box display={"flex"} justifyContent={'space-around'}>
            <Box>
            Name:
            </Box>
            <Box m={"0 50% 0 auto"}>
            {el.name}
            </Box>
            </Box>
            <Box display={"flex"} justifyContent={'space-around'}>
            <Box>
            Description:
            </Box>
            <Box m={"0 50% 0 auto"}>
            {el.description}
            </Box>
            </Box>
            <Box display={"flex"} justifyContent={'space-around'}>
            <Box>
            Address:
            </Box>
            <Box m={"0 50% 0 auto"}>
            {el.address}
            </Box>
            </Box>
            <Box display={"flex"} justifyContent={'space-around'}>
            <Box>
            Price:
            </Box>
            <Box m={"0 50% 0 auto"}>
            {el.price}
            </Box>
            </Box>
           </Box>
        </Box>
        })}
    </Box>
}