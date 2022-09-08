import React from 'react';
import { Tabs, Tab } from '@mui/material';
const EntryTab = ({ value, handleChange }) => {
  return (
    <>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
        <Tab label="Single Entries" />
        <Tab label="Multiple Entries" />
      </Tabs>
    </>
  );
};

export default EntryTab;
