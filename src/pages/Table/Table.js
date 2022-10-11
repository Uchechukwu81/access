import { registerStyles } from "@emotion/utils";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const Table = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const history = useHistory();
  // const navigate = useNavigate();
  useEffect(() => {
    register();
  }, []);
  async function register() {
    let item = { name, username, email, phone };
    console.warn(item);
    let result = await fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "GET",
    });
    result = await result.json();
    console.log(result);
    // navigate("/add");
    setName(result.name)
    setUsername(result.username)
    setEmail(result.email)
    setPhone(result.phone)
  }

  return (
    <Box>
      Name: {name} <br />
      Username: {username} <br />
      Phone: {phone} <br />
      Email: {email} <br />
    </Box>
  );
};

export default Table;
