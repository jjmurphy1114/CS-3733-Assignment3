import {Grid, Box, Typography} from "@mui/material";
import {LeftAlignedTextbox} from "./LeftAlignedTextbox.tsx";
import {ChangeEvent, useState} from "react";
import RadioButtonsGroup from "./assets/RadioButtonsGroup.tsx";

interface formSubmission {
    name: string,
    location: string,
    priority: string,
    field1: string,
    field2: string,
    status: string,
}

function App() {

  const [form, setFormResponses] = useState<formSubmission>({
      name: "",
      location: "",
      priority: "",
      field1: "",
      field2: "",
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

  return (
     <Box
         width="100vw"
         height="100vh"
         display="flex"
         alignItems="center" // Center vertically
         justifyContent="center" // Center horizontally
         backgroundColor={"white"}
         >
         <Grid
         container
         direction={"row"}
         rowSpacing={2}
         columnSpacing={3}
         justifyContent={"space-between"}
         boxShadow={4}
         width={"80vw"}
         sx={{
             backgroundColor: "white",
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
                 <LeftAlignedTextbox label={"Name"} value={form.name} onChange={handleNameInput}/>
             </Grid>
             <Grid item xs={6}>
                <Typography color={"black"}>
                    Location:
                </Typography>
                 <LeftAlignedTextbox label={"Location"} value={form.location} onChange={handleLocationInput}/>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Priority of Request:
                 </Typography>
                 <RadioButtonsGroup label={"Priority"} options={["Low", "Medium", "High", "Emergency"]} returnData={form.priority} handleChange={handlePriorityInput}/>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Field 1 (dropdown):
                 </Typography>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Field 2 (checkbox?):
                 </Typography>
             </Grid>
             <Grid item xs={6}>
                 <Typography color={"black"}>
                     Status of the request (Radio buttons):
                 </Typography>
                 <RadioButtonsGroup label={"Status"} options={["Unassigned", "Assigned", "InProgress", "Closed"]} returnData={form.priority} handleChange={handlePriorityInput}/>
             </Grid>
             <Grid item xs={12}>
                 <Typography color={"black"} align={"center"}>
                     Submit button
                 </Typography>
             </Grid>
     </Grid>
     </Box>
  )
}

export default App
