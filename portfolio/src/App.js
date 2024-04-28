import logo from "./logo.svg";
import "./App.css";
import LandingButton from "./LandingButton";
import WorkExpCard from "./WorkExpCard";
import Home from "./Home";
import NavBar from "./Navbar";

function App() {
    return (
        <div className="App ">
                <div
                    id="name"
                    className="text-left w-full absolute top-10 md:top-16 md:px-16 px-10"
                >
                    <p className="border-t-2 pt-5 text-3xl md:text-5xl">Darren Chan</p>
                    <NavBar/>

                </div>
                <div
                    id="subheader"
                    className="text-md w-full text-left absolute bottom-5 md:px-16 px-10"
                >
                    <p className="border-t-2 py-3 text-sm">
                        a minimalist, with a love for software
                    </p>
                </div>

            <div id="currpage" className="w-full absolute top-10 md:top-16 bottom-16">
                <Home/>
            </div>
        </div>
    );
}

export default App;
