import React from 'react';
import { Link, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

const NotificationItem = () => {
  return (
    <Paper sx={{ px: 1, py: 1.5, mb: 2 }} elevation={3}>
      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize={15} fontWeight={600}>
            Scheduled maintenance this Saturday, 19 Feb 2022
          </Typography>
          <Typography fontSize={14} color="primary">
            {dayjs().format('DD/MM/YYYY')}
          </Typography>
        </Stack>
        <Typography fontSize={14}>
          Please be informed that due to the technical maintenance, you may experience some
          glitches...
          <Link color="secondary" underline="hover">
            Read more
          </Link>
        </Typography>
      </Stack>
    </Paper>
  );
};

export default NotificationItem;
