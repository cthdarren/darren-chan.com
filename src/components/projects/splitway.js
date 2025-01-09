import GalleryCarousel from "../GalleryCarousel";
import splitway1 from "../../assets/pictures/splitway1.jpg"
import splitway2 from "../../assets/pictures/splitway2.jpg"
import splitway3 from "../../assets/pictures/splitway3.jpg"
import splitway4 from "../../assets/pictures/splitway4.jpg"
function Splitway() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <br/>
                <p>
                    Work in progress!
                    <br/>
                    <br/>
A bill splitting app to streamline expense management between groups and friends, making it easier to track and settle shared costs. Especially when travelling.</p>
                <br/>
                <p>My first project using React Native, hoping to actually deploy this one and upload it to the Play Store!</p>
            </div>
            <div id="project_carousel">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Gallery</p>
            <GalleryCarousel picture_array={[splitway1, splitway2, splitway3, splitway4]}/>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>
                    Coming soon!
                </p>
            </div>
        </>
    );
}

export default Splitway;
