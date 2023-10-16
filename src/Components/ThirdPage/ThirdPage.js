import React from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { CustomButton, Input } from "../FirstPage";
import { Card, CardContent, Typography, Button } from "@mui/material";
import CommonComponent from "../CommonComponent";
import PickAddOnes from "./PickAddOnes";
import styles from "./thirdPage.module.css";

function ThirdPage(props) {
  const { activeStep, handleBack, handleNext } = props;
  const [state, setState] = useAppState();
  const {
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const saveData = (data) => {
    setState({ ...state, ...data });
    props.handleNext();
  };
  // Third Page has 2 components common component and PickAdOnes component.
  return (
    <React.Fragment>
      <CommonComponent
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience"
      >
        <PickAddOnes
          handleNext={handleNext}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      </CommonComponent>
    </React.Fragment>
  );
}

export default ThirdPage;
