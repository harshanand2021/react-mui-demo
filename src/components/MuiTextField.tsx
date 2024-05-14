import { InputAdornment, Stack, TextField } from "@mui/material";

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">£</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
