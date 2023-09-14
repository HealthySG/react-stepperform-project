import React, { useState } from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { CustomButton, Field, Form, Input } from "../FirstPage";
import {Card, Container, FormControlLabel,Switch,Box } from "@mui/material";
import { Typography,Button} from "@mui/material";
import "./card.module.scss";
function SecondPage(props) {
  const{activeStep,handleBack}=props
  const [state, setState] = useAppState();
  const[checked,setchecked]=useAppState(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const saveData = (data) => {
    setState({ ...state, ...data });
    props.handleNext();
  };
  const handleChange=(event)=>{
    setchecked(event.target.checked)
    console.log("checked", checked)
  }
  return (
    <React.Fragment>
        <Typography variant="h4">Select Your Plan</Typography>
        <Typography variant="h6" fontFamily="inherit">You have the Option of Monthly or Yearly Billing</Typography>
      <Form onSubmit={handleSubmit(saveData)}>
        <div style={{display:"flex",flexDirection:'row'}}>
          <Card style={{border:'1px solid green',marginRight:'5px',marginLeft:'5px',width:'12%'}}>
            <input
              {...register("plans")}
              type="radio"
              value="arcade"
              id="arcade"
              checked
            />
           
            <lebal for="card1">
              <h5>Arcade</h5>
              <h2>
                <span>$</span>
                9
                <span>/month</span>
              </h2>
            </lebal>
          </Card>
          <Card style={{border:'1px solid green',marginRight:'5px',marginLeft:'5px',width:'12%'}}>
          <input
              {...register("plans")}
              type="radio"
              value="Advanced"
              id="advanced"
              
            />
            
            <div style={{position:'absoute',margin: '0px'}} for="card1">
              <h5>Advanced</h5>
              <h2>
                <span>$</span>
                12
                <span>/month</span>
              </h2>
            </div>
          </Card>
          <Card style={{border:'1px solid green',marginRight:'5px',marginLeft:'5px',width:'12%'}}>
          <input
              {...register("plans")}
              type="radio"
              value="pro"
              id="pro"
            />
            <div for="card1">
              <h5>PRO</h5>
              <h2>
                <span>$</span>
                15
                <span>/month</span>
              </h2>
            </div>
          </Card>
          </div>
          <Container>
          <Box style={{ bgcolor: 'e1f1f2' }}>
            <b>Monthly</b>
          <FormControlLabel  label="Yearly" control={<Switch {...register("checked")} checked={checked} onChange={handleChange}/>}> </FormControlLabel>
         </Box>
          </Container>
          <div >
          <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="contained"
                >
                  Go Back
                </Button>
          <CustomButton variant="contained">Next Step {">"}</CustomButton>
          </div>
      </Form>
    </React.Fragment>
  );
}

export default SecondPage;
