import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useHeadlineHook } from "../hook/headline_hook";

export const SideBar = ({ drawerWidth }) => {
  const [accountType, setAccountType] = useState("");
  const [contentType, setContentType] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState("");
  const [dropDownList, setDropDowns] = useState([]);
  const { setHeadline } = useHeadlineHook();

  useEffect(() => {
    const fetchAllDropDowns = async () => {
      const response = await fetch("http://127.0.0.1:8000/");
      const fetchedDropDowns = await response.json();
      setDropDowns(fetchedDropDowns);
    };

    const interval = setInterval(fetchAllDropDowns, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChange = (event) => {
    const { type, value } = event;
    if (type) {
      switch (type) {
        case "AT":
          setAccountType(value);
          break;
        case "CT":
          setContentType(value);
          break;
        case "A":
          setAudience(value);
          break;
        case "T":
          setTone(value);
          break;
        default:
          break;
      }
    }
  };

  const clearFields = () => {
    setAccountType("");
    setContentType("");
    setAudience("");
    setTone("");
  };

  const updateHeadline = () => {
    setHeadline(
      `Account Type: ${accountType}\nContent Type: ${contentType}\nAudience: ${audience}\nTone: ${tone}`
    );
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 1 } }}
    >
      <Drawer
        variant="permanent"
        open
        anchor="right"
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Start Creating with AI
          </Typography>
        </Toolbar>
        <Typography
          variant="h7"
          noWrap
          component="div"
          sx={{
            fontWeight: "bold",
            pl: 3,
          }}
        >
          Generate Content
        </Typography>

        <Divider />

        <List>
          {dropDownList.map((e) => (
            <Box sx={{ m: 3 }} key={e.type}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{e.name}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={
                    e.type === "AT"
                      ? accountType
                      : e.type === "CT"
                      ? contentType
                      : e.type === "A"
                      ? audience
                      : tone
                  }
                  label={e.name}
                  onChange={(event) =>
                    handleChange({ type: e.type, value: event.target.value })
                  }
                >
                  {e.options.map((option) => (
                    <MenuItem key={option.id} value={option.desc}>
                      {option.desc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={updateHeadline}>
            Generate
          </Button>
        </Box>
        <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
          <Button variant="text" color="secondary" onClick={clearFields}>
            Clear all
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};
