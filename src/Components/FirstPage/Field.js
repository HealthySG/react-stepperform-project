import React from "react";
import { Typography } from "@mui/material";
import './style.module.scss'
export const Field = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div className="col-sm-12 mb-3">
      <div htmlFor={id} className="form-label" style={{ fontWeight: "bold" }}>
        <Typography variant="h6">{label}</Typography>
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
