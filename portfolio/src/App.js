import "./App.css";
import Home from "./Home";
import NavBar from "./Navbar";
import { React, useState } from "react";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Languages from "./Languages";
import Education from "./Education";
import Contact from "./Contact";

function App() {
    const [currPage, setCurrPage] = useState(0);
    const pages = [
        "Home",
        "Work Experience",
        "Projects",
        "Languages",
        "Education",
        "Contact",
    ];

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
                className="text-left w-full absolute top-10 md:top-16 md:px-16 px-10"
            >
                <p className="border-t-2 pt-5 text-3xl md:text-5xl">Darren Chan</p>
                <NavBar
                    pages={pages}
                    page={currPage}
                    handleOnClickNavItem={(e) => setCurrPage(e)}
                />
            </div>
            <div
                id="footer"
                className="text-md w-full text-left absolute bottom-5 md:px-16 px-10"
            >
                <p className="border-t-2 py-3 md:text-sm text-xs flex sm:flex-row flex-col">
                    a minimalist, with a love for software
                <span className="grow sm:text-right text-left pt-0 sm:pt-0">© 2024 Darren Chan.</span>
                </p>
            </div>

            <div id="currpage" className="w-full absolute top-10 sm:top-16 sm:bottom-16 bottom-24">
                {renderPage(currPage)}
            </div>
        </div>
    );
}

export default App;
