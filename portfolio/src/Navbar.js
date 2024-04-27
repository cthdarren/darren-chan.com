import './index.css';

function NavBar() {
  return (
    <div
      className="fixed top-0 w-full hidden"
    >
      <div className='flex h-[54px] text-lg items-center'>
                <div id='branding' className='pl-40'>
                    <p>Darren Chan</p>
                </div>
                <div id='header' className='flex grow justify-center'>
                    <p>Software Enthusiast</p>
                </div>
                <div id='links' className='flex pr-40'>
                    <a href="https://github.com/cthdarren" className='mr-4'>
        <img
          width="30"
          height="30"
          src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/dark/github.svg"
          alt="github"
        />
        </a>
        <a href="https://linkedin.com/in/cthdarren">
        <img
          width="30"
          height="30"
          src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/dark/linkedin.svg"
          alt="linkedin"
        />
        </a>
                </div>
      </div>
    </div>
  );
}

export default NavBar;
