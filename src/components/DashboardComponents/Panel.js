import React from 'react';
import { Paper, styled, Stack, Box } from '@mui/material';
import PanelHeader from './PanelHeader';

const BasePanel = styled(Paper)({
  // minHeight: '200px',
  // height: '100%',
  maxHeight: 350,
  height: 350,
  width: '100%',
  background: 'white'
});

const Panel = ({ children, title, height }) => {
  return (
    <BasePanel square sx={{ height, maxHeight: height }}>
      <Stack height="100%">
        <PanelHeader title={title || ''} />
        <Box
          sx={{
            px: 4,
            py: 2,
            flex: 1,
            height: '100%',
            alignItems: 'center',
            boxSizing: 'border-box',
            // maxHeight: '100%',
            overflowY: 'auto'
          }}
        >
          {children}
        </Box>
      </Stack>
    </BasePanel>
  );
};

export default Panel;
