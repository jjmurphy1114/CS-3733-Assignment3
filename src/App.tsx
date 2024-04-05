import {Grid, Typography, SelectChangeEvent, Box} from "@mui/material";
import {LeftAlignedTextbox} from "./LeftAlignedTextbox.tsx";
import {ChangeEvent, useState} from "react";
import RadioButtonsGroup from "./assets/RadioButtonsGroup.tsx";
import {DropDown} from "./DropDown.tsx";
import {formSubmission} from "./FormSubmission.ts";
import {SubmitButton} from "./SubmitButton.tsx";
import hospitalImage from "./assets/hospitalImage.jpeg";

function App() {

  const [form, setFormResponses] = useState<formSubmission>({
      name: "",
      location: "",
      priority: "",
      service: "",
      frequency: "",
      status: "",
  });

  function handleNameInput(e: ChangeEvent<HTMLInputElement>){
      setFormResponses({...form, name: e.target.value});
  }

    function handleLocationInput(e: ChangeEvent<HTMLInputElement>){
        setFormResponses({...form, location: e.target.value});
    }

    function handlePriorityInput(e: ChangeEvent<HTMLInputElement>){
        setFormResponses({...form, priority: e.target.value});
    }

    function handleServiceInput(e: SelectChangeEvent){
        setFormResponses({...form, service: e.target.value});
        return e.target.value;
    }

    function handleStatusInput(e: ChangeEvent<HTMLInputElement>){
      setFormResponses({...form, status: e.target.value});
    }

    function handleFrequencyInput(e: SelectChangeEvent){
        setFormResponses({...form, frequency: e.target.value});
        return e.target.value;
    }

    function clear(){
      setFormResponses({
          name: "",
          location: "",
          priority: "",
          service: "",
          frequency: "",
          status: "",
      });
  }


  return (
     <Box
         sx={{
             width: "100vw",
             height: "auto",
             display: "flex",
             alignItems: "center", // Center vertically
             justifyContent: "center", // Center horizontally
             backgroundImage: `url(${hospitalImage})`,
             backgroundSize: "cover",
             overflowX: "hidden"
         }}
         >
         <Grid
         container
         direction={"row"}
         rowSpacing={1}
         columnSpacing={3}
         justifyContent={"space-between"}
         boxShadow={4}
         sx={{
             backgroundColor: "white",
             width: "100%",
             maxWidth: "80vw",
             height: "auto",
         }}
     >
             <Grid item
               xs={12}
               sx={{
                   backgroundColor: "#003A96",
               }}>
                 <Typography color={"white"}
                             align={"center"}
                             fontStyle={"Open Sans"}
                             fontSize={40}
                 >
                     Sanitation Service Form
                 </Typography>
             </Grid>
             <Grid item xs={6}>
                <Typography color={"black"}>
                    Name:
                </Typography>
                 <LeftAlignedTextbox label={"Name"}
                                     value={form.name}
                                     onChange={handleNameInput}/>
             </Grid>
             <Grid item xs={6}>
                <Typography color={"black"}>
                    Location:
                </Typography>
                 <LeftAlignedTextbox label={"Location"}
                                     value={form.location}
                                     onChange={handleLocationInput}/>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Priority of Sanitation:
                 </Typography>
                 <RadioButtonsGroup label={"Priority"}
                                    options={["Low", "Medium", "High", "Emergency"]}
                                    returnData={form.priority}
                                    handleChange={handlePriorityInput}/>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Service Needed:
                 </Typography>
                 <DropDown items={["Routine Cleaning", "Deep Cleaning", "Waste Management", "Disinfection", "Dry Sanitation", "Biohazard Cleanup"]}
                           handleChange={handleServiceInput}
                           label={"Service"}
                           returnData={form.service}/>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Frequency Needed:
                 </Typography>
                 <DropDown items={["Once", "Daily", "Weekly", "Bi-Weekly", "Monthly"]}
                           handleChange={handleFrequencyInput}
                           label={"Frequency"}
                           returnData={form.frequency}/>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Status of the request (Radio buttons):
                 </Typography>
                 <RadioButtonsGroup label={"Status"}
                                    options={["Unassigned", "Assigned", "InProgress", "Closed"]}
                                    returnData={form.status}
                                    handleChange={handleStatusInput}/>
             </Grid>
             <Grid item xs={12} sx={{ display: "flex", my: 2, justifyContent: "center" }}>
                 <SubmitButton input={form} text={"SUBMIT"} clear={clear}/>
             </Grid>
     </Grid>
     </Box>
  );
}

export default App;
