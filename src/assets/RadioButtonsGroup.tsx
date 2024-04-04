import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {ChangeEvent} from "react";

interface ButtonProps {
    label: string,
    options: string[],
    returnData: string,
    handleChange: (event: ChangeEvent<HTMLInputElement> ) => string;
}

export default function RadioButtonsGroup(props: ButtonProps) {

    const handleButtonChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.handleChange(event);
    };

    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleButtonChange}
                value={props.returnData}
            >
                {props.options.map((item) => (
                    <FormControlLabel value={item} control={<Radio/>} label={item}>{item}</FormControlLabel>
                ))}
                ;
            </RadioGroup>
        </FormControl>
    );
}