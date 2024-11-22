
function WwDownloader() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <p>
                    This project was started because I had a crippling guilty pleasure addiction to wuxia novels (chinese martial art novels) at the time. I would read it online on this website where they would obtain source material from a main website, and propogate it for free on their own website with ads. I know, not a very ethical thing to do, but I was a young kid with no money. 
               </p>
                <br/>
                <p>The issue with this however, was that although you had all the content for free, you had to read it on the website and see all the ads, which was a tad bit annoying for me (I know i'm already reading it free can't really complain much). But I wanted to go one step further. Since the content is all already available, why not scrape all the content and parse it into a downloadable epub format? That way I could also read offline, a feature that was not present.</p>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>
                    Although an exceedingly simple project, this was one of my proudest ones, because it was one of my first actual useful product that I could see other people using. It thought me the basics of webscraping, inspecting URLs and parsing content into other formats like an epub. 
                </p>
                <br/>
                <p>The project is now discontinued because the website is down, moreover, better projects are out there such as LNReader (which I use now)</p>
            </div>
        </>
    );
}

export default WwDownloader;
