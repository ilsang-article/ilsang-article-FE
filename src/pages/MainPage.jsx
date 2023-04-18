import { useState } from "react";
import Main from "../components/main/Main";
import Search from "../components/main/Search";
import ScrollToTop from "../components/scroll/ScrollToTop";

const MainPage = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search setSearch={setSearch} />
      <Main search={search} />
      <ScrollToTop />
    </>
  );
};

export default MainPage;
