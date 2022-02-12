import React from "react";
import DisplayCard from "../Others/DisplayCard";
import classes from "../AboutComponent/comp.module.css";
import javascriptBlog from "../../assets/javascript-blog.jpg";
import staticBlog from "../../assets/static-dynamic-blog.png";
import vscodeBlog from "../../assets/vscode-theme-blog.png";

const blogs = [
  {
    id: "5",
    title: "Why you should learn JavaScript",
    imgURL: javascriptBlog,
    technology: ["#javascript", "#web-development"],
    projectLink:
      "https://saimanoharhm.hashnode.dev/why-you-should-learn-javascript",
    description:
      "In this blog I have covered the importance of Javascript and the IT market trend.",
  },
  {
    id: "6",
    title: "Three things you should know as a vscode user",
    imgURL: vscodeBlog,
    technology: ["#vscode", "#vscode-extensions", "#developer"],
    projectLink:
      "https://saimanoharhm.hashnode.dev/three-things-you-should-know-as-a-vscode-user",
    description:
      "In this blog I have discussed useful shortcuts for vscode and made developer life easier.",
  },
  {
    id: "7",
    title: "Static and Dynamic Memory Allocation in C",
    imgURL: staticBlog,
    technology: ["#dynamic-memory-allocation", "#c-basics", "#c-language"],
    projectLink:
      "https://www.geeksforgeeks.org/static-and-dynamic-memory-allocation-in-c/",
    description:
      "In this blog I have discussed the most important concept in c programming.",
  },
];

const BlogComp = () => {
  const blogList = blogs.map((blog) => (
    <DisplayCard
      id={blog.id}
      key={blog.title + "_" + blog.id}
      title={blog.title}
      imgURL={blog.imgURL}
      projectLink={blog.projectLink}
      technology={blog.technology}
      description={blog.description}
    />
  ));

  return (
    <section>
      <header className={classes.header}>
        <h1>Blogs</h1>
      </header>
      <ul>{blogList}</ul>
    </section>
  );
};

export default BlogComp;
