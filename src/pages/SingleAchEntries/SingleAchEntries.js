import React from "react";
import { Grid, Button, TextField, Box, MenuItem } from "@mui/material";
import ViewPort from "../../components/ViewPort/ViewPort";
// import { NavLink } from "react-router-dom";

const SingleAchEntries = () => {
  return (
    <ViewPort>
      <Box>
        <Grid container spacing={2}>
          <Grid item container sx= {{color: "#01175c"}} >
            <h5>Single Entries</h5>
          </Grid>
          <Grid item container sx= {{color: "#01175c"}}>
            <h4>SINGLE ENTRY MODULE </h4>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Bank</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Developer</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
                <MenuItem value="Farmer">Chemist</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Instrument Type</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
                <MenuItem value="Developer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Fixed Charges</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Purpose Code</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Branch</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Amount</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Transaction Details</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Category Purpose</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary's Account Number</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary's Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Date</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Transaction Type</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Depositor's Account Number</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Depositor's Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>End-to-end ID</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Local Instrument</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Charges</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Vat</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid xs={12} sm={12} md={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                alignItems: "center",
                textAlign: "center",
                padding: ".7rem",
                background: "#FF8102",
                color: "white",
                width: "180px",
                borderRadius: "30px",
                marginBottom: "1rem",
                marginTop: "25px",
                "&:hover": {
                  bgcolor: "#FF8102",
                  color: "white",
                },
              }}
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ViewPort>
  );
};

export default SingleAchEntries;
