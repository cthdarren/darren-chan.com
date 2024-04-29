import ProjectItem from "../components/ProjectItem";
import {
  CsharpIcon,
  DotnetCoreIcon,
  JavaIcon,
  JavascriptIcon,
  PythonIcon,
  ReactIcon,
  SpringbootIcon,
} from "../icons/icons.js";

export default function Projects() {
  return (
    <div className="w-8/12 md:w-10/12 lg:w-10/12 pb-5 sm:pb-0 md:px-0 px-5 xl:text-base text-xs text-right contentpage sm:pt-36 pt-64 flex flex-col">
      <ProjectItem
        title={"Portfolio"}
        projectType={"Personal"}
        platform={"Web Application"}
        duration={"May 2024"}
        languages={
          <div className="flex justify-end">
            <ReactIcon /> <JavascriptIcon />
          </div>
        }
      />
      <ProjectItem
        title={"WayFare"}
        projectType={"School"}
        platform={"Android Application"}
        duration={"Apr 2024"}
        languages={
          <div className="flex justify-end">
            <JavaIcon /> <SpringbootIcon />
          </div>
        }
      />
      <ProjectItem
        title={"WW Downloader"}
        projectType={"Personal"}
        platform={"Python Script"}
        duration={"Jul 2022"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        title={"AutoTemptaking"}
        projectType={"Personal"}
        platform={"Python Script"}
        duration={"Jan 2021"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        title={"HS Batch Downloader"}
        projectType={"Personal"}
        platform={"Tkinter Application"}
        duration={"Jul 2020"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        title={"InfiniteLodging"}
        projectType={"School"}
        platform={"Web Application"}
        duration={"Aug 2018"}
        languages={
          <div className="flex justify-end">
            <CsharpIcon /> <DotnetCoreIcon />{" "}
          </div>
        }
      />
    </div>
  );
}
