import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import { React, useState, useRef } from "react";
import WorkExperience from "./pages/WorkExperience";
import Projects from "./pages/Projects";
import Languages from "./pages/Languages";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  const [currPage, setCurrPage] = useState(0);
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

  function handleNavClick(e) {
    let temp = null;
    clearTimeout(timeoutId);
    console.log("Cleared" + timeoutId);
    temp = setTimeout(() => {
      document.getElementById("currpage").style.opacity = 1;
      setPageIndex(e);
      console.log("finished " + timeoutId);
    }, 300);
    setTimeoutId(temp);
    console.log("new " + timeoutId);
    setCurrPage(e);
    document.getElementById("currpage").style.opacity = 0;
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
  return (
    <div className="App ">
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

      <div
        id="currpage"
        className="w-full absolute top-10 sm:top-10 sm:bottom-16 bottom-20 flex flex-row justify-end overflow-scroll"
      >
        {renderPage(pageIndex)}
      </div>
    </div>
  );
}

export default App;
