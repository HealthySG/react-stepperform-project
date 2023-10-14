import React from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { CustomButton, Field, Form, Input } from "../FirstPage";
import { Card, Container, FormControlLabel, Switch, Box } from "@mui/material";
import { Typography, Button } from "@mui/material";
import styles from './secondPage.module.css'
import background from "../../assets/background-image.jpg"; 
function SelectPlan(props) {
  const { activeStep, handleBack } = props;
  const [state, setState] = useAppState();
  const [checked, setchecked] = useAppState(false);
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
  const handleChange = (event) => {
    setchecked(event.target.checked);
    console.log("checked", checked);
  };
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(saveData)}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{width:'150px',height:'170px',border:'1px solid #E8E7E9',borderRadius:'10px',marginRight:'10px'}}>
            <input
              {...register("plans")}
              type="radio"
              value="arcade"
              id="arcade"
            />
           <label className={styles.label} for="arcade">
           <div
            className={styles.card_img}
          >
            <img style={{left:'-2px',top:'1px',background:'#ED8791',borderRadius:'50%'}} width="35" height="35"src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/external-arcade-technology-and-hardware-smashingstocks-circular-smashing-stocks.png" alt="external-arcade-technology-and-hardware-smashingstocks-circular-smashing-stocks" alt="controller"/>
              <h3 className={styles.h3}>Arcade</h3>
              <h4 className={styles.h4}>
              <span>${checked ? 9 * 10 + '/yr' : '9/mo'}</span>
              </h4>
              </div>
              </label>
              </div>
              <div style={{width:'150px',height:'170px',border:'1px solid #E8E7E9',borderRadius:'10px',marginRight:'10px'}}>
            <input
              {...register("plans")}
              type="radio"
              value="Advanced"
              id="advanced"
            
            />

           <label className={styles.label} for="advanced">
           <div
              className={styles.card_img}
          >
            <img style={{left:'-2px',top:'1px',background:'#ED8791',borderRadius:'50%'}} width="35" height="35" src="https://img.icons8.com/fluency/48/controller.png" alt="controller"/>
              <h3 className={styles.h3}>Advanced</h3>
              <h4 className={styles.h4}>
              <span>${checked ? 12 * 10 + '/yr' : '12/mo'}</span>
              </h4>
              
          </div>
          </label>
          </div>
          
          <div style={{width:'150px',height:'170px',border:'1px solid #E8E7E9',borderRadius:'10px',marginRight:'10px'}}>
            <input {...register("plans")} type="radio" value="pro" id="pro" />
            <label className={styles.label} for="pro">
            <div
             className={styles.card_img}
          >
            <img style={{left:'-2px',top:'1px',background:'#443FF4',borderRadius:'50%'}} width="35" height="35" src="https://img.icons8.com/material-two-tone/24/controller.png" alt="controller"/>
              <h3 className={styles.h3}>Pro</h3>
              <h4 className={styles.h4}>
                <span>${checked ? 15 * 10 + '/yr' : '15/mo'}</span>
              </h4>
             

          </div>
          </label>
          </div>
        </div>
        <Container>
          <Box style={{ width:'75%',margin:'10px',backgroundColor: "#F8F9FE",display:'flex',alignItems: 'center',justifyContent:'center'}}>
            <div className={styles.switchcontentcolor}>Monthly</div>
            <FormControlLabel
              label={<div className={styles.switchcontentcolor}> Yearly</div>}
              control={
                <Switch
                  {...register("checked")}
                  checked={checked}
                  onChange={handleChange}
                />
              }
            >
              {" "}
            </FormControlLabel>
          </Box>
        </Container>
        <div>
        <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1,bottom:'-110px',marginRight:'270px',color:'gray',height:'40px'}}
                >
                  Go Back
         </Button>
        <CustomButton color="primary.main">Next Step</CustomButton>
        </div>
    </Form>
    </React.Fragment>
  );
}

export default SelectPlan;
