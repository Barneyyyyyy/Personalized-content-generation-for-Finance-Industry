import { Box, Toolbar } from "@mui/material";
import { SideBar } from "../components";

const drawerWidth = 300;

export const ContentLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
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
