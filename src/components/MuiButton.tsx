import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";


export const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({
    formats,
  });
  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />} disableRipple>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton>
            {/* <SendIcon aria-label="send" color="success" size="small" /> */}
          </IconButton>
        </Stack>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button onClick={() => alert("Left Click")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text fomratting"
          value={formats}
          onChange={handleFormatChange}
          size='small'
          color='success'
          orientation='vertical'
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underlined">
            <FormatUnderlinedIcon></FormatUnderlinedIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
