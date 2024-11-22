import GalleryCarousel from "../GalleryCarousel";

import wayf1 from "../../assets/pictures/wayf1.png"
import wayf2 from "../../assets/pictures/wayf2.png"
import wayf3 from "../../assets/pictures/wayf3.png"
import wayf4 from "../../assets/pictures/wayf4.png"
import wayf5 from "../../assets/pictures/wayf5.png"
import wayf6 from "../../assets/pictures/wayf6.png"
import wayf7 from "../../assets/pictures/wayf7.png"
import wayf8 from "../../assets/pictures/wayf8.png"
import wayf9 from "../../assets/pictures/wayf9.png"
import wayf10 from "../../assets/pictures/wayf10.png"

function Wayfare() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <p>
                    Wayfare was our take on redefining the tour group scene, bringing the monopoly away from large tour groups and bringing it to the consumer level. Moreover, in order to facilitate a larger user retention rate as well as to promote newer up and coming Wayfarers (Tour guides), we introduced Journeys, a simple short form content feature. Think Klook + TikTok.
               </p>
            </div>
            <div id="project_carousel">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Gallery</p>
            <GalleryCarousel picture_array={[wayf1, wayf2, wayf3, wayf4, wayf5, wayf6, wayf7, wayf8, wayf9, wayf10]}/>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>
                    This project was exceptionally fun to work on. It was my first time building an Android application and using Java as well. Being able to run the application on my very own phone made the experience a very different one from traditional web development or simple tkinter python applications that I have made in the past.
 </p>
                <br/>
                <p>
                    This project was part of the course 50.003 Elements of Software Construction where we mainly learned and explored the different types of software development methodologies, along with the SOLID framework.
                </p>
                <br/>
                <p>
                    We managed to create a fully working prototype with all features complete, except for payments. Video and image uploading with compression, TikTok-like video playing feature, bookings, profiles, reviews, geo location searches with MongoDB, you name it.
                </p>
                <br/>
            </div>
        </>
    );
}

export default Wayfare;
