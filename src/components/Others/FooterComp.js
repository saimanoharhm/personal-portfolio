import React, { Fragment } from "react";
import {
  FaWhatsappSquare,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import classes from "./FooterComp.module.css";

const FooterComp = () => {
  const fontStyles = { color: "#000", fontSize: "2.5rem" };
  return (
    <Fragment>
      <footer className={classes.icons}>
        <a href="https://api.whatsapp.com/send?phone=+91 9100135071">
          <FaWhatsappSquare style={fontStyles} />
        </a>
        <a href="https://twitter.com/saimanohar_hm">
          <FaTwitter style={fontStyles} />
        </a>
        <a href="https://www.linkedin.com/in/annamsai/">
          <FaLinkedin style={fontStyles} />
        </a>
        <a href="https://github.com/saimanoharhm">
          <FaGithub style={fontStyles} />
        </a>
        <a href="mailto:saimanohar987@gmail.com">
          <FaEnvelope style={fontStyles} />
        </a>
      </footer>
      <div>
        <p className={classes.copyright}>
          Copyright &copy;
          <span className="year">{new Date().getFullYear()}</span> by Annam Sai
          Manohar. All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};

export default FooterComp;
