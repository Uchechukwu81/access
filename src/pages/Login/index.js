// import { useState } from 'react';
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

const Logo = styled("img")({
  maxWidth: "175px",
  // height: '37px'
});

const Login = () => {
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
        <Stack spacing={2} height="fit-content" width="100%" direction="row" sx= {{justifyContent: "space-between"}}>
          <Box mt={8} sx={{ width: "40%" }}>
            <Typography color="#043486" variant="h3" fontWeight={700}>
              Clearing Solution
            </Typography>
            <Typography color="#043486">
              Powered by Instiq Co-operation 2022.
            </Typography>
          </Box>
          <Box width="fit-content" height={"fit-content"} sx={{ width: "50%", justifyContent: "start" }}>
            <Paper
              sx={{
                
                width: "60%",
                height: "60vh",
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
                    label="Email/Username"
                    name="userName"
                    type="text"
                    sx={{ m: 0 }}
                    labelProps={{
                      fontSize: 14
                    }}
                  />

                  <TextField
                    label="Password"
                    name="password"
                    type={'password'}
                    sx={{ m: 0 }}
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
                      )
                    }}
                    labelProps={{
                      fontSize: 14
                    }}
                  />

                  <Link
                    underline="hover"
                    color="primary"
                    fontSize={13}
                    // component={RouterLink}
                    to="/login"
                    mb={4}
                  >
                    Forgot Password ?
                  </Link>

                  <Button variant="contained" type="submit" color="secondary" size="large" mt={2}>
                    Login
                  </Button>
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
