import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { NavLink } from "react-router-dom";


const OutwardTab = () => {
  return (
    <>
      <Tabs sx={{ color: "#01175C" }}>
      <NavLink to= "/outwardMultipleUpload">
        <Tab label="Multiple Entries" />
      </NavLink>
        <Tab label="Multiple Beneficiary Acct. Validation" />
      </Tabs>
    </>
  );
};

export default OutwardTab;
