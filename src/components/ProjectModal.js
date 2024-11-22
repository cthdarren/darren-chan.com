import ProjectItemInfo from "./ProjectItemInfo";
import { ReactComponent as BackSvg } from '../icons/back.svg'

function ProjectModal({
    selectedProject,
    projectModalOpen,
    closeProjectModal,
}) {
    return (
        <div
            id="projectinfo"
            className={
                "absolute text-left pr-16 h-full overflow-scroll no-scrollbar bordergradientvertical border-solid border-l " +
                (projectModalOpen ? "right-0" : "-right-[1400px]")
            }
        >
            <div className="mt-5 ml-16 pl-1 relative w-fit" onClick={() => closeProjectModal()}> 
                <div className="relative underline cursor-pointer w-fit">
                    <BackSvg className="absolute py-1.5 h-full inline-block" fill="currentColor"/>
                    <span className="pl-6">{"BACK"}</span>
                </div>
            </div>
            <div id="projmodalwrapper" className="mt-10 mb-5 px-16">
                <div className="text-6xl font-thin">
                    {selectedProject == null
                        ? "Project not selected"
                        : selectedProject.title
                    }
                </div>
                {selectedProject == null
                    ? <></>
                    : <ProjectItemInfo selectedProject={selectedProject}/>
                }
            </div>
        </div>
    );
}

export default ProjectModal;
