import React from 'react';
import { Box, Typography } from '@mui/material';

const PanelHeader = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          height: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          px: 4,
          py: 1
        }}
      >
        <Typography fontSize={17} fontWeight={600}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default PanelHeader;
