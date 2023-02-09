import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import SearchField from "./SearchField";

export let styles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1%",
  fontWeight: 700,
};
export let styles2 = { textDecoration: "none" };
export default function Navbar() {
  return (
    <Box width={["100%","90%"]} m={"auto"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
      <Box
        sx={styles}
        fontSize={["13px", "15px", "20px"]}
        zIndex={"10"}
        position={["static", "static", "static", "static"]}
      >
        <Box width={["100%","90%"]}>
        <Box display={"flex"} >
        <Hamburger />
        <NavLink to={"/"}>
          <Typography fontWeight={700} variant="h4">
            Gofra
          </Typography>
        </NavLink>
        <Nav1 />
        </Box>
        
        {/* Nav 2 display changing according to screen size */}
        <Box>
        <Box display={["none","none","block","block"]}>
        <Nav2 />
        </Box>
        <Box display={["block","block","none","none"]}>
          <SearchField />
        </Box>
        </Box>

        </Box>
      </Box>
    </Box>
  );
}
