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

function openProjectModal(project){
        document.getElementById("name").style.opacity = 0
        document.getElementById("navbar").style.opacity = 0
        document.getElementById("darkmode").children[0].style.opacity = 0
        setProjectModalOpen(true) 
        setSelectedProject(project)
}

function closeProjectModal(){
        document.getElementById("name").style.opacity = 100 
        document.getElementById("navbar").style.opacity = 100
        document.getElementById("darkmode").children[0].style.opacity = 100
        setProjectModalOpen(false) 
    }

  return (
        <>
        <div className="w-full h-full overflow-scroll no-scrollbar absolute">
    <div className={"w-8/12 md:w-9/12 lg:w-9/12 md:px-0 px-5 xl:text-base text-xs text-right contentpage sm:pt-36 pt-64 flex flex-col absolute " + (projectModalOpen?"2xl:right-[1100px] xl:right-[950px] lg:right-[775px] md:right-[600px] sm:right-[520px] right-[130%]":"right-0")}>

      <ProjectItem
        openProjectModal={openProjectModal}
        id ={0}
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
        openProjectModal={openProjectModal}
        id ={1}
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
        openProjectModal={openProjectModal}
        id ={2}
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
        openProjectModal={openProjectModal}
        id ={3}
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
        openProjectModal={openProjectModal}
        id ={4}
        title={"WW Downloader"}
        projectType={"Personal"}
        platform={"Python Script"}
        link={"https://github.com/cthdarren/wuxiaworld.co-downloader"}
        duration={"Jan 2020"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        openProjectModal={openProjectModal}
        id ={5}
        title={"HS Batch Downloader"}
        projectType={"Personal"}
        platform={"Tkinter Application"}
        link={"https://github.com/cthdarren/horriblesubs-batch-downloader"}
        duration={"Apr 2019"}
        languages={
          <div className="flex justify-end">
            <PythonIcon />
          </div>
        }
      />
      <ProjectItem
        openProjectModal={openProjectModal}
        id ={6}
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
    </div>

        <ProjectModal closeProjectModal={closeProjectModal} projectModalOpen={projectModalOpen} selectedProject={selectedProject}/>
    </>
  );
}
