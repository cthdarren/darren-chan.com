import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsBar from './SkillsBar';

function App() {
  return (

    <div className="App ">
      <div className='container h-100 '>
        <div className='row mt-5'>
          <div className='col-6 col-md-4 col-lg-3 h-100  shadow rounded-bottom p-4 pt-5'>
            <img className="rounded-circle" width="60%" src="https://media.licdn.com/dms/image/D5603AQHORHkYYsqUoQ/profile-displayphoto-shrink_800_800/0/1708154569571?e=1716422400&v=beta&t=uGYBnZvGuVPBvy73e07coAs_dECZl1oDm49uZmYxEL8" ></img>
            <p className='p-2 mt-4 h4'>Darren Chan</p>
            <ul className='ps-4'>
            <li className='text-start small mt-4 mb-0'>BSc. Computer Science & Design</li>
            <li className='text-start small mb-0'>Dip. Cybersecurity & Forensics</li>
</ul>
            <div className='mt-4 text-start'>
              <u>Languages & Frameworks</u>
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/JavaScript-logo.png" name="JavaScript" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/kisspng-python-logo-programmer-fierce-python-cliparts-5ab7bde206fb71.9462244415219911380286.png" name="Python" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/React-icon.svg.png" name="React.js" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/mongodb-svgrepo-com.png" name="MongoDB" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/Csharp_Logo.png" name="C#" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/NET_Core_Logo.svg.png" name="ASP.NET Core" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png" name="MS SQL" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/Java-logo.png" name="Java" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/Spring_Boot.svg.png" name="Spring Boot" />
              <SkillsBar img="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/Bootstrap_logo.svg.png" name="Bootstrap" />
            </div>

          </div>
          <div className='text-start ps-5 pt-5 col  h-100'>
            <p className='display-3 mb-0'>hi, i'm darren.</p>

            <p className='small'>i love creating things, and software is my outlet.</p>
            <a href="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/Resume%20Darren.pdf" className='btn btn-outline-primary me-2'>my resume here.</a>
            {/* <p className='btn btn-outline-primary ms-2'>my projects here.</p> */}

            <p className='h4 mt-4'>a little bit about myself.</p>
            <div className='d-flex flex-column'>
              <p className=''>i'll start with my love for customisation. i love customising my own websites, my own environment, my own keyboard, name it all! in 2017, i took a
                cybersecurity diploma because i thought hacking was cool. <br />as it turns out, hacking <i>is</i> pretty cool, but the theory is pretty dry, and i figured
                it wasn't for me. <br /> during that time, my love for programming blossomed, and i haven't grown tired of it since.
              </p>

              <p className='h4 mt-4'>some fun facts about myself.</p>
              <p><s>i use arch, btw</s> i've reinstalled arch linux three times before finally pushing through with it,
                and it is my main driver til this day (and hopefully for the distant future since i've spent so much time on it). </p>
              <p>i've tried to learn vim and gave up 2 times before also pushing through with it, and now i use a vim plugin in every IDE. </p>
              <p>i finally got around to building this portfolio website because as of the time of writing, i have a career fair in 9 hours
                and i wanted something to show for it.</p>

              <p className='h4 mt-4'>my other hobbies.</p>
              <div className='d-flex justify-content-between'>
                <div className='rounded shadow ' style={{ "width": "31%" }}>
                  <p className='border-bottom p-4'>playing video games.</p>
                  <div className='px-4'>
                    <p className='small'>of course, i play video games. favourite titles include baldur's gate 3, nier: automata and divinity: original sin 2</p>
                    {/* <ul className='m-0 ps-3 small'>
                      <li>baldur's gate 3</li>
                      <li>divinity: original sin</li>
                      <li>honkai: star rail</li>
                    </ul> */}
                    {/* <div className='logopics'>
                      <img className='' width="170" src="https://baldursgate3.game/png/logo-bg3.png" />
                    </div>
<div className='logopics'>
                      <img className='' width="170" src="http://vgboxart.com/resources/logo/15728_divinity-original-sin-2-prev.png" />
                    </div>
                    <div className='logopics'>
                      <img className='' width="170" src="https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png" />
                    </div> */}
                    
                  </div>
                </div>
                <div className='rounded shadow ' style={{ "width": "31%" }}>
                  <p className='border-bottom p-4'>snowboarding.</p>
                  <div className='small px-4'>
                    <p>i've recently picked up snowboarding and have absolutely enjoyed it, hoping to make it a yearly affair!</p>
                    {/* <p>here are some pictures:</p>
                    <div className='hobbypics'>
                      <img className='rounded' width="100" src="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/photo_2024-03-20_02-03-08.jpg" />
                    </div>
                    <div className='hobbypics'>
                      <img className='rounded' width="100" src="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/photo_2024-03-20_02-03-49.jpg" />
                    </div>
                    <div className='hobbypics'>
                      <img className='rounded' width="100" src="https://quagsirecdn.sgp1.cdn.digitaloceanspaces.com/photo_2024-03-20_02-07-46.jpg" />
                    </div> */}
                  </div>
                </div>
                <div className='rounded shadow' style={{ "width": "31%" }}>
                  <p className='border-bottom p-4'>squash.</p>

                  <div className='small px-4'>
                    <p>i've been playing squash since 2013 and still enjoy the sport to this day, it also serves as a good way to keep in shape!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
