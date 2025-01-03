import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import { React, useState, useEffect } from "react";
import WorkExperience from "./pages/WorkExperience";
import Projects from "./pages/Projects";
import Info from "./pages/Info";

function App() {
    const [currPage, setCurrPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const [timeoutId, setTimeoutId] = useState(null);

    const pages = ["Home", "Experience", "Projects", "Contact"];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, [loading]);

    function handleNavClick(e) {
        let temp = null;
        clearTimeout(timeoutId);
        temp = setTimeout(() => {
            document.getElementById("contentwrapper").scrollTop = 0;
            document.getElementById("contentwrapper").style.opacity = 1;
            setPageIndex(e);
        }, 300);
        setTimeoutId(temp);
        setCurrPage(e);
        document.getElementById("contentwrapper").style.opacity = 0;
    }

    function toggleTheme() {
        if (darkMode) {
            document.getElementsByTagName("body")[0].classList.remove("dark");
        } else {
            document.getElementsByTagName("body")[0].classList.add("dark");
        }
        setDarkMode(!darkMode);
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
                return <Info />;
            default:
                return <></>;
        }
    }
    return loading ? (
        <div className="h-screen pb-8">
            <div
                id="splashname"
                className="2xl:text-5xl md:font-light md:text-3xl h-full flex justify-center flex-col"
            >
                <span>a minimalist, with a love for software.</span>
            </div>
            <div id="topBorder"> </div>
            <div id="bottomBorder"></div>
        </div>
    ) : (
        <div className="App">
            <div
                id="header"
                className="pt-14 md:pt-16 md:px-16 px-5 absolute top-0 left-0 w-full"
            >
                <p className="border-b-2"></p>
            </div>
            <div
                id="name"
                className="text-left w-full absolute top-14 md:top-16 md:px-16 px-5 "
            >
                <p className="pt-5 text-3xl md:text-7xl 2xl:text-8xl font-light md:font-thin">
                    <span className="md:-ml-2.5 -ml-0.5">Darren Chan</span>
                </p>
            </div>

            <div className="text-left absolute top-32 md:top-40 2xl:top-44 md:px-16 px-5 z-50">
                <NavBar
                    pages={pages}
                    page={currPage}
                    handleOnClickNavItem={(e) => handleNavClick(e)}
                />
            </div>
            <div className="nav-item rotate-[270deg] md:rotate-0 bottom-28 -left-5 md:bottom-24 md:left-16 z-[200] text-xs xl:text-sm 2xl:text-base absolute">
                <span
                    id="darkmode"
                    className="darkmode navbaritem cursor-pointer"
                    onClick={() => toggleTheme()}
                >
                    <div className="border-white items-center text-nowrap">
                        {darkMode ? "darkMode = 1" : "darkMode = 0"}
                    </div>
                </span>
            </div>

            <div
                id="footer"
                className="text-md w-full text-left absolute bottom-0 md:pb-5 pb-2 md:px-16 px-5"
            >
                <p className="border-t-2 md:pt-4 md:pb-2 pt-5 pb-3 md:text-sm text-xs flex flex-row">
                    <span>a minimalist, with a love for software</span>
                    <span className="grow text-right ">© 2024 Darren Chan</span>
                </p>
            </div>

            <div id="currpage">
                <div
                    id="contentwrapper"
                    className="no-scrollbar w-full absolute top-14 sm:top-16 sm:bottom-16 bottom-14 md:px-16 px-5 flex flex-row justify-end overflow-scroll"
                //className="w-full absolute pt-10 sm:pt-10 sm:pb-16 pb-20 bottom-1 top-1 md:px-20 flex flex-row justify-end overflow-scroll"
                >
                    {renderPage(pageIndex)}
                </div>
            </div>
        </div>
    );
}

export default App;
