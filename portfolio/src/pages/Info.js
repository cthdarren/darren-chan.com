export default function Info() {
  return (
    <div className="md:text-8xl md:font-thin font-thin text-6xl text-right contentpage sm:pt-40 pt-64 flex flex-col justify-end md:pb-20 pb-10">
        <div className="flex justify-end pt-10">
          <a href="https://github.com/cthdarren" className="flex items-center" target="_blank" rel="noreferrer">
            <span className="biglink">GitHub</span>
          </a>
        </div>
        <div className="flex justify-end pt-10 ">
          <a href="https://linkedin.com/in/cthdarren" target="_blank" rel="noreferrer" className="flex items-center justify-around">
            <span className="biglink">LinkedIn</span>
          </a>
        </div>
        <div className="flex justify-end pt-10">
          <a href="https://drive.google.com/file/d/1SeveHzbZPavhHVMNIY7zI7o9GJPC9W7g/view" target="_blank" rel="noreferrer" className="flex items-center">
            <span className="biglink">Résumé</span>
          </a>
      </div>
    </div>
  );
}
