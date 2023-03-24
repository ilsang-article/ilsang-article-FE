import { useState } from "react";
import Main from "../components/main/Main";
import Search from "../components/main/Search";

const MainPage = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search setSearch={setSearch} />
      <Main search={search} />
    </>
  );
};

export default MainPage;
