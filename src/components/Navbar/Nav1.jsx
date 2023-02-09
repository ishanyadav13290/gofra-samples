import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styles} from "./Navbar";
import SearchField from "./SearchField";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

let styles2={
    display:"block"
}

export default function Nav1(){
    return <Box sx={styles} width={"100%"} display={["none", "none", "flex"]} m={"0 1%"} >
    <Box display={["none","none","flex"]} width={"60%"}>
    <SearchField />

    </Box>
    
    <Box width={"auto"} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} >
    <Box m={"0 10px"}>
    <ShoppingCartIcon />
        <NavLink style={styles2} to={"/cart"} >Cart</NavLink>
    </Box>
    <Box>
    <PersonIcon />
    <Box display={"flex"}>
    <NavLink style={styles2} to={"/login"}>
      Login
    </NavLink>
    |
    <NavLink style={styles2} to={"/signup"}>
      Sign Up
    </NavLink>
    </Box>
    </Box>
    </Box>
  </Box>
}