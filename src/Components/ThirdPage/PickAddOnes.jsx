import React from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { CustomButton, Field, Form, Input } from "../FirstPage";
import { Container, FormControlLabel, Switch, Box } from "@mui/material";
import { Card, CardContent, Typography, Button } from "@mui/material";
import styles from "./thirdPage.module.css";
import { red } from "@mui/material/colors";

function PickAddOnes(props) {
  const { activeStep, handleBack } = props;
  const [state, setState] = useAppState();
  const [checked, setchecked] = useAppState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const saveData = (data) => {
    setState({ ...state, ...data });
    props.handleNext();
  };
  const handleChange = (event) => {
    setchecked(event.target.checked);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(saveData)}>
        <input
          {...register("addons", {
            required: " Please choose at least one option",
          })}
          type="checkbox"
          value="onlineservices"
          id="onlineservices"
          className={styles.multiselect}
        />
        <label className={styles.label} for="onlineservices">
          <div className={styles.info}>
            <h6 className={styles.h6}>Online Service</h6>
            <div className={styles.subheading}>Access to multiplayer game</div>
          </div>
          <div style={{ fontSize: "12px", color: "blue", marginRight: "7px" }}>
            <h2>
              <span>+$</span>
              {state.checked ? "10" : "1"}
              <span>{state.checked ? "/Yr" : "/mo"}</span>
            </h2>
          </div>
        </label>
        <input
          {...register("addons", {
            required: " Please choose at least one option",
          })}
          type="checkbox"
          value="largerstorage"
          id="largerstorage"
          className={styles.multiselect}
        />
        <label className={styles.label} for="largerstorage">
          <div className={styles.info}>
            <h6 className={styles.h6}>Larger Storage</h6>
            <div className={styles.subheading}>Extra 1TB of cloud service</div>
          </div>
          <div style={{ fontSize: "12px", color: "blue", marginRight: "7px" }}>
            <h2>
              <span>+$</span>
              {state.checked ? "20" : "2"}
              <span>{state.checked ? "/Yr" : "/mo"}</span>
            </h2>
          </div>
        </label>
        <input
          {...register("addons", {
            required: " Please choose at least one option",
          })}
          type="checkbox"
          value="customizableprofile"
          id="customizableprofile"
          className={styles.multiselect}
        />
        <label className={styles.label} for="customizableprofile">
          <div className={styles.info}>
            <h6 className={styles.h6}>Customizable Profile</h6>
            <div className={styles.subheading}>
              Custom Theme on your Profile
            </div>
          </div>
          <div style={{ fontSize: "12px", color: "blue", marginRight: "7px" }}>
            <h2>
              <span>+$</span>
              {state.checked ? "20" : "2"}
              <span>{state.checked ? "/Yr" : "/mo"}</span>
            </h2>
          </div>
        </label>

        {errors.addons && <p className="errorMsg">{errors.addons.message}</p>}
        <div>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{bottom: '-102px',
            marginRight: '270px',
            color: 'gray',
            height: '40px',
          }}
          >
            Go Back
          </Button>
          <CustomButton variant="contained">Next Step</CustomButton>
        </div>
      </form>
    </React.Fragment>
  );
}

export default PickAddOnes;
