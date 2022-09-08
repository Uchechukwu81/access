import React from 'react';
import { Box } from '@mui/material';

const EntryPanel = ({ children, value, index, ...props }) => {
  return (
    <Box role="tabpanel" hidden={value !== index} {...props}>
      {value === index && <Box sx={{ px: 1.5, py: 1 }}>{children}</Box>}
    </Box>
  );
};

export default EntryPanel;
