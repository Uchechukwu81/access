import React from "react";
import { Box, Grid } from "@mui/material";
import Panel from "../../components/DashboardComponents/Panel";
import Notifications from "../../components/DashboardComponents/Notifications";
import Faq from "../../components/DashboardComponents/Faq";
// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
import ViewPort from "../../components/ViewPort/ViewPort";

const Home = () => {
  return (
    <ViewPort>
      <Box
        maxHeight="100%"
        height="100%"
        width="100%"
        px="1.5rem"
        py="1.75rem"
        boxSizing="border-box"
        // sx= {{border:"1px solid red"}}
      >
        <Grid container spacing={2.5} height="100%">
          <Grid container item xs={12} md={5} wrap="nowrap" alignItems="center">
            <Panel height={290}>{/* <Carousel/> */}</Panel>
          </Grid>

          <Grid container item xs={12} md={7} wrap="nowrap" alignItems="center">
            <Panel title={"Notifications"} height={290}>
              <Notifications />
            </Panel>
          </Grid>

          <Grid container item xs={12} md={4} wrap="nowrap" alignItems="center">
            <Panel title={"Featured"} height={400}>
              {/* <Carousel /> */}
            </Panel>
          </Grid>

          <Grid container item xs={12} md={8} wrap="nowrap" alignItems="center">
            <Panel title={"Frequently Asked Questions"} height={400}>
              <Faq />
            </Panel>
          </Grid>
        </Grid>
      </Box>
    </ViewPort>
  );
};

export default Home;
