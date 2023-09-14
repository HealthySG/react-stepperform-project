import { useState } from "react";
import React from 'react'
import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
import { CustomButton, Field, Form, Input } from "../FirstPage";
import { Typography } from "@mui/material";
import './style.module.scss'
function FirstPage(props) {
  const [state, setState] = useAppState();
 
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");

  const saveData = (data) => {
    setState({ ...state, ...data });
    props.handleNext();
  };
  return (
    <React.Fragment>
    <Typography variant="h4">Personal Info</Typography>
    <Typography variant="h6">Please Provide your name,email address, and phone number </Typography>
    <Form onSubmit={handleSubmit(saveData)}>
      {/* <fieldset> */}
        <Field label="*Name">
          <Input
            {...register("firstName", { required: "First name is required" })}
            id="first-name"
            className="custom-input" 
          />
        </Field>
        {errors.firstName && <p className="errorMsg">{errors.firstName.message}</p>}
        <Field label="*Email">
          <Input
            {...register("email", {  pattern: {value : /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message : 'Please enter valid email address.'}, required: "Email is required" })}
            type="email"
            id="email"
            className="custom-input" 
          />
        </Field>
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        <Field label="*Phone Number">
          <Input
            {...register("phonenumber", {  pattern: {value:/^\+?\d{1,2}\d{10}$/, message : 'Please enter valid phone number.'},maxLength:'14', required: "Phone Number is required" })}
            type="text"
            id="phone-number"
          />
        </Field>
        {errors.phonenumber && <p className="errorMsg">{errors.phonenumber.message}</p>}
        <CustomButton color="primary.main">Next Step {">"}</CustomButton>
    </Form>
    </React.Fragment>
  )
}

export default FirstPage