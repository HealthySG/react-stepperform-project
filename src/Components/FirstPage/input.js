import React from "react";
import './style.module.scss'
export const Input = React.forwardRef((props, ref) => {
  const inputStyle = {
    width: '50%', // Set the width to 100%
    height : '3vh',
    borderRadius: '5px'
  };
  return <input size="large" ref={ref} className="form-control" style={inputStyle} {...props} />;
});
