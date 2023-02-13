import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import NewArrivalCard from "./NewArrivalCard";

export default function NewComings() {
  let { allSellerItems, setAllSellerItems } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      let temp = await axios.get(
        "https://sedate-laced-chestnut.glitch.me/allItems"
      );
      setAllSellerItems(temp.data);
      //   console.log(temp.data)
    })();
  }, []);
  return (
    <Box height={"100vh"} mt={["30%", "20%", "10%"]}>
      {allSellerItems.map((el, i) => {
        return (
          <NavLink key={i} to={`/newarrivals/${el.id}/`} style={{textDecoration:"none",color:"black"}} >
          <NewArrivalCard el={el} />
          </NavLink>
        );
      })}
    </Box>
  );
}
