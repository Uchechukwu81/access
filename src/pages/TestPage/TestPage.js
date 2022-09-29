import React, { useState, useEffect } from "react";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField, Box, Stack } from "@mui/material";
import axios from "axios";

const TestPage = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
  });
  const [posts, setPosts] = useState({});
  //   const [title, setTitle] = useState();
  //   const [body, setBody] = useState();

  const addPosts = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // setPosts((posts) => [data, ...posts]);
        setData({
          ...data,
          title: "",
          body: "",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]:value})
  }

  console.log(data, "data...")
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setUsers(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  console.log(users, "users are here")



  return (
    <Card
      sx={{
        width: "30vw",
        // border: "1px solid red",
        background: "aqua",
        m: "auto",
        // height: "50vh",
      }}
    >
      <CardContent>
        <Typography
          fontSize={20}
          color="primary"
          align="center"
          fontWeight={600}
          mb={1}
        >
          LOGIN
        </Typography>

        <Typography fontSize={16} align="center">
          Please enter your login details below.
        </Typography>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <label>Name</label>
          <br />
          <TextField
            hiddenLabel
            // id="filled-hidden-label-small"
            // defaultValue="
            variant="filled"
            name="name"
            size="small"
            value={data.name}
            onChange={handleChange}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <label>Username</label>
          <br />
          <TextField
            hiddenLabel
            // id="filled-hidden-label-small"
            // defaultValue="Small"
            variant="filled"
            name="username"
            size="small"
            value={data.username}
            onChange={handleChange}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <label>Email</label>
          <br />
          <TextField
            hiddenLabel
            // id="filled-hidden-label-small"
            // defaultValue="Small"
            variant="filled"
            size="small"
            type="email"
          />{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <label>Phone</label>
          <br />
          <TextField
            hiddenLabel
            // id="filled-hidden-label-small"
            // defaultValue="Small"
            variant="filled"
            size="small"
            type="number"
          />{" "}
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            border: "1px solid black",
            mx: "auto",
            align: "center",
            px: "30px",
            "&:hover": {
              background: "black",
              color: "white",
            },
          }}
          type="submit"
          onClick={addPosts}
        >
          Register
        </Button>
      </CardActions>
    </Card>
  );
};

export default TestPage;
