import Footer from "./footer/Footer";
import Header from "./header/Header";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={classes.contents}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
