export default function Info() {
  return (
    <div className="xl:text-8xl md:font-thin font-thin text-6xl text-right contentpage sm:pt-40 pt-64 flex flex-col justify-end md:pb-10 pb-4">
        <div className="flex justify-end md:pt-20 pt-10">
          <a href="https://github.com/cthdarren" className="flex items-center" target="_blank" rel="noreferrer">
            <span className="biglink">GitHub</span>
          </a>
        </div>
        <div className="flex justify-end md:pt-20  pt-10">
          <a href="https://linkedin.com/in/cthdarren" target="_blank" rel="noreferrer" className="flex items-center justify-around">
            <span className="biglink">LinkedIn</span>
          </a>
        </div>
        <div className="flex justify-end md:pt-20 pt-10">
          <a href="https://drive.google.com/file/d/1lristA9NJlbWIjE4-xXqPK8zUwr2_-OB/view" target="_blank" rel="noreferrer" className="flex items-center">
            <span className="biglink">Résumé</span>
          </a>
      </div>
    </div>
  );
}
