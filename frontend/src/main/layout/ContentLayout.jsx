import { Box, Toolbar } from "@mui/material";
import { SideBar } from "../components";
import backgroundImage from "../../assets/blue_background.jpg";

const drawerWidth = 350;

export const ContentLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        {children}
      </Box>
      <SideBar drawerWidth={drawerWidth} />
    </Box>
  );
};
