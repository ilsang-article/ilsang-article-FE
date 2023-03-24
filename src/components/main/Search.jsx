import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { serchApi } from "../../api/setchAPI";
import classes from "./Search.module.css";

export default function Search({ setSearch }) {
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return <input onChange={onSearchChange} className={classes.search} />;
}
