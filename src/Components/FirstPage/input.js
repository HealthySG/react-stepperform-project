import React from "react";
import './style.module.scss'
export const Input = React.forwardRef((props, ref) => {
  const inputStyle = {
    width: '40%', // Set the width to 100%
    height : '40px',
    borderRadius: '5px',
    fontSize: 'medium',
    paddingLeft:'10px'
  };
  return <input size="large" ref={ref} className="form-control" style={inputStyle} {...props} />;
});
