
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toIndianNumberingSystem from "../Features/RupeeConversion";

export default function SingleProductPage() {
  let { id } = useParams();
  let [data, setData] = useState({});
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
            <Typography variant="h3">Price: {toIndianNumberingSystem(data.price)}</Typography>
          </Box>
        </Box>
      </Box>
      <Box m={"5%"}>
      <Button mt={"5px"} variant="contained"> Add to Cart</Button>
      </Box>

    </Box>
  );
}
