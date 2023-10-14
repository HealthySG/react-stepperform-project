import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";
import FourthPage from "../FourthPage/FourthPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import { CustomButton } from "../FirstPage";
import background from "../../assets/background-image.jpg"; 

const steps = ["STEP 1", "STEP 2", "STEP 3", "STEP 4"];
const stepsDescription = ["YOUR INFO", "SELECT-PLANS", "ADD-ONES", "SUMMARY"];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [toggle, setToggle] = React.useState(false);
  const[currentIndex,setCurrentIndex]=React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    console.warn(step)
    if(step<activeStep)
    {
      setActiveStep(step);
    }
  };
  

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box  sx={{ margin:'20px',display: "flex", border: "2px", borderStyle: "dotted", borderColor: "black" }}>
      <div style={{ 
      height: "90vh", width: "300px",
       backgroundImage:  `url(${background})`, 
       backgroundSize: "cover",
       backgroundPosition: "center",borderRadius:'15px',margin:'8px'}}> 
        <span>
          <Stepper sx={{margin:'30px'}} nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton color="inherit"  onClick={handleStep(index)}>
                  <div style={{fontSize:'15px'}}>{label}
                  <div style={{fontSize:'1.1rem',color:'white'}}>{stepsDescription[index]}</div>
                  </div>
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </span>
      </div>
      <div style={{  marginLeft: "100px", flex: 1 }}>
        <div style={{ flexDirection: "column" }}>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div style={{margin:'70px',justifyContent:'center',flexDirection:'row',alignContent:'center'}}>
                {activeStep === 0 && <FirstPage handleNext={handleNext} />}
                {activeStep === 1 && <SecondPage activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} />}
                {activeStep === 2 && <ThirdPage  activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} />}
                {activeStep === 3 && <FourthPage activeStep={activeStep} handleBack={handleBack} setActiveStep={setActiveStep} handleNext={handleNext} />}
              </div>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                {/* <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Go Back
                </Button> */}
                {/*<Box sx={{ flex: "1 1 auto" }} />
                 <Button  sx={{ mr: 1 }}>
                  Next
                </Button> */}
                {/* <CustomButton onClick={handleNext}>Next {">"}</CustomButton> */}
                {/* {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))} */}
              </Box>
            </React.Fragment>
          )}
        </div>
      </div>
    </Box>
  );
}
