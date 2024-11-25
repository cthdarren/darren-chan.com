function Home() {
    return (
        <div className="w-8/12 md:w-7/12 lg:w-6/12 xl:w-3/12 2xl:w-3/12 pb-6 sm:pb-12 md:pr-0 pr-5 2xl:text-lg text-sm text-justify contentpage self-end">
            Hi, I'm Darren, a passionate software developer, with a strong love for
            customisation. I love customising my websites, my desktop environment, my
            keyboard, my shell, my text editor, the list goes on.
            < br/>
            You can find most of my work as well as my dotfiles on <a href="https://github.com/cthdarren/" target="_blank"><u>Github.</u></a>
            <br />
            <br />
            Currently, I am:
            <ol className="list-disc list-outside ml-5">
                <li>
                    Studying Computer Science at SUTD 
                </li>
                <li>
                    working on <a href="https://github.com/cthdarren/cli-type" target="_blank"><u>cli-type</u></a>, a typing test at your fingertips, in your terminal. <br />
                </li>
                <li>
                    writing an alternative Text-based User Interface for the Youtube Music client, <a href="https://github.com/cthdarren/ytmusic-tui" target="_blank"><u>ytmusic-tui</u></a>
                </li>
            </ol>
        </div>
    );
}

export default Home;
