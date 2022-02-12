import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/layout/Layout";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import FooterComp from "./components/Others/FooterComp";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <FooterComp />
    </Fragment>
  );
}

export default App;
