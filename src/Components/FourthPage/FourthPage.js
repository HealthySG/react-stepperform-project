import React, { useEffect, useState } from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { Form, CustomButton } from "../FirstPage";
import { Card, CardContent, Divider, Typography, Link } from "@mui/material";
import { Button, Container } from "@mui/material";
import Summary from "./Summary";
import CommonComponent from "../CommonComponent";

function FourthPage(props) {
  const { activeStep, handleBack, setActiveStep } = props;
  const [state] = useAppState();
  const [price, setprice] = useState(0);
  const { handleSubmit } = useForm({ defaultValues: state });
  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };
  const handlechange = (e) => {
    e.preventDefault();
    props.setActiveStep(1);
  };
  return (
    <React.Fragment>
      <CommonComponent
        title="Finishing up"
        subtitle="Double check everything looks OK before confirming."
      >
        <Summary
          activeStep={activeStep}
          handleBack={handleBack}
          setActiveStep={setActiveStep}
        />
      </CommonComponent>
    </React.Fragment>
  );
}

export default FourthPage;
