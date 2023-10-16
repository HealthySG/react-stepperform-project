import React from "react";
import { useAppState } from "../state";
import { Form } from "./FirstPage";
import { useForm } from "react-hook-form";
import { CustomButton } from "./FirstPage";
import { Typography } from "@mui/material";

// CommonComponent used in every page for rendering titile and subtitle.
function CommonComponent(props) {
  const { title, subtitle, children } = props;
  return (
    <React.Fragment>
      <h1 style={{ fontSize: "40px" }}>{title}</h1>
      <Typography
        style={{
          marginTop: "-20px",
          marginBottom: "10px",
          color: "#CECFD5",
          fontSize: "15px",
          fontFamily: "sans-serif",
        }}
        variant="h6"
      >
        {subtitle}
      </Typography>
      <div>{children}</div>
    </React.Fragment>
  );
}

export default CommonComponent;
