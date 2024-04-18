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
import { useDispatch, useSelector } from "react-redux";
import { getParameters, setParameters } from "../../store/params";

export const SideBar = ({ drawerWidth }) => {
  const dispatch = useDispatch();
  const { params, error } = useSelector((state) => state.params);

  const [accountType, setAccountType] = useState("");
  const [contentType, setContentType] = useState("");
  const [audience, setAudience] = useState("");
  const [model, setModel] = useState("");

  const onClickGenerate = () => {
    const params = {
      accountType,
      contentType,
      audience,
      model,
    };

    dispatch(setParameters(params));
  };

  useEffect(() => {
    dispatch(getParameters());
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
        case "M":
          setModel(value);
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
    setModel("");
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

        <Typography
          component="div"
          sx={{
            pt: 3,
            pl: 3,
            pb: 1,
          }}
        >
          Please choose the options below to customize the content you want to
          generate
        </Typography>

        <Divider />

        <List>
          {params.map((e) => (
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
                      : model
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

        <Typography
          variant="h7"
          noWrap
          component="div"
          sx={{ pl: 3, color: "red" }}
        >
          {error}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onClickGenerate}
            sx={{ width: "100%" }}
          >
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
