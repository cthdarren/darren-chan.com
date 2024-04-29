import ProjectItem from "../components/ProjectItem";
import { JavaIcon, SpringbootIcon } from "../icons/icons.js";

export default function Projects() {
  return (
    <div className="w-8/12 md:w-8/12 lg:w-8/12 pb-5 sm:pb-0 md:px-0 px-5 xl:text-base text-xs text-right contentpage sm:pt-36 pt-64 flex flex-col">
      <ProjectItem
        title={"WayFare"}
        projectType={"School"}
        platform={"Android Application"}
        duration={"Apr 2024"}
        languages={
          <div className="flex justify-end">
            <JavaIcon /> <SpringbootIcon />{" "}
          </div>
        }
      />
    </div>
  );
}
