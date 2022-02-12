import React from "react";
import DisplayCard from "./DisplayCard";
import classes from "./ProjectsComp.module.css";
import chatBox from "../../assets/chatbox-chatting.png";
import foodOrder from "../../assets/food-order-app.png";
import movieList from "../../assets/movie-list-app.png";
import expenseTracker from "../../assets/expense-tracker.png";

const projects = [
  {
    id: "1",
    title: "Food Order Application",
    imgURL: foodOrder,
    technology: ["#react", "#redux", "#firebase"],
    projectLink: "https://github.com/saimanoharhm/food-order-app",
    description:
      "I Implemented a Food Order Application using React, Redux and Firebase for backend where we can order the food items which are mentioned on the website and the ordered food items will be stored in the firebase.",
  },
  {
    id: "2",
    title: "Movie List Application",
    imgURL: movieList,
    technology: ["#react", "#firebase"],
    projectLink: "https://github.com/saimanoharhm/movies-list-app",
    description:
      "I Implemented a Movies list Application using React and Firebase for backend where we can add our own movies list and stored it in firebase database and again automatically fetch it from the database and display it on the screen.",
  },
  {
    id: "3",
    title: "Chat Box Application",
    imgURL: chatBox,
    technology: ["#react", "#react-chat-engine", "#firebase"],
    projectLink: "https://github.com/saimanoharhm/chat-box",
    description:
      "It is a real-time chat application where you can have a group chat, create new groups and Only admin can add new people fully secured. No other person can't join over here without admin permission. which is completely developed using React library and deployed using netlify.",
  },
  {
    id: "4",
    title: "Expense Tracker Application",
    imgURL: expenseTracker,
    technology: ["#react"],
    projectLink:
      "https://github.com/saimanoharhm/expense-tracker/blob/master/src/App.js",
    description:
      "I created an expense tracker which will help us to track our expenses and it also display the graph based on our expenses.",
  },
];

const ProjectsComp = () => {
  const projectList = projects.map((project) => (
    <DisplayCard
      key={project.title + "_" + project.id}
      id={project.id}
      title={project.title}
      imgURL={project.imgURL}
      projectLink={project.projectLink}
      technology={project.technology}
      description={project.description}
    />
  ));

  return (
    <section>
      <header className={classes.header}>
        <h1>Projects</h1>
      </header>
      <ul>{projectList}</ul>
    </section>
  );
};

export default ProjectsComp;
