function AutoTempTaking() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <p>
                    This project isn't exactly a project per say, just a simple automated script to be run as a CRON job, the reason why I put this here in my portfolio was largely because I didn't reallly do much in terms of programming while in National Service, except for this.
               </p>
                <br/>
                <p>Covid-19 was rampant at the time that I was serving my National Service, and it was important that everyone had to record their temperatures and submit them everyday. As an extremely forgetful person, I decided to create a simple script after analysing the network requests to automate sending a random believable temperature that was below 37.6 degrees. </p>
            </div>
            <div id="project_reflect">
                <span className="bg-white w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>
                    Frankly speaking, most of my projects aren't exactly the most ethical after thinking about them, but they no doubt served to help me improve my skills, like in this case reading and understanding requests and how cookies work.
                </p>
            </div>
        </>
    );
}

export default AutoTempTaking;
