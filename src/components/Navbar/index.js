import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
// import { useNavToggle, useAuth } from '../../hooks';
import { SvgIcon } from "@mui/material";
import { BiLogOut } from "react-icons/bi";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

// import SearchField from '../SearchFIeld';

const Navbar = ({ swipeable }) => {
  //   const { toggleSidebar } = useNavToggle();
  //   const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row" justifyContent="flex-end" mb={0.5}></Stack>
      <AppBar
        position="scrollable"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer - 1,
          bgcolor: "#FFFFFF",
          borderRadius: 1,
          marginTop: "50px"
        }}
      >
        {/* <Toolbar
          variant="regular"
          sx={{
            minHeight: "100px",
            justifyContent: "space-between",
            bgcolor: "#FFFFFF",
            border: "1px solid blue",

          }}
        > */}
          <Box sx={{ display: "flex", width: "100%" }}>
            {swipeable && (
              <IconButton
                // onClick={toggleSidebar}
                size={"small"}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                {/* <GiHamburgerMenu /> */}
              </IconButton>
            )}
            <Stack
              direction="row"
              alignItems="center"
              flexGrow={1}
              spacing={3}
            >
              <Button
                startIcon={<HomeIcon color="secondary" />}
                color="secondary"
                sx={{ fontSize: "1rem", color: "#033486" }}
                component={Link}
                to="/"
              >
                Home
              </Button>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccountCircle color="secondary" />
                <Typography
                  color="#033486"
                  fontSize="1rem"
                  fontWeight={500}
                  ml={0.5}
                >
                  Current User:
                </Typography>
                <Typography color="#033486" fontSize="0.85rem" ml={0.5}>
                  Abdul Jelili Shekoni
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BadgeIcon color="secondary" />
                <Typography
                  color="#033486"
                  fontSize="1rem"
                  fontWeight={500}
                  ml={0.5}
                >
                  Staff ID:
                </Typography>
                <Typography color="#033486" fontSize="0.85rem" ml={0.5}>
                  ACSBNK029
                </Typography>
              </Box>
            </Stack>

            {/* <SearchField /> */}
            {/* <NavLink to="/"> */}
            <Button
              startIcon={<SvgIcon color="secondary" component={BiLogOut} />}
              color="darkPrimary"
              sx={{ fontSize: "1rem" }}
              onClick={() => navigate("/")}
            >
              <Typography color={"#033486"}>Logout</Typography>
            </Button>
            {/* </NavLink> */}
          </Box>
        {/* </Toolbar> */}
      </AppBar>
    </Box>
  );
};
export default Navbar;
