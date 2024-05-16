function ProjectItem({ title, link, duration, projectType, platform, languages }) {
  return (
    <div className="flex md:flex-row  flex-col-reverse justify-end py-5 ">
      <a className="flex flex-col-reverse md:flex-row biglink" href={link} target="_blank" rel="noreferrer">
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
      </a>
    </div>
  );
}

export default ProjectItem;
