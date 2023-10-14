import React from "react";
import { Typography } from "@mui/material";
import './style.module.scss'
export const Field = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div>
      <div htmlFor={id} className="form-label" style={{ fontWeight: "bold" }}>
        <Typography sx={{fontFamily:'sans-serif',fontSize:'15px',color:'black',fontWeight:'bold'}}variant="h6">{label}</Typography>
      </div>
      {React.cloneElement(children, {
        className: "custom-input-class", // Add your custom class here
      })}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};

// Get id prop from a child element
export const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};
