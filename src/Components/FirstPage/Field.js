import React from "react";
import { Typography } from "@mui/material";
import styles from './style.module.scss'
export const Field = ({ children, label, error }) => {
  return (
    <div>
        <h4 className={styles.h4}>{label}</h4>
       {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};