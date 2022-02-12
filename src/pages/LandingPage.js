import React, { Fragment } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import LandingPageComp from "../components/LandingPageComponent/LandingPageComp";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const { text } = useTypewriter({
    words: [
      "Full Stack Web Developer.",
      "Front-End Enthusiastic.",
      "Technical Writer.",
      "Traveller.",
    ],
    loop: false,
  });
  return (
    <Fragment>
      <h1 className={classes.headerName}>Annam Sai Manohar 👋🏻</h1>
      <div className={classes.typewriter}>
        I am
        <span className={classes.textType}>{" " + text}</span>
        <Cursor />
      </div>
      <LandingPageComp />
    </Fragment>
  );
};

export default LandingPage;
