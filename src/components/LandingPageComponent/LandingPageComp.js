import React, { Fragment } from "react";
import classes from "./LandingPageComp.module.css";

const LandingPageComp = () => {
  return (
    <Fragment>
      <div className={classes.landingPage}>
        <p>
          Hey! Welcome to my page. I'm Annam Sai Manohar - Full Stack Developer.
          I am a junior year student at Sathyabama Institute of Science and
          Technology, currently undertaking my Bachelor in Computer Science and
          Engineering. My experience revolves around building full-stack
          applications. 😎
        </p>
        <br />
        <p>
          I am also a passionate technical writer and open source contributor. I
          have been writing blogs here. Currently, I am leading the community at
          Hack Club-SIST and I am also a Microsoft Student Learn Ambassdor and
          Angel Hack Ambassdor.📌
        </p>
        <br />
        <p>Happy reading📖</p>
      </div>
    </Fragment>
  );
};

export default LandingPageComp;
