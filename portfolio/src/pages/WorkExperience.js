import WorkExpCard from "../components/WorkExpCard";
import { BootstrapIcon, CsharpIcon, DockerIcon, DotnetCoreIcon, PythonIcon, ReactIcon } from "../icons/icons";

export default function WorkExperience() {
    return (
        <div className="w-8/12 md:w-7/12 lg:w-6/12 pb-5 sm:pb-0 md:px-20 px-10 xl:text-base text-xs text-right contentpage sm:pt-36 pt-64 flex flex-col">
            <WorkExpCard
                title={"CSIntelligence"}
                role="Junior SOC Analyst"
                duration="Feb 2020 - Jun 2020"
                description="Performed daily threat hunts and maintained internal software"
                languages={<div className="flex justify-end"> <PythonIcon/> <CsharpIcon/> <ReactIcon/> <BootstrapIcon/></div>}
            />
            <WorkExpCard
                title={"CSIntelligence"}
                role="Software Development Intern"
                duration="Sep 2019 - Jan 2020"
                description="Performed daily threat hunts and maintained internal software"
                languages={<div className="flex justify-end"> <DotnetCoreIcon/> <CsharpIcon/> <ReactIcon/> <BootstrapIcon/></div>}
            />
            <WorkExpCard
                title={"Finesse Digital"}
                role="Software Development Intern"
                duration="Sep 2018 - Oct 2018"
                description={<div><p>Converted designs into live, interactive pages</p><p>Automated environment setup with docker</p></div>}
                languages={<div className="flex justify-end"> <PythonIcon/> <CsharpIcon/> <ReactIcon/> <BootstrapIcon/></div>}
            />
        </div>
    );
}
