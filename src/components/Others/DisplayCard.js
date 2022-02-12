import React from "react";
import classes from "./DisplayCard.module.css";

const DisplayCard = (props) => {
  const hashtagsList = props.technology.map((tech) => (
    <p key={tech + "_"} className={classes.hashtags}>
      {tech}
    </p>
  ));
  return (
    <li className={classes["display-card"]}>
      <div className={classes.about}>
        <a href={props.projectLink} className={classes.link}>
          <h3 className={classes.title}>{props.title}</h3>
        </a>
        <div className={classes.hashtag}>{hashtagsList}</div>
        <p className={classes.description}>{props.description}</p>
        <a href={props.projectLink} className={classes.link}>
          Learn more &rarr;
        </a>
      </div>
      <div className={classes.image}>
        <a href={props.projectLink}>
          <img
            className={classes.img}
            src={props.imgURL}
            alt="Project Demo pic"
          />
        </a>
      </div>
    </li>
  );
};

export default DisplayCard;
