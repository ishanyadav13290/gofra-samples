import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";

export default function SingleProductPage() {
  let { id } = useParams();
  let [data, setData] = useState({});
  let {userID,cart,setCart} = useContext(AuthContext)

  function addToCart(newItem) {
    if(userID==undefined) return

    let tempCartItems = [...cart];
    for (let i = 0; i < tempCartItems.length; i++) {
        if (tempCartItems[i].name == newItem.name) {
            tempCartItems[i].qty = tempCartItems[i].qty + 1;
            setCart(tempCartItems);
            axios.patch(`https://sedate-laced-chestnut.glitch.me/users/${userID}`, {
                cart: tempCartItems
            })
            return
        }
    }

    setCart([...tempCartItems, newItem]);
    axios.patch(`https://sedate-laced-chestnut.glitch.me/users/${userID}`, {
        cart: [...tempCartItems, newItem]
    })


  }
  useEffect(() => {
    (async () => {
      let temp = await axios.get(
        `https://sedate-laced-chestnut.glitch.me/allItems/${id}`
      );
      setData(temp.data);
    })();
  }, []);
  return (
    <Box height={"100%"} mt={["30%", "20%", "10%"]}>
      <Box display={["block", "block", "flex"]} justifyContent="space-between">
        <Box
          maxWidth={["200px", "400px", "600px"]}
          m={["auto", "auto", "auto 5% auto 5%"]}
        >
          <img width={"100%"} src={data.Img} alt={data.name} />
        </Box>
        <Box m={["auto", "0 5% auto auto"]} width={"100%"} height={"100%"}>
          <Box width={"90%"}>
            <Typography variant="h4">{data.name}</Typography>
          </Box>
          <Box width={"90%"}>
            <p>{data.description}</p>
          </Box>
          <Box width={"90%"}>
            <Typography variant="h3">
              Price: {toIndianNumberingSystem(data.price)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box m={"5%"}>
        <Button mt={"5px"}
        sx={{backgroundColor:"rgb(246, 126, 34)"}}
          variant="contained"
          onClick={async () => {
            let data1 = {
              Img:data.Img,
              name: data.name.toUpperCase(),
              price: data.price,
              qty: 1,
              id: data.id,
            };
            // setCartLength((prev) => prev + 1)
            // setCartItems([...cartItems, data1]);
            addToCart(
              data1
            );
          }
          }
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}
