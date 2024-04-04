import {
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel, Box,
} from "@mui/material";

interface DropDownProps {
  items: string[];
  handleChange: (event: SelectChangeEvent) => string;
  label: string;
  returnData: string;
}

export function DropDown(props: DropDownProps) {

  const handleSelectChange = (event: SelectChangeEvent) => {
    props.handleChange(event);
  };

  return (
    <Box sx={{
      textAlign: "left", // Center text within the label
      width: "100%", // Ensure full width
    }}>
      <FormControl fullWidth sx={{ width: 220 }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            mx: "12px",
            my: "7px",
          }}
        >
          {props.label}
        </InputLabel>
        <Select
          onChange={handleSelectChange}
          value={props.returnData}
          defaultValue={""}
          labelId="demo-simple-select-label"
          label={props.label}
          sx={{
            mx: "12px",
            my: "7px",
          }}
        >
          {props.items.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
          ;
        </Select>
      </FormControl>
    </Box>
  );
}
