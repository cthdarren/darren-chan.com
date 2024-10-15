import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import {
  CsharpIcon,
  DotnetCoreIcon,
  JavaIcon,
  JavascriptIcon,
  PythonIcon,
  ReactIcon,
  SpringbootIcon,
  BootstrapIcon,
  RubyIcon,
  RailsIcon,
  GCPIcon
} from "../icons/icons.js";
import ProjectModal from "../components/ProjectModal.js";

export default function Projects() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-8/12 md:w-10/12 lg:w-10/12 md:px-0 px-5 xl:text-base text-xs text-right contentpage sm:pt-36 pt-64 flex flex-col">
    {projectModalOpen? (<>h</>): (<></>)}
    <ProjectModal selectedProject={selectedProject}/>
      <ProjectItem
        setProjectModalOpen={setProjectModalOpen}
        setSelectedProject={setSelectedProject}
        title={"Ring of Reciprocity"}
        projectType={"School"}
        platform={"Web Application"}
        link={"https://ror-rails-ndse76q2ja-as.a.run.app/"}
        duration={"Aug 2024"}
        languages={
          <div className="flex justify-end">
            <RubyIcon /> <RailsIcon /> <GCPIcon /> <BootstrapIcon />
          </div>
        }
      />
      <ProjectItem
        setProjectModalOpen={setProjectModalOpen}
        setSelectedProject={setSelectedProject}
        title={"Portfolio"}
        projectType={"Personal"}
        platform={"Web Application"}
        link={"https://darren-chan.com"}
        duration={"May 2024"}
        languages={
          <div className="flex justify-end">
            <ReactIcon /> <JavascriptIcon />
          </div>
        }
      />
      <ProjectItem
        setProjectModalOpen={setProjectModalOpen}
        setSelectedProject={setSelectedProject}
        title={"WayFare"}
        projectType={"School"}
        platform={"Android Application"}
        link={"https://istd.sutd.edu.sg/term4-design-exhibition/50001/team11"}
        duration={"Apr 2024"}
        languages={
          <div className="flex justify-end">
            <JavaIcon /> <SpringbootIcon />
          </div>
        }
      />
      <ProjectItem
        setProjectModalOpen={setProjectModalOpen}
        setSelectedProject={setSelectedProject}
        title={"WW Downloader"}
        projectType={"Personal"}
        platform={"Python Script"}
        link={"https://github.com/cthdarren/wuxiaworld.co-downloader"}
        duration={"Jul 2022"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        setProjectModalOpen={setProjectModalOpen}
        setSelectedProject={setSelectedProject}
        title={"AutoTemptaking"}
        projectType={"Personal"}
        platform={"Python Script"}
        link={"https://github.com/cthdarren/autotemptaking"}
        duration={"Jan 2021"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        setProjectModalOpen={setProjectModalOpen}
        setSelectedProject={setSelectedProject}
        title={"HS Batch Downloader"}
        projectType={"Personal"}
        platform={"Tkinter Application"}
        link={"https://github.com/cthdarren/horriblesubs-batch-downloader"}
        duration={"Jul 2020"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        setProjectModalOpen={setProjectModalOpen}
        setSelectedProject={setSelectedProject}
        title={"InfiniteLodging"}
        projectType={"School"}
        platform={"Web Application"}
        link={"https://github.com/cthdarren/Infinite-Lodging"}
        duration={"Aug 2018"}
        languages={
          <div className="flex justify-end">
            <CsharpIcon /> <DotnetCoreIcon />{" "}
          </div>
        }
      />
      <div className="p-1 md:p-5"></div>
    </div>
  );
}
