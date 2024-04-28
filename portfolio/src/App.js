import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import { React, useState, useRef, useEffect } from "react";
import WorkExperience from "./pages/WorkExperience";
import Projects from "./pages/Projects";
import Languages from "./pages/Languages";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  const [currPage, setCurrPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  const pages = [
    "Home",
    "Experience",
    "Projects",
    "Languages",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [loading]);

  function handleNavClick(e) {
    let temp = null;
    clearTimeout(timeoutId);
    temp = setTimeout(() => {
      document.getElementById("contentwrapper").style.opacity = 1;
      setPageIndex(e);
    }, 300);
    setTimeoutId(temp);
    setCurrPage(e);
    document.getElementById("contentwrapper").style.opacity = 0;
  }

  function renderPage(index) {
    switch (index) {
      case 0:
        return <Home />;
      case 1:
        return <WorkExperience />;
      case 2:
        return <Projects />;
      case 3:
        return <Languages />;
      case 4:
        return <Education />;
      case 5:
        return <Contact />;
      default:
        return <></>;
    }
  }
  return loading ? (
    <div className="h-screen pb-8">
      <div id="splashname" className="sm:text-5xl text-sm h-full flex justify-center flex-col">
                a minimalist, with a love for software.</div>
      <div id="topBorder"> </div>
      <div id="bottomBorder"></div>
    </div>
  ) : (
    <div className="App">
      <div
        id="name"
        className="text-left w-full absolute top-10 md:top-10 md:px-16 px-5 "
      >
        <p className="border-t-2 pt-5 text-xl md:text-8xl">Darren Chan</p>
        <NavBar
          pages={pages}
          page={currPage}
          handleOnClickNavItem={(e) => handleNavClick(e)}
        />
      </div>
      <div
        id="footer"
        className="text-md w-full text-left absolute bottom-5 md:px-16 px-5"
      >
        <p className="border-t-2 py-3 md:text-sm text-xs flex sm:flex-row flex-col">
          a minimalist, with a love for software
          <span className="grow sm:text-right text-left pt-0 sm:pt-0">
            © 2024 Darren Chan.
          </span>
        </p>
      </div>

      <div id="currpage">
        <div
          id="contentwrapper"
          className="w-full absolute top-10 sm:top-10 sm:bottom-16 bottom-20 flex flex-row justify-end overflow-scroll"
        >
          {renderPage(pageIndex)}
        </div>
      </div>
    </div>
  );
}

export default App;
