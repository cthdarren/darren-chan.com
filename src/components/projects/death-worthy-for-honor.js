import GalleryCarousel from "../GalleryCarousel";

import deathhonor1 from "../../assets/pictures/deathhonor1.png"
import deathhonor2 from "../../assets/pictures/deathhonor2.png"
import deathhonor3 from "../../assets/pictures/deathhonor3.png"
import deathhonor4 from "../../assets/pictures/deathhonor4.png"
import deathhonor5 from "../../assets/pictures/deathhonor5.png"

function DeathWorthyForHonor() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <p>
                    A Death Worthy For Honor is a 2D rougelite action platformer about a samurai who goes by the name of Honor, whom is so strong that he constantly looks for a worthy opponent to finally best him. Collect shells to make Honor stronger by upgrading his stats in order to cause as much damage to Carnifex before the timer runs out to achieve a high score.
                </p>
                <br/>
                <p>You can view the gameplay demo <a href="https://youtu.be/IH6_wPAlyqs"><u>here</u></a>.</p>
            </div>
            <div id="project_carousel">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Gallery</p>
            <GalleryCarousel picture_array={[deathhonor1, deathhonor2, deathhonor3, deathhonor4, deathhonor5]}/>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>
                    This project was part of the course 50.033 Game Design &amp; Development for the midterm game jam. Due to my love for gaming, I wanted to create an exceptional game for the game jam, sacrificing lots of sleep over the two days to come up with (what I think is) a pretty decent game.
                </p>
                <br/>
                <p>
                    This was my first time shipping out an entire game, albeit small. I had great fun creating this game and learning about the extensive use of Scriptable Objects Game Architecture (SOGA).
                </p>
                <br/>
                <p>
                    Some improvements that I do wish I made in time for the submission are: 
                    <ul>
                        <li>
                            Moving the camera higher to not display half of the ground
                        </li>
                        <li>
                            More attacks for Carnifex, including maybe a phase 2
                        </li>
                        <li>
                            Randomised level design rather than a static, exact same battlefield everytime.
                        </li>
                    </ul>
                </p>
                <br/>
            </div>
        </>
    );
}

export default DeathWorthyForHonor;
