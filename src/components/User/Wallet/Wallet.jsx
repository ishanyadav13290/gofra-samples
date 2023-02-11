import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/Contexts";

export default function Wallet() {
  let { isAuth, walletBalance } = useContext(AuthContext);
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <Box minHeight={"100vh"}>
      <Box m={"1% 0"}>
        <Typography
          variant="h4"
          fontWeight={700}
        >{`Your Wallet Balance is ${walletBalance.toLocaleString(
          "en-IN"
        )}`}</Typography>
      </Box>
    </Box>
  );
}
