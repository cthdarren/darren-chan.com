function ProjectItem({ title, duration, projectType, platform, languages }) {
  return (
    <div className="flex md:flex-row flex-col-reverse flex-col justify-end pt-10">
      <div className="flex md:mr-5 flex-col-reverse md:flex-col grow">
        <div className="-mr-2 pt-2">{languages}</div>
        <div className="grow md:self-end text-right flex items-end justify-end">
          <span className="text-xs md:font-bold md:text-sm">
            {duration} / {projectType} / {platform} 
          </span>
        </div>
      </div>
      <div className="text-4xl md:text-6xl xl:text-7xl font-thin md:-mb-2 md:font-thin">{title}</div>
    </div>
  );
}

export default ProjectItem;
