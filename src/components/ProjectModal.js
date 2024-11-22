function ProjectModal({
    selectedProject,
    projectModalOpen,
    closeProjectModal,
}) {
    return (
        <div
            id="projectinfo"
            className={
                "absolute text-left pr-16 h-full overflow-scroll no-scrollbar " +
                (projectModalOpen ? "right-0" : "-right-[1300px]")
            }
        >
            <div id="projmodalwrapper" className="border-l-white border-white border-solid border-l h-[2000px]">
                <div onClick={() => closeProjectModal()}> BACK </div>
                <div className="">
                    {" "}
                    {selectedProject == null
                        ? "Project not selected"
                        : selectedProject.title}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
