import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

// import { useNavigate } from "react-router-dom";
import Axios from "axios";
import {
  Grid,
  TextField,
  // Box,
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
// import axios from "axios";

const TestPage = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const history = useHistory();
  // const navigate = useNavigate();
  useEffect(() => {
    Axios.get("http://localhost:5000/getRegister").then((response) => {
      setListOfUsers(response.data);
    });
    // if (localStorage.getItem("user-info")) {
    //   // navigate("/add");
    // }
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:5000/createRegister", {
      name,
      username,
      email,
      phone,
    }).then((response) => {
      setListOfUsers([...listOfUsers, { name, username, email, phone }]);
      alert("User Created");
    });
  };
  // async function register() {
  //   let item = { name, username, email, phone };
  //   console.warn(item);
  //   let result = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Accept: "application/x-www-form-urlencoded",
  //     },
  //     body: JSON.stringify(item),
  //   });
  //   result = await result.json();
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   // navigate("/add");
  // }
  // const [data, setData] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  // });
  // const [posts, setPosts] = useState({});
  //   const [title, setTitle] = useState();
  //   const [body, setBody] = useState();

  // const addPosts = async (title, body) => {
  //   await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: data.name,
  //       username: data.username,
  //       email: data.email,
  //       phone: data.phone,
  //       userId: Math.random().toString(36).slice(2),
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // setPosts((posts) => [data, ...posts]);
  //       setData({
  //         ...data,
  //         title: "",
  //         body: "",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };

  // console.log(data, "data...");
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // console.log(users, "users are here");

  return (
    <div className="App">
    <div className="usersDisplay">
      {listOfUsers.map((user) => {
        return (
          <div>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              </tbody>
            </Table>
            {/* <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.username}</h1> */}
          </div>
        );
      })}
    </div>
    <Card
      sx={{
        width: "30vw",
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
            onChange={(e) => setName(e.target.value)}
            // value={data.name}
            // onChange={handleChange}
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
            onChange={(e) => setUsername(e.target.value)}

            // value={data.username}
            // onChange={handleChange}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <label>Email</label>
          <br />
          <TextField
            hiddenLabel
            // id="filled-hidden-label-small"
            // defaultValue="Small"
            name="email"
            variant="filled"
            size="small"
            type="email"
            onChange={(e) => setEmail(e.target.value)}

            // value={data.email}
            // onChange={handleChange}
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
            name="phone"
            size="small"
            type="number"
            onChange={(e) => setPhone(e.target.value)}

            // value={data.phone}
            // onChange={handleChange}
          />{" "}
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          onClick={createUser}
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
          // onClick={addPosts}
        >
          Register
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default TestPage;
