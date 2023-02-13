import { Cancel } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Cards() {
  const [Qty, setQty] = useState(1);

  const handleChange = (event) => {
    setQty(event.target.value);
  };
  return (
    <Box
      display={["block", "flex"]}
      p={["10px 20px", "10px 40px"]}
      justifyContent={"space-evenly"}
      width={["90%", "60%"]}
      m={["10% 0", "auto"]}
      sx={{
        "&:hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          borderRadius: "50px",
        },
      }}
    >
      <Box width={"100px"} m={"auto"}>
        <img
          src="https://rukminim1.flixcart.com/image/224/224/l4n2oi80/cases-covers/back-cover/i/j/d/slide-camera-cover-heavy-duty-military-grade-protection-phone-original-imagfhsewf5kxfzq.jpeg?q=90"
          width={"100%"}
          alt="cover"
        />
      </Box>
      <Box padding={"0 10px"} width={["95%", "70%"]} textAlign={"left"}>
        <p>Moshking Back Cover for POCO X4 Pro 5G, 360° Protection</p>
        <p>Rs {(8999).toLocaleString("en-IN")}</p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel>Qty: </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={Qty}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem value={1}>
              <em>1</em>
            </MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <Divider />
        <br />
        <Button variant={"contained"}>
          {" "}
          <Cancel /> Remove
        </Button>
      </Box>
    </Box>
  );
}
