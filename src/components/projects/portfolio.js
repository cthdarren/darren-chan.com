import GalleryCarousel from "../GalleryCarousel";
import port1 from "../../assets/pictures/port1.png"
import port2 from "../../assets/pictures/port2.png"
import port3 from "../../assets/pictures/port3.png"

function Portfolio() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <p>
                    My portfolio plans to showcase my skillsets and experiences as a sort of documentation of my journey as well as a personal project to practice the web development and design skills that I currently still have.
               </p>
            </div>
            <div id="project_carousel">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Gallery</p>
            <GalleryCarousel picture_array={[port1, port2, port3]}/>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>This portfolio wasn't very technically challenging, but more of tedious as I had to input much of the content manually for each project. I suspect this would only be hard for the first time. </p>
                <br/>
                <p>
                    I managed to brush up on css and managed to create many components from pure css without installing any dependecies aside from React. This was additionally deployed to my domain through DigitalOcean using GitHub Education credits.
                </p>
                <br/>
                <p>
                    I could have put all projects into a json file for easier managing of data. Maybe a future update?
                </p>
            </div>
        </>
    );
}

export default Portfolio;
