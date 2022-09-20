// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import { FormLabel } from "@material-ui/core";
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value)
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl sx={{width: "15vw"}}>
//       <FormLabel sx= {{border: "1px solid red"}}>Age</FormLabel>
//         <InputLabel id="demo-simple-select-label"></InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Developer</MenuItem>
//           <MenuItem value={20}>Chemist</MenuItem>
//           <MenuItem value={30}>Teacher</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

import React from "react";
import {
  Grid,
  Button,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";
import EntryTab from "./EntryTab";
import ViewPort from "../../components/ViewPort/ViewPort";
// import { NavLink } from "react-router-dom";

const SingleEntryPage = () => {
  return (
    <ViewPort>
      <Box>
        <Grid container spacing={2}>
          <Grid item container>
            <EntryTab />
          </Grid>
          <Grid item container>
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
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
              <br />
              <TextField select fullWidth>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </TextField>
            </Grid>
           
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <label>Beneficiary Name</label>
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
          {/* <Grid item xs={12} sm={12} md={12}>
        <MUIDataTable title={'Table'} data={data} columns={columns} options={options} />
      </Grid> */}
          {/* <Grid xs={12} sm={12} md={12} sx={{ textAlign: 'right', marginTop: '2rem' }}>
        <Button
          variant="contained"
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            padding: '.7rem',
            background: '#FF8102',
            color: 'white',
            width: '150px',
            borderRadius: '30px',
            marginBottom: '1rem',

            '&:hover': {
              bgcolor: '#FF8102',
              color: 'white'
            }
          }}
          onClick={formik.handleSubmit}
        >
          SUBMIT
        </Button>
      </Grid> */}
        </Grid>
      </Box>
    </ViewPort>
  );
};

export default SingleEntryPage;
