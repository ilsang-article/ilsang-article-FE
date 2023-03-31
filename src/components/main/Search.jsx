import React, { useState } from "react";

import classes from "./Search.module.css";

export default function Search({ setSearch }) {
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      placeholder="검색"
      onChange={onSearchChange}
      className={classes.search}
    />
  );
}
