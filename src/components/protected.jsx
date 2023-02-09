import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context/Contexts";

export default function Protected(){

    let {isAuth} = useContext(AuthContext)
   return isAuth? <Box>
        If You're able to see this, you're authorised!
    </Box> : <Navigate to="/login" />
}