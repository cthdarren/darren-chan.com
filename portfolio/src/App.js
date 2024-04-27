import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App ">
            <div id="greeting" className="w-full h-screen flex">
                <div id="infowrapper" className="flex flex-col my-auto items-start mx-40 w-full">
                    <div id="name" className="text-8xl mb-64">
                        Darren Chan
                    </div>
                    <div id="subheader" className="text-md border-t-4 w-full text-left pt-5">
                        a minimalist, with a love for software
                    </div>
                <div id="links" className="flex mt-10">
                    <button type="button" className="mr-8 text-lg border-black border rounded-md py-2 px-8">Projects</button>
                    <button type="button" className="mr-8 text-lg border-black border rounded-md py-2 px-8">Github</button>
                    <button type="button" className="mr-8 text-lg border-black border rounded-md py-2 px-8">LinkedIn</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default App;
