// import React from "react";
// import { useAppState } from "../../state";
// import { useForm } from "react-hook-form";
// import { CustomButton, Field, Form, Input } from "../FirstPage";
// import { Container, FormControlLabel, Switch, Box } from "@mui/material";
// import { Card ,CardContent,Typography,Button} from '@mui/material';
// import styles from './thirdPage.module.css'
// import { red } from "@mui/material/colors";


// function PickAddOnes(props) {
//     const { activeStep, handleBack } = props;
//     const [state, setState] = useAppState();
//     const [checked, setchecked] = useAppState(false);
//     const {
//       handleSubmit,
//       register,
//       watch,
//       formState: { errors },
//     } = useForm({ defaultValues: state, mode: "onSubmit" });
//     const saveData = (data) => {
//       setState({ ...state, ...data });
//       props.handleNext();
//     };
//     const handleChange = (event) => {
//       setchecked(event.target.checked);
//       console.log("checked", checked);
//     };
//   return (
//     <React.Fragment>
//     <form onSubmit={handleSubmit(saveData)}>
//          <label className={styles.label} for="onlineservices">
          
//          <input
//                 // {...register('addons', required: "Please choose any one option" }}
//                 {...register("addons", { required: " Please choose at least one option" })}
//                 type="checkbox"
//                 value="onlineservices"
//                 id="onlineservices"
//                 style={{width:'20px',height:'20px',border:'1px solid black'}}
//           />
//                <div className={styles.info}>
//                  <h6 className={styles.h6}>Online Service</h6>
//                  <div className={styles.subheading}>Access to multiplayer game</div>
//                 </div>
//                 <div style={{ fontSize: '12px', color: 'blue' }}>
//               <h2>
//                 <span>$</span>
//                 {state.checked ? '20' : '2'}
//                 <span>{state.checked ? '/Yr' : '/mo'}</span>
//               </h2>
//             </div>
//          </label>
//          <label className={styles.label} for="onlineservices">
          
//           <input
//                  // {...register('addons', required: "Please choose any one option" }}
//                  {...register("addons", { required: " Please choose at least one option" })}
//                  type="checkbox"
//                  value="largerstorage"
//                  id="largerstorage"
//                  style={{width:'20px',height:'20px',border:'1px solid black'}}
//            />
//                 <div className={styles.info}>
//                 <h6 className={styles.h6}>Larger Storage</h6>
//                   <div className={styles.subheading}>Extra 1TB of cloud service</div>
//                   </div>
//                   <div style={{ fontSize: '12px', color: 'blue' }}>
//               <h2>
//                 <span>$</span>
//                 {state.checked ? '20' : '2'}
//                 <span>{state.checked ? '/Yr' : '/mo'}</span>
//               </h2>
//             </div>
//           </label>
//           <label className={styles.label} for="onlineservices">
          
//           <input
//                  // {...register('addons', required: "Please choose any one option" }}
//                  {...register("addons", { required: " Please choose at least one option" })}
//                  type="checkbox"
//                  value="onlineservices"
//                  id="onlineservices"
//                  style={{width:'20px',height:'20px',border:'1px solid black'}}
//            />
//                  <div className={styles.info}>
//                   <h6 className={styles.h6}>Customizable Profile</h6>
//                   <div className={styles.subheading}>Custom Theme on your Profile</div>
//                   </div>
//                   <div style={{ fontSize: '12px', color: 'blue' }}>
//               <h2>
//                 <span>$</span>
//                 {state.checked ? '20' : '2'}
//                 <span>{state.checked ? '/Yr' : '/mo'}</span>
//               </h2>
//             </div>
//           </label>
//           {/* <Card style={{margin:'4px',border:'1px solid blue',width:'50%',height:'5vw',justifyContent:'space-between'}}>         
//           <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <div style={{ marginLeft:'-100px',display: 'flex', alignItems: 'center',flex:1 }}>
              
            

             
//               <div style={{ marginLeft:'-50px' }}>
//                 <h6>Online Service</h6>
//                 <span>Access to MultiPlayer game</span>
//               </div>
//             </div>
//             <div style={{ fontSize: '12px', color: 'blue' }}>
//               <h2>
//                 <span>$</span>
//                 {state.checked ? '10' : '1'}
//                 <span>{state.checked ? '/Yr' : '/mo'}</span>
//               </h2>
//             </div>
//           </CardContent>
//           </Card> */}
       
//           {errors.addons && <p className="errorMsg">{errors.addons.message}</p>}
//           <div>
//           <Button
//                   color="inherit"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   sx={{ mr: 1,marginTop:'3px' }}
//                   variant="contained"
//                 >
//                   Go Back
//                 </Button>
//           <CustomButton variant="contained">Next Step</CustomButton>
//           </div>
//           </form>
//           </React.Fragment>
//   )
// }

// export default PickAddOnes
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
    const handleChangeu = (event) => {
      // Use state to toggle the checked class for the label
      const label = event.target.parentNode; // Get the parent label element
      if (event.target.checked) {
          label.classList.add("checked");
      } else {
          label.classList.remove("checked");
      }
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
                        style={{position:'absolute',marginTop:'30px',marginLeft:'22px',width: "20px", height: "20px"}}
            />
                <label className={styles.label} for="onlineservices">
                 
                    <div className={styles.info}>
                        <h6 className={styles.h6}>Online Service</h6>
                        <div className={styles.subheading}>Access to multiplayer game</div>
                    </div>
                    <div style={{ fontSize: "12px", color: "blue",marginRight:'7px' }}>
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
                        style={{ position:'absolute',marginTop:'30px',marginLeft:'22px',width: "20px", height: "20px", border: "1px solid black" }}
                    />
                <label className={styles.label} for="largerstorage">
              
                    <div className={styles.info}>
                        <h6 className={styles.h6}>Larger Storage</h6>
                        <div className={styles.subheading}>Extra 1TB of cloud service</div>
                    </div>
                    <div style={{ fontSize: "12px", color: "blue",marginRight:'7px'  }}>
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
                        style={{position:'absolute',marginTop:'30px',marginLeft:'22px',width: "20px", height: "20px", border: "1px solid black"  }}
                    />
                <label className={styles.label} for="customizableprofile">
               
                    <div className={styles.info}>
                        <h6 className={styles.h6}>Customizable Profile</h6>
                        <div className={styles.subheading}>Custom Theme on your Profile</div>
                    </div>
                    <div style={{ fontSize: "12px", color: "blue",marginRight:'7px' }}>
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
                        sx={{ mr: 1, bottom: "-100px",marginRight:'270px',color:'gray',height:'40px'}}
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
