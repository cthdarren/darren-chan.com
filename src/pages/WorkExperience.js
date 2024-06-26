import WorkExpCard from "../components/WorkExpCard";
import {
  BootstrapIcon,
  CsharpIcon,
  CssIcon,
  DockerIcon,
  DotnetCoreIcon,
  HtmlIcon,
  JavascriptIcon,
  PythonIcon,
  ReactIcon,
  SqlIcon,
  TypescriptIcon,
} from "../icons/icons";

export default function WorkExperience() {
  return (
    // svg adapted from https://safetpojskic.com/
    <div className="w-8/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12 pb-10 md:px-0 px-5 xl:text-base text-xs text-right contentpage sm:pt-36 pt-64 flex flex-col">
      <div id="treething" class="absolute -ml-16 lg:-ml-20 2xl:-ml-32 mt-10">
        <svg
          viewBox="0 50 20 889"
          width="20"
          height="889"
          class=" ml-4 block"
          aria-hidden="true"
        >
          <path
            d="M 1 0V -36 l 18 24 V 711.2 l -18 24V 889"
            fill="none"
            stroke="#9091A0"
            stroke-opacity="0.36"
          ></path>
        </svg>
      </div>

      <div>
        <WorkExpCard
          title={"CSIntelligence"}
          role="Junior SOC Analyst"
          duration="Feb 2020 - Jun 2020"
          description={
            <div>
              <p>
                {">"} Performed daily threat hunts to find any malicous activity
                that passed the checks of the IDS SaaS.
              </p>
              <p>
                {">"} Maintained internal applications and scripts used to speed
                up workflows.
              </p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <CsharpIcon /> <DotnetCoreIcon /> <PythonIcon /> <ReactIcon />{" "}
              <SqlIcon /> <TypescriptIcon /> <BootstrapIcon />
            </div>
          }
        />
        <WorkExpCard
          title={"CSIntelligence"}
          role="Software Development Intern"
          duration="Sep 2019 - Jan 2020"
          description={
            <div>
              <p>
                {">"} Created full-stack internal applications for employees.
              </p>
              <p>
                {">"} Reverse engineered external API for SaaS and created a
                nicer UI for the SOC team to improve workflows.
              </p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <CsharpIcon /> <DotnetCoreIcon /> <PythonIcon /> <ReactIcon />{" "}
              <SqlIcon /> <TypescriptIcon /> <BootstrapIcon />
            </div>
          }
        />
        <WorkExpCard
          title={"Finesse Digital"}
          role="Software Development Intern"
          duration="Sep 2018 - Oct 2018"
          description={
            <div>
              <p>{">"} Converted designs into live, interactive pages.</p>
              <p>{">"} Automated environment setup with docker.</p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <HtmlIcon /> <CssIcon /> <JavascriptIcon /> <BootstrapIcon />{" "}
              <DockerIcon />
            </div>
          }
        />
        <div className="md:p-5"></div>
      </div>
    </div>
  );
}
