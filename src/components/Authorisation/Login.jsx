import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";

export default function Login(){
    let {isAuth,setAuth, cart, setUserName} = useContext(AuthContext)
  let Email = useRef(null);
  let Pass = useRef("");

  let [users,setUsers] = useState([])

  useEffect(()=>{
    (async ()=>{
        let temp=await axios.get("https://sedate-laced-chestnut.glitch.me/users")
        setUsers(temp.data)
    })()
  },[])
    function Login(){
       let email= Email.current.childNodes[0].value;
       let pass = Pass.current.childNodes[0].value;
        users.forEach(element => {
            if(email == element.email && pass == element.password){
                setAuth(true)
                setUserName(element.name)
            }
        });
    }
  if(isAuth) return <Navigate to="/" />
  return (
    <Box m={"2% 0"} height={"100vh"}>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        width={["80%","40%"]}
        m={"auto"}
        p={"15px"}
        borderRadius={"10px"}
      >
       
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
          <label>Password: </label>
          <Box width={"70%"}>
            <Input type="password" ref={Pass} sx={{ width: "100%" }} placeholder="Password" />
          </Box>
        </Box>
       
        <br />
        <Button variant="contained" onClick={Login}>
          Login
        </Button>
      </Box>
    </Box>
  );
}