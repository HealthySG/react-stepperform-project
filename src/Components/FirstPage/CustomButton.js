import { forwardRef } from "react";
import './style.module.scss';

export const CustomButton = forwardRef(
  ({ children, variant, ...props }, ref) => {
    return (
      <button style={{
        float: "right",
        marginRight: "20%",
        backgroundColor: "blue", // Background color
        color: "white", // Text color
        padding: "8px 16px", // Medium size
        border: "none",
        borderRadius: "4px",
      }}
      {...props}>
        {children}
      </button>
    );
  }
);