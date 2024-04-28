import WorkExpCard from "../components/WorkExpCard";
import { BootstrapIcon, CsharpIcon, CssIcon, DockerIcon, DotnetCoreIcon, HtmlIcon, JavascriptIcon, PythonIcon, ReactIcon, SqlIcon, TypescriptIcon } from "../icons/icons";

export default function WorkExperience() {
    return (
        <div className="md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-5/12 pb-5 sm:pb-0 md:px-20 px-5 xl:text-sm text-xs text-right contentpage sm:pt-36 pt-64 flex flex-col">
            <WorkExpCard
                title={"CSIntelligence"}
                role="Junior SOC Analyst"
                duration="Feb 2020 - Jun 2020"
                description={<div><p>{'>'} Performed daily threat hunts to find any malicous activity that passed the checks of the IDS SaaS.</p><p>{'>'} Maintained internal applications and scripts used to speed up workflows.</p></div>}
                languages={<div className="flex justify-end flex-wrap"><CsharpIcon/> <DotnetCoreIcon/> <PythonIcon/> <ReactIcon/> <SqlIcon/> <TypescriptIcon/> <BootstrapIcon/></div>}
            />
            <WorkExpCard
                title={"CSIntelligence"}
                role="Software Development Intern"
                duration="Sep 2019 - Jan 2020"
                description={<div><p>{'>'} Created full-stack internal applications for employees.</p><p>{'>'} Reverse engineered external API for SaaS and created a nicer UI for the SOC team to improve workflows.</p></div>}
                languages={<div className="flex justify-end flex-wrap"><CsharpIcon/> <DotnetCoreIcon/> <PythonIcon/> <ReactIcon/> <SqlIcon/> <TypescriptIcon/> <BootstrapIcon/></div>}
            />
            <WorkExpCard
                title={"Finesse Digital"}
                role="Software Development Intern"
                duration="Sep 2018 - Oct 2018"
                description={<div><p>{'>'} Converted designs into live, interactive pages.</p><p>{'>'} Automated environment setup with docker.</p></div>}
                languages={<div className="flex justify-end flex-wrap"> <HtmlIcon/> <CssIcon/> <JavascriptIcon/> <BootstrapIcon/> <DockerIcon/></div>}
            />
        </div>
    );
}