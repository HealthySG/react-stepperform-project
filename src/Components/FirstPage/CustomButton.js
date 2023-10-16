import { forwardRef } from "react";
import './style.module.scss';

export const CustomButton = forwardRef(
  ({ children, variant, ...props }, ref) => {
    return (
      <button style={{
        bottom:'170px',
        height:'40px',
        backgroundColor: "#0E2857", // Background color
        color: "white", // Text color
        padding: "8px 16px", // Medium size
        border: "none",
        borderRadius: "4px",
        position:"fixed",
        cursor:"pointer"
      }}
      {...props}>
        {children}
      </button>
    );
  }
);