import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Stack,
  styled,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import { AiFillLock } from "react-icons/ai";
import loginBackground from "../../assets/background.png";
import accessLogo from "../../assets/access-logo.png";
import { NavLink } from "react-router-dom";
// import { Route } from "react-router-dom";

const Logo = styled("img")({
  maxWidth: "175px",
  // height: '37px'
});

const Login = () => {
  // const [body, setBody] = useState([]);

  // const fetchPost = () => {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBody(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, [])

  // console.log(body, "This is body response....");
  return (
    <Box
      width="100vw"
      height="100vh"
      sx={{
        backgroundImage: `url(${loginBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
      }}
    >
      <Container sx={{ py: 1, height: "100%" }} maxWidth="xl">
        <Logo src={accessLogo} alt="login background" />
        <Stack
          spacing={2}
          height="fit-content"
          width="100%"
          direction="row"
          sx={{ justifyContent: "space-between" }}
        >
          <Box mt={8} sx={{ width: "40%" }}>
            <Typography color="#043486" variant="h3" fontWeight={700}>
              Clearing Solution
            </Typography>
            <Typography color="#043486">
              Powered by InstiQ Co-operation 2022.
            </Typography>

            {/* {body.map((item, index) => (
              <Box key={index}>
              <Typography sx={{borderBottom:"solid 1px red"}}>{item.id}</Typography>
              </Box>
            ))} */}
          </Box>
          <Box
            width="fit-content"
            height={"fit-content"}
            sx={{ width: "50%", justifyContent: "start" }}
          >
            <Paper
              sx={{
                width: "60%",
                height: "65vh",
                py: 4,
                px: 4,
                mt: 8,
                borderRadius: 4,
              }}
              elevation={10}
            >
              <Stack spacing={1}>
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

                <Stack component="form">
                  <TextField
                    label="Email/Staff ID"
                    name="userName"
                    type="text"
                    sx={{ m: 3 }}
                    labelprops={{
                      fontSize: 14,
                    }}
                  />

                  <TextField
                    label="Password"
                    name="password"
                    type={"password"}
                    sx={{ m: 3 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            // onClick={toggleShowPassword}
                            color="primary"
                            edge="end"
                          >
                            <AiFillLock />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    labelProps={{
                      fontSize: 14,
                    }}
                  />

                  <Link
                    // underline="hover"
                    color="primary"
                    fontSize={13}
                    // component={RouterLink}
                    to="/login"
                    mb={4}
                    ml={3}
                    mt={-3}
                    // sx= {{border: "1px solid blue"}}
                  >
                    Forgot Password ?
                  </Link>
                  <NavLink to="/home">
                    <Button
                      variant="contained"
                      type="submit"
                      color="secondary"
                      size="large"
                      sx={{ width: "100%" }}
                    >
                      Login
                    </Button>
                  </NavLink>
                </Stack>
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
