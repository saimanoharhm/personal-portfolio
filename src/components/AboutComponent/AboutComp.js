import React from "react";
import classes from "./comp.module.css";
import Card from "../UI/Card";
import saiImage from "../../assets/sai1.jpeg";
import { Student, MapPin, EnvelopeSimple } from "phosphor-react";

const AboutComp = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>About</h1>
      </header>
      <hr />
      <section className={classes["profile-container"]}>
        <div>
          <Card className={classes.profile}>
            <img
              src={saiImage}
              alt="Annam Sai Manohar headshot"
              className={classes["profile-image"]}
            />
            <div className={classes["profile-content"]}>
              <p className={classes["profile-title"]}>Annam Sai Manohar</p>
              <p className={classes["profile-tagline"]}>
                Full Stack Developer & Technical Writer
              </p>
              <ul className={classes["profile-attributes"]}>
                <li className={classes["profile-attribute"]}>
                  <Student size={40} className={classes["profile-icon"]} />
                  <span>Sathyabama IST</span>
                </li>
                <li className={classes["profile-attribute"]}>
                  <MapPin size={40} className={classes["profile-icon"]} />
                  <span>Chennai,India</span>
                </li>
                <li className={classes["profile-attribute"]}>
                  <EnvelopeSimple
                    size={40}
                    className={classes["profile-icon"]}
                  />
                  <span>saimanohar987@gmail.com</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        <div>
          <h1 className={classes.header}>Hi,👋 I'm Annam Sai Manohar</h1>
          <p className={classes.description}>
            🧑‍🎓I am a Junior Year Student at Sathyabama Institute of Science
            and Technology currently pursuing my bachelor's in Computer Science
            and Engineering. 👩‍💻I am an exuberant tech enthusiast, and a
            self-taught programmer. I am an enthusiastic and social person who
            loves to take up new challenges and learn new skills. I love meeting
            new people, exchanging ideas, and spreading knowledge.
          </p>
          <br />
          <p className={classes.description}>
            ➡️I'm Skilled in MERN Stack apart from that I love to practice Data
            Structures and algorithms using Java.
          </p>
          <p className={classes.description}>
            ➡️ I have done several personal projects in web development and also
            participate in hackathons and open source programs.
          </p>
          <p className={classes.description}>
            ➡️I Implemented an E-commerce Website using React, Redux, React
            Router, and Firebase for the backend which is basically a food order
            app where we can order the food items mentioned on the website and
            the ordered users list will be stored in the firebase.{" "}
          </p>
          <p className={classes.description}>
            ➡️I built a Tic Tac Toe Game using React, Expense Tracker using
            React, and fetched a movies list using React and The Star Wars API.
          </p>
          <p className={classes.description}>
            ➡️I built a Personal Portfolio Website using React which is
            basically to showcase my skills and blogs, Projects, and
            documentation about me.
          </p>
          <p className={classes.description}>
            ➡️ I have contributed to the data structures and algorithms project
            as part of the cross winter of code program. Apart from it, I have
            also contributed to the web development project(DevIntenship) where
            I have worked on wireframe frameworks and development part other
            than that data structures and algorithms project as part of Girl
            script summer of code program.
          </p>
          <p className={classes.description}>
            ➡️I am a Community Lead at Hack Club - SIST. Hack Club is a
            nonprofit network of coding clubs and makers around the world
            students-based community groups interested in technologies. We at
            Hack Club created an environment for people to have peer-to-peer
            learning and help fellow students, create robust tech communities
            and develop technical and career skills for the future.{" "}
          </p>
          <p className={classes.description}>
            ➡️ I am a Beta Microsoft Learn Student Ambassadors which is
            basically a global group of campus leaders who are eager to help
            fellow students, create robust tech communities, and develop
            technical and career skills for the future.{" "}
          </p>
          <p className={classes.description}>
            ➡️ I am an AngelHack Student Ambassador and I engage with local
            developer communities to strengthen local ecosystems, bring together
            passionate individuals, and promote innovation. For more
            information, visit: angelhack.com
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutComp;
