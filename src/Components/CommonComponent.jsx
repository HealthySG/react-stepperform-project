import React from "react";
import { useAppState } from "../state";
import { Form } from "./FirstPage";
import { useForm } from "react-hook-form";
import { CustomButton } from "./FirstPage";
import { Typography } from "@mui/material";
import { useAccordionButton } from "react-bootstrap";
function CommonComponent(props) {
  const { title, subtitle, children } = props;
  const [state, setState] = useAppState();
  console.warn("State in ", state);
  const saveData = (data) => {
    console.log("data in ", data);
    setState({ ...state, ...data });
    // console.warn("dfbdb");
    props.handleNext();
  };
  const { handleSubmit } = useForm({ defaultValues: state, mode: "onSubmit" });
  
  return (
    <React.Fragment>
      <h1 style={{ fontSize: "40px" }}>{title}</h1>
      <Typography
        style={{
          marginTop: "-20px",
          marginBottom: "10px",
          color: "#CECFD5",
          fontSize: "15px",
          fontFamily: "sans-serif",
        }}
        variant="h6"
      >
        {subtitle}
      </Typography>
      <div>
          {children}
      </div>
    </React.Fragment>
  );
}

export default CommonComponent;
