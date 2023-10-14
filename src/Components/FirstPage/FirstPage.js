import { useState } from "react";
import React from 'react'
import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { CustomButton, Field, Form, Input } from "../FirstPage";
import { Typography } from "@mui/material";
import './style.module.scss'
import CommonComponent from "../CommonComponent";
import PersonalInfo from "./PersonalInfo";
function FirstPage(props) {
  const{handleNext}=props
  return (
    <React.Fragment>
    {/* <Typography variant="h4" style={{fontWeight:'100px'}}>Personal Info</Typography> */}
    <CommonComponent 
     title="Personal Info"
     subtitle="Please provide your name, email address, and phone number."
    >

   <PersonalInfo  handleNext={handleNext}/>
   </CommonComponent>
    </React.Fragment>
  )
}

export default FirstPage