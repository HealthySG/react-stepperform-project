import React, { useEffect, useState } from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { Form, CustomButton } from "../FirstPage";
import { Card, CardContent, Divider, Typography, Link } from "@mui/material";
import { Button, Container } from "@mui/material";
import styles from './fourthPage.module.css'
function Summary(props) {
    const { activeStep, handleBack } = props;
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
    var finalprice = 0;
    useEffect(() => {
      // Calculate the total monthly price based on the selected plan
      let totalMonthlyPrice = 0;
      let totalyearlyPrice = 0;
      if (state.checked === false) {
        switch (state.plans) {
          case "arcade":
            totalMonthlyPrice = 9;
            break;
          case "Advanced":
            totalMonthlyPrice = 12;
            break;
          case "pro":
            totalMonthlyPrice = 15;
            break;
          default:
            totalMonthlyPrice = 0;
        }
      }
      if (state.checked === true) {
        switch (state.plans) {
          case "arcade":
            totalyearlyPrice = 90;
            break;
          case "Advanced":
            totalyearlyPrice = 120;
            break;
          case "pro":
            totalyearlyPrice = 150;
            break;
          default:
            totalyearlyPrice = 0;
        }
      }
      let addonsTotal = 0;
      if (state.addons) {
        for (const addon of state.addons) {
          switch (addon) {
            case "onlineservices":
              addonsTotal += state.checked ? 10 : 1;
              break;
            case "largerstorage":
              addonsTotal += state.checked ? 20 : 2;
              break;
            case "customizableprofile":
              addonsTotal += state.checked ? 20 : 2;
              break;
            default:
              addonsTotal += 0;
          }
        }
      }
      finalprice = totalMonthlyPrice + addonsTotal + totalyearlyPrice;
      setprice(finalprice);
    }, [state.plans, state.addons, state.checked]);
    function RowWithDivider({ label, price, isFirstRow, isYearly }) {
      const displayPrice = isYearly ? `$${price}/yr` : `$${price}/mo`;
      return (
        <React.Fragment>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flexDirection: "row" }}>
              <div className={isFirstRow? styles.label : styles.labelForotherRows}>{label}</div> 
              {isFirstRow && (
                <Link onClick={handlechange} sx={{color:'grey',marginLeft:'2px'}} href="#">
                  Change
                </Link>
              )}
            </div>
            <div className={isFirstRow? styles.label : styles.labelForotherRows}>
              {displayPrice}
              </div>
          </div>
          {isFirstRow?<Divider />:null}
        </React.Fragment>
      );
    }
    function getPlansMonthly(plans) {
      switch (plans) {
        case "arcade":
          return (
            <RowWithDivider label="Arcade (Monthly)" price="9" isFirstRow={true} />
          );
        case "Advanced":
          return (
            <RowWithDivider label="Advanced (Monthly)" price="12" isFirstRow={true} />
          );
        case "pro":
          return <RowWithDivider label="Pro (Monthly)" price="15" isFirstRow={true} />;
      }
    }
    function getPlansYearly(plans) {
      console.log("plans in getplan function", plans);
      switch (plans) {
        case "arcade":
          return (
            <RowWithDivider
              label="Arcade (Yearly)"
              price="90"
              isFirstRow={true}
              isYearly={true}
            />
          );
        // break;
        case "Advanced":
          return (
            <RowWithDivider
              label="Advanced (Yearly)"
              price="120"
              isFirstRow={true}
              isYearly={true}
            />
          );
        // break;
        case "pro":
          return (
            <RowWithDivider
              label="Pro (Yearly)"
              price="150"
              isFirstRow={true}
              isYearly={true}
            />
          );
      }
    }
    function getaddonesMonthly(item, index) {
      // for (const addon of state.addons) {
  
      switch (item) {
        case "onlineservices":
          return state.checked ? (
            <RowWithDivider label="Online Service" price="10" isYearly={true} />
          ) : (
            <RowWithDivider label="Online Service" price="1" />
          );
  
        case "largerstorage":
          return state.checked ? (
            <RowWithDivider label="Larger Storage" price="20" isYearly={true} />
          ) : (
            <RowWithDivider label="Larger Storage" price="2" />
          );
  
        case "customizableprofile":
          return state.checked ? (
            <RowWithDivider
              label="Customizable Profile"
              price="20"
              isYearly={true}
            />
          ) : (
            <RowWithDivider label="Larger Storage" price="2" />
          );
  
        // }
      }
    }
  return (
    <React.Fragment>
    <Form onSubmit={handleSubmit(submitData)}>
      <Container style={{ marginLeft:'-28px',width: "70%" }}>
        <CardContent sx={{ bgcolor: "#F7F9FC",borderRadius:'10px'}}>
          {state.checked === false && getPlansMonthly(state.plans)}
          {state.checked === true && getPlansYearly(state.plans)}
          {Object.keys(state.addons).map((key) => {
            const addon = state.addons[key];
            return getaddonesMonthly(addon, key);
          })}
        </CardContent>
        {state.checked === false && (
          <div style={{margin:'0px 8px 0px 13px'}}>
          <RowWithDivider label="Total (Per month)" price={price} />
          </div>
        )}
        {state.checked === true && (
           <div style={{margin:'0px 8px 0px 13px'}}>
          <RowWithDivider
            label="Total (Per Yearly)"
            price={price}
            isYearly={true}
          />
          </div>
        )}
      </Container>
      <div style={{marginTop:'10%'}}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 ,bottom:'-100px',marginRight:'270px',color:'gray'}}
          // variant="contained"
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            alert("Your Order has confirmed !");
          }}
          sx={{bottom:'-100px'}}
        >
          Confirm
        </Button>
      </div>
    </Form>
  </React.Fragment>
  )
}

export default Summary