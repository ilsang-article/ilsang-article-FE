import React from "react";
import classes from "./Input.module.css";
export default function Input({
  onChange,
  placeholder,
  name,
  type,
  value,
  text,
}) {
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
      />

      <span className={classes.text}>{text}</span>
    </div>
  );
}
