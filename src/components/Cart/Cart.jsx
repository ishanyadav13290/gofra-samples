import { CheckOutlined } from "@mui/icons-material";
import {
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import Cards from "./Cards";

export default function Cart() {
  let { cart } = useContext(AuthContext);
  let { isAuth } = useContext(AuthContext);
  let arr = [1, 2, 3];
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <Box height={"100%"}>
      <Typography variant="h4" fontWeight={"700"}>Shopping Cart</Typography>
      <Box display={["block", "block", "flex"]} justifyContent={"space-around"}>
        <Box height={"auto"} width={["90%"]}>
          {arr.map((el, i) => {
            return (
              <Cards key={i} />
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
                Rs 26,997
              </Typography>
              <Typography variant="h6" fontSize={"16px"}>
                Rs +3
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                Rs 27,000
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
