import React from 'react';
import { TextField, Stack, Typography } from '@mui/material';

const ControlledTextField = ({
  formik,
  sx,
  InputProps,
  label,
  name,
  type,
  inFieldLabel,
  labelProps,
  ...props
}) => {
  const handleChangeFiles = (e) => {
    const { name, files } = e.target;
    formik.handleChange({
      target: {
        name,
        value: files[0]
      }
    });
  };

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        minWidth: 210,
        flexDirection: 'column',
        ...sx
      }}
      spacing={0.5}
    >
      {!inFieldLabel && (
        <Typography {...labelProps} fontWeight={500} fontSize="0.85rem">
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        id={name}
        name={name}
        variant="outlined"
        size="small"
        label={inFieldLabel && label}
        type={type || 'text'}
        value={type === 'file' ? undefined : formik.values[name]}
        onChange={type === 'file' ? handleChangeFiles : formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        InputProps={InputProps}
        helperText={(formik.touched[name] && formik.errors[name]) || ' '}
        {...props}
      />
    </Stack>
  );
};

export default ControlledTextField;
