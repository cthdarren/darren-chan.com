function ProjectModal({ selectedProject, setModalOpen}) {
  return (
    <div className="absolute z-[998] text-left bg-black p-16 top-0 right-16 h-full w-1/2">
            <div className="absolute top-10 right-10 z-[999]" onClick={() => setModalOpen(false)}> close </div>
            <div className="text-5xl">{selectedProject.title}</div>
        </div>
  );
}

export default ProjectModal;
