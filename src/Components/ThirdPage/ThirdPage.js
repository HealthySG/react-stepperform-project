import React from 'react'
import { useAppState } from "../../state";
import { useForm } from "react-hook-form";
import {Form } from "react-bootstrap";
 import { CustomButton, Input } from "../FirstPage";
import { Card ,CardContent,Typography,Button} from '@mui/material';
 

function ThirdPage(props) {
    const{activeStep,handleBack}=props
    const [state, setState] = useAppState();
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors }
      } = useForm({ defaultValues: state, mode: "onSubmit" });
      const saveData = (data) => {
        setState({ ...state, ...data });
        props.handleNext();
      };
  return (
    <React.Fragment>
       <Typography variant="h4">Pick add-ons</Typography>
        <Typography variant="h6" fontFamily="inherit">Add-ons help enhance your gaming experience</Typography>
        <form onSubmit={handleSubmit(saveData)}>
          <Card style={{marginBottom:'2px',border:'1px solid blue',marginLeft:'10%',width:'50%',height:'5vw',justifyContent:'space-between'}}>         
          <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ marginLeft:'-100px',display: 'flex', alignItems: 'center',flex:1 }}>
              <Input
                // {...register('addons', required: "Please choose any one option" }}
                {...register("addons", { required: " Please choose at least one option" })}
                type="checkbox"
                value="onlineservices"
                id="onlineservices"
              />
             
              <div style={{ marginLeft:'-100px' }}>
                <Typography variant="h6">Online Service</Typography>
                <span>Access to MultiPlayer game</span>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'blue' }}>
              <h2>
                <span>$</span>
                {state.checked ? '10' : '1'}
                <span>{state.checked ? '/Yr' : '/mo'}</span>
              </h2>
            </div>
          </CardContent>
          </Card>
          <Card style={{marginBottom:'2px',border:'1px solid blue',marginLeft:'10%',width:'50%',height:'5vw',justifyContent:'space-between'}}>         
          <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ marginLeft:'-100px',display: 'flex', alignItems: 'center',flex:1 }}>
              <Input
                {...register('addons')}
                type="checkbox"
                value="largerstorage"
                id="largerstorage"
              />
              <div style={{ marginLeft:'-100px' }}>
                <Typography variant="h6">Larger Storage</Typography>
                <Typography>Extra 1TB of cloud service</Typography>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'blue' }}>
              <h2>
                <span>$</span>
                {state.checked ? '20' : '2'}
                <span>{state.checked ? '/Yr' : '/mo'}</span>
              </h2>
            </div>
          </CardContent>
          </Card>
          <Card style={{marginBottom:'2px',border:'1px solid blue',marginLeft:'10%',width:'50%',height:'5vw',justifyContent:'space-between'}}>         
          <CardContent style={{ display: 'flex',justifyContent:'space-between'}}>
            <div style={{ display: 'flex',marginLeft:'-100px' ,alignItems: 'center',flex:1 }}>
              <Input
                {...register('addons')}
                type="checkbox"
                value="customizable"
                id="customizable"
              />
              <div style={{marginLeft:'-100px' }} >
                <Typography variant="h6">Customizable Profile</Typography>
                <Typography>Custom Theme on your Profile</Typography>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'blue' }}>
              <h2>
                <span>$</span>
                {state.checked ? '20' : '2'}
                <span>{state.checked ? '/Yr' : '/mo'}</span>
              </h2>
            </div>
          </CardContent>
          </Card>
          {errors.addons && <p className="errorMsg">{errors.addons.message}</p>}
          <div >
          <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="contained"
                >
                  Go Back
                </Button>
          <CustomButton variant="contained">Next Step {">"}</CustomButton>
          </div>
          </form>
    </React.Fragment>
  )
}

export default ThirdPage