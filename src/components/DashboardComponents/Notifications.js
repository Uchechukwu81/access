import React from "react";
import { Button, Stack } from "@mui/material";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <Stack>
      <NotificationItem />
      <NotificationItem />
      <Button
        variant="outlined"
        color="secondary"
        // secondary ="hover"
        sx={{
          alignSelf: "flex-start",
          borderRadius: "50px",
          "&:hover": {
            backgroundColor: "#FF8102",
            color: "white",
            transition: ".3s ease-in-out"
          }
          // secondary: "hover",
        }}
      >
        View All
      </Button>
    </Stack>
  );
};

export default Notifications;
