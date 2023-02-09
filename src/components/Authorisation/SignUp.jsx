import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";

export default function SignUp() {
  let Name = useRef(null);
  let Address1 = useRef(null);
  let Address2 = useRef(null);
  let Email = useRef(null);
  let Pan = useRef(null);
  let Gst = useRef(null);

  function SignUp() {
    console.log(Name.current.childNodes[0].value)
  }
  return (
    <Box m={"2% 0"}>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        width={"40%"}
        m={"auto"}
        p={"15px"}
        borderRadius={"10px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>Full Name: </label>
          <Box width={"70%"}>
            <Input
              ref={Name}
              sx={{ width: "100%" }}
              placeholder="Write Your Name"
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <label width={"50%"}>Address 1: </label>
          </Box>
          <Box width={"70%"}>
            <Input ref={Address1
            } sx={{ width: "100%" }} placeholder="Address Line 1" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <label width={"50%"}>Address 2: </label>
          </Box>
          <Box width={"70%"}>
            <Input ref={Address2} sx={{ width: "100%" }} placeholder="Address Line 2" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>Email: </label>
          <Box width={"70%"}>
            <Input ref={Email} sx={{ width: "100%" }} placeholder="Email ID" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>PAN: </label>
          <Box width={"70%"}>
            <Input ref={Pan} sx={{ width: "100%" }} placeholder="PAN" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <label>GST: </label>
          <Box width={"70%"}>
            <Input ref={Gst} sx={{ width: "100%" }} placeholder="GST" />
          </Box>
        </Box>
        <br />
        <Button variant="contained" onClick={SignUp}>SignUp</Button>
      </Box>
    </Box>
  );
}
