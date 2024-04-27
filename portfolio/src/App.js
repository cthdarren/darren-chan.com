import logo from "./logo.svg";
import "./App.css";
import LandingButton from "./LandingButton";
import WorkExpCard from "./WorkExpCard";
import Home from "./Home";

function App() {
    return (
        <div className="App ">
                <div
                    id="name"
                    className="text-6xl text-left w-full absolute top-16 px-16 "
                >
                    <p className="border-t-2 pt-5 font-thin">Darren Chan</p>
                <div id="links" className="flex mt-5 text-base flex-col">
                    <p>Home</p>
                    <p>Work Experience</p>
                    <p>Projects</p>
                    <p>Languages</p>
                    <p>Education</p>
                    <p>Contact</p>
                </div>

                </div>
                <div
                    id="subheader"
                    className="text-md w-full text-left absolute bottom-5 px-16"
                >
                    <p className="border-t-2 py-3 text-sm">
                        a minimalist, with a love for software
                    </p>
                </div>

            <div id="currpage" className="w-full absolute top-16 bottom-16">
                <Home/>
            </div>
        </div>
    );
}

export default App;
