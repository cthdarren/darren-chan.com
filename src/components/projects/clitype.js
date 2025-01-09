import GalleryCarousel from "../GalleryCarousel";
import clitype1 from "../../assets/pictures/clitype1.png"
import clitype2 from "../../assets/pictures/clitype2.png"
import clitype3 from "../../assets/pictures/clitype3.png"
function CliType() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <br/>
                <p>
                Have a typing test at your fingertips with CLI Type!, allowing you to choose between multiple modes of typing and different variety of word lists to choose from. 
</p>
            </div>
            <div id="project_carousel">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Gallery</p>
            <GalleryCarousel picture_array={[clitype1, clitype2, clitype3]}/>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>
                    Manipulating the terminal is quite challenging. Many more factors like having to manage the users cursor and keeping track of how many lines each output will produce will make it much more complex as compared to web development. 
                </p>
                <br/>
                <p>Managing the keyboard directly was a pain as well, as sometimes I would mess up the input like forgetting to close the keyboard reading and end up not being able to ctrl+C to exit from the application.</p>
            </div>
        </>
    );
}

export default CliType;
