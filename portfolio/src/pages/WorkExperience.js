import WorkExpCard from "../components/WorkExpCard";

export default function WorkExperience() {
    return (
        <div className="w-8/12 md:w-7/12 lg:w-6/12 pb-5 sm:pb-0 md:px-20 px-10 xl:text-base text-xs text-right contentpage sm:pt-0 pt-64 sm:justify-end flex flex-col">
            <WorkExpCard
                title={"CSIntelligence"}
                role="Junior SOC Analyst"
                duration="Feb 2019 - Sep 2020"
                description="Performed daily threat hunts and maintained internal software"
                languages={<div>Python, C#, React.js, MongoDB, ASP.NET Core</div>}
            />
            <WorkExpCard
                title={"CSIntelligence"}
                role="Software Development Intern"
                duration="Feb 2019 - Sep 2020"
                description="Performed daily threat hunts and maintained internal software"
                languages={<div>Python, C#, React.js, MongoDB, ASP.NET Core</div>}
            />
            <WorkExpCard
                title={"Finesse Digital"}
                role="Software Development Intern"
                duration="Feb 2019 - Sep 2020"
                description="Performed daily threat hunts and maintained internal software"
                languages={<div>Python, C#, React.js, MongoDB, ASP.NET Core</div>}
            />
        </div>
    );
}
