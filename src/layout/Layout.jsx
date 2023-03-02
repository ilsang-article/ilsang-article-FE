import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </div>
  );
};
export default Layout;

const Contents = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
`;
