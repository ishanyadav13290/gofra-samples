import { CheckOutlined } from "@mui/icons-material";
import {
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";
import Cards from "./Cards";

export default function Cart() {
  let { isAuth, cart } = useContext(AuthContext);
  let [subTotal,setSubTotal] = useState(0)
  let [total,setTotal] = useState(0)

  useEffect(()=>{
    cart.map((el,i)=>{
      let Totaltemp = 0;
    for (const items of cart) {
      let Temp = items.qty * items.price;
      Totaltemp += Temp;
    }
    setSubTotal(Totaltemp)
    setTotal(Totaltemp+40);
   })
  },[cart])
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <Box minHeight={"100vh"} p={["20px"]}>
      <Typography variant="h4" fontWeight={"700"}>Shopping Cart</Typography>
      <Box display={["block", "block", "flex"]} justifyContent={"space-around"}>
        <Box height={"auto"} width={["90%"]}>
          {cart.map((el, i) => {
            return (
              <Cards key={i} data={el} index={i} />
            );
          })}
        </Box>
        <Box
        bgcolor={"rgb(245, 245, 245)"}
          height={"300px"}
          width={["100%", "100%", "40%"]}
          mr={["0","0","5%"]}
          sx={{
                  "&:hover": {
                    boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
,
                    borderRadius:"50px"
                  },
                }}
        >
          <br />
          <Typography variant="h5" fontWeight={700}>
            Proceed to Checkout
          </Typography>
          <Box
            textAlign={"left"}
            display={"flex"}
            justifyContent={"space-around"}
            p={"10px 0"}
          >
            <Box>
              <Typography variant="h6" fontSize={"16px"}>
                Subtotal:
              </Typography>
              <Typography variant="h6" fontSize={"16px"}>
                Shipping + Tax:
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                Total:{" "}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontSize={"16px"}>
                {toIndianNumberingSystem(subTotal)}
              </Typography>
              <Typography variant="h6" fontSize={"16px"}>
                +{toIndianNumberingSystem(40)}
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {toIndianNumberingSystem(total)}
              </Typography>
            </Box>
          </Box>
          <br />
          <br />
          <br />
          <Button variant="contained">
            <CheckOutlined />
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
