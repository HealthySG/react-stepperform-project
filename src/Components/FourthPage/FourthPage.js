import React, { useEffect, useState } from "react";
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import { Form, CustomButton } from "../FirstPage";
import { Card, CardContent, Divider, Typography, Link } from "@mui/material";
import { Button, Container } from "@mui/material";
import Summary from "./Summary";
import CommonComponent from "../CommonComponent";

function FourthPage(props) {
  const { activeStep, handleBack,setActiveStep } = props;
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
          case "customizable":
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
    const displayPrice = isYearly ? `$${price}/yr` : `$${price}/mon`;
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flexDirection: "row" }}>
            <Typography variant="h6">{label}</Typography>
            {isFirstRow && (
              <Link onClick={handlechange} scolor="primary" href="#">
                Change
              </Link>
            )}
          </div>
          <Typography variant="body2" color="primary">
            {displayPrice}
          </Typography>
        </div>
        <Divider />
      </React.Fragment>
    );
  }
  function getPlansMonthly(plans) {
    console.log("plans in getplan function", plans);
    switch (plans) {
      case "arcade":
        return (
          <RowWithDivider label="Arcade(Monthly)" price="9" isFirstRow={true} />
        );
      case "Advanced":
        return (
          <RowWithDivider label="Advanced" price="12" isFirstRow={true} />
        );
      case "pro":
        return <RowWithDivider label="pro" price="15" isFirstRow={true} />;
    }
  }
  function getPlansYearly(plans) {
    console.log("plans in getplan function", plans);
    switch (plans) {
      case "arcade":
        return (
          <RowWithDivider
            label="Arcade(Yearly)"
            price="90"
            isFirstRow={true}
            isYearly={true}
          />
        );
      // break;
      case "Advanced":
        return (
          <RowWithDivider
            label="Advanced"
            price="120"
            isFirstRow={true}
            isYearly={true}
          />
        );
      // break;
      case "pro":
        return (
          <RowWithDivider
            label="pro"
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

      case "customizable":
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
       <CommonComponent 
     title="Finishing up"
     subtitle="Double check everything looks OK before confirming."
    >
      <Summary activeStep={activeStep} handleBack={handleBack} setActiveStep={setActiveStep}/>
    </CommonComponent>
    </React.Fragment>
  );
}

export default FourthPage;
