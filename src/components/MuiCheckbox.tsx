import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({ acceptTnC });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
    </Box>
  );
};
