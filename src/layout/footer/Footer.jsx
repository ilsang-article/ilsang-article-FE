import classes from "./Footer.module.css";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  const onHyperlinkClick = (url) => {
    window.open(`${url}`);
  };
  return (
    <div className={classes.container}>
      <BsGithub
        fontSize={"2rem"}
        onClick={() => onHyperlinkClick("https://github.com/ilsang-article")}
        style={{ cursor: "pointer" }}
      />

      <span className={classes.type}>BE</span>
      <span
        className={classes.name}
        onClick={() => onHyperlinkClick("https://github.com/soojin-dev")}
      >
        한수진
      </span>
      <span
        className={classes.name}
        onClick={() => onHyperlinkClick("https://github.com/ggggraceful")}
      >
        남궁은
      </span>

      <span className={classes.type}>FE</span>
      <span
        className={classes.name}
        onClick={() => onHyperlinkClick("https://github.com/Hwirin-Kim")}
      >
        김휘린
      </span>
      <span
        className={classes.name}
        onClick={() => onHyperlinkClick("https://github.com/hyemin0901")}
      >
        박혜민
      </span>
    </div>
  );
};

export default Footer;
