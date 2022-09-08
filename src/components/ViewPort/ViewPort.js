import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
// import { NavToggleProvider } from '../../context/NavToggleContext';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Viewport = ({ children, swipeable, noContainer, title }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ display: "flex", flexGrow: "1", height: "100vh" }}>
      <Sidebar swipeable={swipeable || isMediumScreen} />

      {!noContainer ? (
        <Box display="flex" flexDirection="column" width="100%">
            <Navbar swipeable={swipeable || isMediumScreen} />

          <Container
            sx={{
              paddingTop: 4,
              paddingBottom: 3,
              overflow: "auto",
              bgcolor: "#F8E4D1"
            }}
            //   maxWidth="lg"
            //   height="100%"
          >

            {children}
          </Container>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1}}>{children}</Box>
      )}
    </Box>
  );
};

export default Viewport;


