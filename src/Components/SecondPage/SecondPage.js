import React, { useState } from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { CustomButton, Field, Form, Input } from "../FirstPage";
import {Card, Container, FormControlLabel,Switch,Box } from "@mui/material";
import { Typography,Button} from "@mui/material";
import CommonComponent from "../CommonComponent";
import styles from './secondPage.module.css';
import SelectPlan from "./SelectPlan";
function SecondPage(props) {
  const{activeStep,handleBack,handleNext}=props
  return (
    <React.Fragment>
        <CommonComponent 
     title="Select your plan"
     subtitle="You have the option of monthly or yearly billing."
    >
      <SelectPlan activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
   
      </CommonComponent>
     
    </React.Fragment>
  );
}

export default SecondPage;
