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
    const [darkMode, setDarkMode] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const pages = ["Home", "Experience", "Projects", "Info"];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, [loading]);

    useEffect(() => {
        if (window.matchMedia) {
            // Check if the dark-mode Media-Query matches
            console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setDarkMode(true);
                document.getElementsByTagName("body")[0].classList.add("dark");
            } else {
                setDarkMode(false);
                document.getElementsByTagName("body")[0].classList.remove("dark");
            }
        } else {
            setDarkMode(false);
            document.getElementsByTagName("body")[0].classList.remove("dark");
        }
    },[])
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
                className="sm:text-5xl text-sm h-full flex justify-center flex-col"
            >
                <span>a minimalist, with a love for software.</span>
            </div>
            <div id="topBorder"> </div>
            <div id="bottomBorder"></div>
        </div>
    ) : (
        <div className="App">
            <div
                id="name"
                className="text-left w-full absolute top-10 md:top-10 md:px-16 px-5 "
            >
                <p className="border-t-2 pt-5 text-xl md:text-8xl md:font-thin">
                    <span className="md:-ml-3 -ml-0.5">Darren Chan</span>
                </p>
            </div>

            <div className="text-left absolute top-24 md:top-44 md:px-16 px-5 z-50">
                <NavBar
                    pages={pages}
                    page={currPage}
                    handleOnClickNavItem={(e) => handleNavClick(e)}
                    toggleTheme={toggleTheme}
                    darkMode={darkMode}
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
                    className="w-full absolute top-10 sm:top-10 sm:bottom-16 bottom-20 sm:px-20 flex flex-row justify-end overflow-scroll"
                >
                    {renderPage(pageIndex)}
                </div>
            </div>
        </div>
    );
}

export default App;
