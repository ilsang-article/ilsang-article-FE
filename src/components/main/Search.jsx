import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Search.module.css";

export default function Search({ setSearch }) {
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={classes.container}>
      <input
        placeholder="Search"
        onChange={onSearchChange}
        className={classes.search}
      />
      <AiOutlineSearch />
    </div>
  );
}
