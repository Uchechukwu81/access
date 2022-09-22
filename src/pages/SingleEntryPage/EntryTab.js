import React from 'react';
import { Tabs, Tab, Grid } from '@mui/material';
import { NavLink } from "react-router-dom";

const EntryTab = () => {
  return (
    <>
      <Tabs >
        <NavLink to= "/singleEntryPage">
        <Tab label="Single Entries" />
        </NavLink>
        <NavLink to= "/multipleEntriesPage">
        <Tab label="Multiple Entries" />
        </NavLink>
      </Tabs>
    </>
  );
};

export default EntryTab;
