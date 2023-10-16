import React from "react";
import './style.module.scss'
export const Input = React.forwardRef((props, ref) => {
  const inputStyle = {
    width: '65%',
    height : '40px',
    borderRadius: '5px',
    fontSize: 'medium',
    paddingLeft:'10px',
    borderColor:'grey',
  };
  return <input size="large" ref={ref} style={inputStyle} {...props} />;
});
