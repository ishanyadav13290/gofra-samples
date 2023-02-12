import { AttachFile } from "@mui/icons-material";
import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Context/Contexts";

export default function Admin() {
  let { userName } = useContext(AuthContext);
  let imgInput = useRef(null);
  let prodName = useRef(null);
  let prodDesc = useRef(null);
  let prodPrice = useRef(0);
  let sellerAddress = useRef(null);
  let [Img, setImg] = useState("https://i.stack.imgur.com/mwFzF.png");

  function imageSelect() {
    imgInput.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  async function ListItem() {
    let name = prodName.current.childNodes[0].value;
    let description = prodDesc.current.value;
    let address = sellerAddress.current.childNodes[0].value;
    let price = Number(prodPrice.current.childNodes[0].value);

    let obj = {
      name,
      description,
      address,
      price,
      Img,
    };

    await axios.post("https://sedate-laced-chestnut.glitch.me/sellers", obj);
    prodName.current.childNodes[0].value = "";
    prodDesc.current.value = "";
    sellerAddress.current.childNodes[0].value = "";
    prodPrice.current.childNodes[0].value = "";
    setImg("https://i.stack.imgur.com/mwFzF.png");
  }
  return (
    <Box height={"100vh"} mt={["30%", "20%", "10%"]}>
      <Typography variant="h6">{`Let's List up your services ${userName}`}</Typography>
      <Box display={["block", "flex"]} justifyContent={"center"}>
        <Box>
          <Box height={"200px"} width={"200px"} m={"auto"}>
            <img
              src={Img}
              alt="Product"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Box
            overflow={"hidden"}
            width={"100%"}
            position={"relative"}
            height={"30px"}
          >
            <input
              onChange={handleFileChange}
              ref={imgInput}
              style={{ position: "absolute" }}
              type={"file"}
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              onClick={imageSelect}
              bgcolor={"white"}
              position={"absolute"}
              height={"100%"}
              sx={{ cursor: "pointer" }}
              fontWeight={700}
              width={"100%"}
              zIndex={1}
            >
              Attach Image
              <AttachFile />
            </Box>
          </Box>
        </Box>
        <Box m={"0 10px"} width={["95%", "60%"]}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <label>Name of the Product: </label>
            <Box width={"70%"}>
              <Input
                ref={prodName}
                type="text"
                sx={{ width: "100%" }}
                placeholder="Name your Product"
              />
            </Box>
          </Box>
          <br />
          <Box display={"flex"} justifyContent={"space-between"}>
            <label>Item Description: </label>
            <Box width={"70%"} height={"100px"}>
              <textarea
                ref={prodDesc}
                type="text"
                style={{ width: "99%", height: "90%", border: "none" }}
                placeholder="Describe your product in details"
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <label>Seller's Address: </label>
            <Box width={"70%"}>
              <Input
                ref={sellerAddress}
                type="text"
                sx={{ width: "100%" }}
                placeholder="Seller's Address"
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <label>Price (Rupees): </label>
            <Box width={"70%"}>
              <Input
                ref={prodPrice}
                type="number"
                sx={{ width: "100%" }}
                placeholder="Price (Rupees)"
              />
            </Box>
          </Box>
          <br />
          <Button onClick={ListItem} variant={"contained"}>
            List
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
