import {formSubmission} from "./FormSubmission.ts";
import { Button } from "@mui/material";

interface ButtonProps {
    text: string;
    input: formSubmission;
    clear: () => void;
    updateSubmissionList: () => void;
}

export function SubmitButton(props: ButtonProps) {

    function handleSubmit() {
        if (props.input.name === "") {
            alert("Please enter your name!");
        } else if (props.input.location === "" ) {
            alert("Please enter your location!");
        } else if (props.input.priority === "") {
            alert("Please select a priority!");
        } else if (props.input.service === "") {
            alert("Please select a service!");
        } else if (props.input.frequency === "") {
            alert("Please enter your field 2!");
        } else if (props.input.status === "") {
            alert("Please select a status!");
        } else {
            console.log(props.input);
            handleListUpdate();
            handleClear();
            alert("Submitted successfully");
        }
    }

    function handleClear() {
        props.clear();
    }

    function handleListUpdate(){
        props.updateSubmissionList();
    }

    return (
        <Button
            variant="contained"
            id={"submitButton"}
            onClick={() => handleSubmit()}
        >
            {props.text}
        </Button>
    );
}