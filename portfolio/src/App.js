import logo from "./logo.svg";
import "./App.css";
import LandingButton from "./LandingButton";
import WorkExpCard from "./WorkExpCard";

function App() {
    return (
        <div className="App ">
            <div id="greeting" className="w-full h-screen flex">
                <div id="infowrapper" className="flex flex-col my-auto items-start mx-5 md:mx-20 xl:mx-40 w-full">
                    <div id="name" className="text-8xl mb-64 text-left">
                        Darren Chan
                    </div>
                    <div id="subheader" className="text-md border-t-4 w-full text-left pt-5">
                        a minimalist, with a love for software
                    </div>
                <div id="links" className="flex mt-10">
                        <LandingButton link="https://github.com/cthdarren" name="Résumé"/>
                        <LandingButton link="https://github.com/cthdarren" name="Projects"/>
                        <LandingButton link="https://github.com/cthdarren" name="Github"/>
                </div>
                </div>
            </div>
            <div id='workexperience'>
                <WorkExpCard title={"CSIntelligence"} role={"Junior SOC Analyst"} description={"Helped the SOC team with daily threat hunting"} languages={"Python, JavaScript, React"}/>
            </div>
            <div id='projects'></div>
            <div id='languages'></div>
            <div id='education'></div>
            <div id='contact'></div>
            <div id='about'></div>
        </div>
    );
}

export default App;
