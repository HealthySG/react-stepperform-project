// import { useState } from "react";
// import React from 'react'
// import { useForm } from "react-hook-form";
// import { useAppState } from "../../state";
// import { CustomButton, Field, Form, Input } from "../FirstPage";
// import { Typography } from "@mui/material";
// import PersonalInfo from "./FirstPage/PersonalInfo";

// function CommonForm(props) {
//     const [state, setState] = useAppState();
//     const saveData = (data) => {
//         setState({ ...state, ...data });
//         props.handleNext();
//       };
//     const {
//       handleSubmit,
//       register,
//       watch,
//       formState: { errors }
//     } = useForm({ defaultValues: state, mode: "onSubmit" });
//     const watchPassword = watch("password");
//   return (
//     <React.Fragment>
//       <Form style={{border:'1px solid black',color:'lightgrey'}} onSubmit={handleSubmit(saveData)}>
//         {PersonalInfo}
//       </Form>
//     </React.Fragment>
//   )
// }

// export default CommonForm