import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import saiImage from "../../assets/sai1.jpeg";
import resume from "../../assets/resume1.2.pdf";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={saiImage} alt="Annam Sai Manohar logo" />
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <a href={resume}>Resume</a>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
