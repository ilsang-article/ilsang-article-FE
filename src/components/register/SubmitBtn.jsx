import React from "react";
import classes from "./SubmitBtn.module.css";
export default function SubmitBtn({ form, name }) {
  return (
    <button className={classes.btn} type="submit" form={form}>
      {name}
    </button>
  );
}
