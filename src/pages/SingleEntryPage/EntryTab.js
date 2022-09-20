import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { NavLink } from "react-router-dom";

const EntryTab = () => {
  return (
    <>
      <Tabs indicatorColor="primary" textColor="primary" sx= {{color: "#01175C"}}>
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
