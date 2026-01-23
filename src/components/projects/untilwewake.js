import GalleryCarousel from "../GalleryCarousel";

// import uww1 from "../../assets/pictures/uww1.png"
// import uww2 from "../../assets/pictures/uww2.png"
// import uww3 from "../../assets/pictures/uww3.png"
// import uww4 from "../../assets/pictures/uww4.png"
// import uww5 from "../../assets/pictures/uww5.png"
// import uww6 from "../../assets/pictures/uww6.png"
// import uww7 from "../../assets/pictures/uww7.png"
// import uww8 from "../../assets/pictures/uww8.png"
// import uww9 from "../../assets/pictures/uww9.png"
// import uww10 from "../../assets/pictures/uww10.png"

function UntilWeWake() {
    return (
        <>
            <div id="description">
                <p className="text-3xl mb-3">Description</p>
                <p>
                    Until We Wake is a 2D action platformer about Liam, a doting father on a quest to look for his missing daughter. The combat revolves around precise timing of dodges and landing counter attacks to defeat enemies while being immersed in a heart-wrenching story about love, betrayal and sacrifice.
               </p>
                <br/>
                <p>
                    This project was part of the course 50.033 Game Design &amp; Development. Another special thanks to Professor <a href="natalieaguswebsite.com"><u>Natalie Agus</u></a> for her passionate teaching, patience in answering questions and love that she gave all her students throughout this course
                </p>
                <p>
                    This game was a monumental group effort, and I believe that we well overdelivered on what was required for a school project.
                </p>
                <br/>
                <p>
                    I've always been a lover of story rich games, and this was the first time I had the opportunity of making such a game. In my personal opinion, this is my greatest work made out of university. Special thanks to <a href="aarynwebsite.com"><u>Aaryn Xie</u></a> for the beautiful hand-drawn art for the entire game, <a href="aarynwebsite.com"><u>Haresh Jayant </u></a> for the excellent coordination and creation of boss mechanics, <a href="aarynwebsite.com"><u>Jing Yee</u></a> for the amazing sound design, as well as <a href="aarynwebsite.com"><u>Cai Ying</u></a> and Kuang Yun for the enemies.
 </p>
                <br/>
            </div>
            <div id="project_carousel">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Gallery</p>
            <GalleryCarousel picture_array={[]}/>
            </div>
            <div id="project_reflect">
                <span className="bggradienthorizontal w-full h-[1px] my-5 block"></span>
                <p className="text-3xl mb-4">Reflections</p>
                <p>
                    This was one of the most if not the most enjoyable projects that I've worked on throughout my four years in SUTD. The feeling of pouring all my love and hard work into this game for it to turn out how I wanted it and showcased at the end to the whole class is euphoric.
                </p>
                <br/>
                <p>
                    This project taught me alot on prioritising the more important things to do and being able to distribute work properly and promptly at the start of a project. Due to the fact that the scope of this project was so ridiculously large for a school project, I had to shave off hours of sleep and also sacrifice the grades of my other courses (thank you so much to my group mates from other courses).
                </p>
                <br/>
                <p>
                    If I had to redo everything from the start again, I would most likely still do the same thing. All the mistakes, poor decisions and scrapped code has amalgamated into this piece of art under the name of "Until We Wake", and I would not trade it for any other experience.
                </p>
                <br/>
                <p>
                    However, I do think that some bugs could definitely be fixed as well as certain parts that can be further polished. We do intend on releasing this game some day after ironing out the rest of the issues. We hope that you look forward to it.
                </p>
                <br/>
            </div>
        </>
    );
}

export default UntilWeWake;
