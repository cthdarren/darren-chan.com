import GalleryCarousel from "../GalleryCarousel";
import ror1 from "../../assets/pictures/ror1.png"
import ror2 from "../../assets/pictures/ror2.png"
import ror3 from "../../assets/pictures/ror3.png"
import ror4 from "../../assets/pictures/ror4.png"

function RingOfReciprocity() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <p>
               The Ring of Reciprocity aims to incentivise more people to volunteer and help the community. 
               </p>
                <br/>
                <p>This is done by: </p>
                <ol className="list-disc list-inside">
                    <li>
                        Allowing the general public to more easily match to requests for help based
                    </li>

                    <li>
                        Allowing corporations to easier manage volunteers, thereby incentivising more businesses to participate in the Corporate Volunteer Scheme
                    </li>
                </ol>
            </div>
            <div id="project_carousel">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Gallery</p>
            <GalleryCarousel picture_array={[ror3, ror4, ror2, ror1]}/>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p> This project managed to introduce me to many firsts in my software developer journey. The biggest takeaway I got out of the application was most definitely integrating the Gemini LLM API into this. Although extremely simple, it allowed me to experience using an API for an LLM for the first time. 
                </p>
                <br/>
                <p>Secondly, the DevOps portion for this project was a first for me as well, using Google Cloud Platform to perform CI/CD alongside github actions and Docker. It gave me a small insight into what a production level CRUD application would run on.</p>
                <br/>
                <p>The main focus for this course was the focus on testing, and it was also the first time that I performed testing on a relatively large scale application. The testing libraries mainly focused on unit tests and end to end tests.</p>
                <br/>
            </div>
        </>
    );
}

export default RingOfReciprocity;
