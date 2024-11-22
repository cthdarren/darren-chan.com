import AutoTempTaking from "./projects/autotemptaking"
import HorribleSubs from "./projects/horriblesubs"
import InfiniteLodging from "./projects/infinitelodging"
import Portfolio from "./projects/portfolio"
import RingOfReciprocity from "./projects/ring-of-reciprocity"
import Wayfare from "./projects/wayfare"
import WwDownloader from "./projects/ww-downloader"

function getContent(projectId){
    switch(projectId){
        case 0:
            return (<RingOfReciprocity/>)
        case 1:
            return (<Portfolio/>)
        case 2:
            return (<Wayfare/>)
        case 3:
            return (<AutoTempTaking/>)
        case 4:
            return (<HorribleSubs/>)
        case 5:
            return (<WwDownloader/>)
        case 6:
            return (<InfiniteLodging/>)
        default:
            return (<div>Invalid Project Id</div>)
    }
}
function ProjectItemInfo({
    selectedProject,
}) {
    return (
            <>
                <div id="projectMetaContainer" className="ml-1 [&>div]:mb-1">
                    <div className="flex justify-between mt-6">
                        <div id="projectMetaPlatform">
                            <span className="">{selectedProject.platform} / {selectedProject.projectType} Project</span>
                        </div>
                        <div id="projectMetaLink" className="underline">
                            <a target="_blank" rel="noreferrer" href={selectedProject.link}>View the source code / running website</a>
                        </div>
                    </div>
                    <div id="projectMetaDuration">
                        <span className="">{selectedProject.duration}</span>
                    </div>
                    <div id="projectMetaLanguage">
                        {selectedProject.languages}
                    </div>
                    <span className="bg-white w-full h-[1px] my-5 block"></span>
                </div>
                {getContent(selectedProject.id)}
            </>
    );
}

export default ProjectItemInfo;
