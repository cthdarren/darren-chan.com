function ProjectItem({ id, title, link, duration, projectType, platform, languages, openProjectModal}) {
    const project = {
        id: id,
        title: title,
        link: link,
        duration: duration,
        projectType: projectType,
        platform: platform,
        languages: languages
    }
  return (
    <div className="flex md:flex-row  flex-col-reverse justify-end py-5 biglink" onClick={() => {openProjectModal(project)}}>
        <div className="flex md:mr-8 flex-col-reverse md:flex-col">
          <div className="-mr-2 pt-2">{languages}</div>
          <div className="grow md:self-end text-right flex items-end justify-end">
            <span className="text-xs md:font-bold 2xl:text-sm">
              {duration} / {projectType} / {platform}
            </span>
          </div>
        </div>
        <div className="text-4xl md:text-6xl 2xl:text-7xl font-thin md:-mb-2 md:font-thin">
          {title}
        </div>
    </div>
  );
}

export default ProjectItem;
