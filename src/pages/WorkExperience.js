import WorkExpCard from "../components/WorkExpCard";
import {
  BootstrapIcon,
  CsharpIcon,
  CssIcon,
  DockerIcon,
  DotnetCoreIcon,
  HtmlIcon,
  JavascriptIcon,
  PythonIcon,
  ReactIcon,
  SqlIcon,
  TypescriptIcon,
  GCPIcon,
} from "../icons/icons";

export default function WorkExperience() {
  return (
    // svg adapted from https://safetpojskic.com/
    <div className="w-8/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12 pb-10 md:px-0 px-5 xl:text-base text-xs text-left contentpage sm:pt-36 pt-64 flex flex-col">
      <div id="treething" class="absolute -ml-16 lg:-ml-20 2xl:-ml-32 mt-10">
        <svg
          viewBox="0 0 20 2200"
          width="20"
          height="2200"
          class=" ml-4 block"
          aria-hidden="true"
        >
          <path
            d="M 1 0V -36 l 18 24 V 1931.2 l -18 24V 2000"
            fill="none"
            stroke="#9091A0"
            stroke-opacity="0.36"
          ></path>
        </svg>
      </div>

      <div>
        <WorkExpCard
          title={"Venti Technologies"}
          role="Software Engineer"
          duration="Oct 2026 - Present"
          description={
            <div>
              <p>
                {"•"} Focusing on infra and devops in order to allow developers deploy services with more confidence. 
              </p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <PythonIcon/> <GCPIcon />
            </div>
          }
        />
        <WorkExpCard
          title={"NuPoint"}
          role="Founding Engineer"
          duration="Sept 2025 - Sept 2026"
          description={
            <div>
              <p>
                {"•"} Mainly worked with building up the infra from zero, utilising GCP tools like Cloud Build, Compute Engine, Cloud Storage and Cloud SQL to support our services.
              </p>
              <p>
                {"•"} Built backend systems for processing of data on the cloud and to deliver information back to the frontend with next to no latency.
              </p>
              <p>
                {"•"} Built frontend phone applications as well as other web interfaces that interact with the backend server in order to serve data to customers in a user friendly format.
              </p>
              <p>
                {"•"} Built website at <a href="https://nupoint.sg" className="underline">nupoint.sg</a>
              </p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <PythonIcon/> <ReactIcon /> < GCPIcon/>
            </div>
          }
        />
        <WorkExpCard
          title={"Venti Technologies"}
          role="Full Stack Software Engineer Intern"
          duration="Feb 2025 - Nov 2025"
          description={
            <div>
              <p>
                {"•"} Transformed realtime in-production services into horizontally scalable systems using workers, Redis, and RabbitMQ.
              </p>
              <p>
                {"•"} Built, deployed and shipped a horizontally scalable, standalone auditing microservice to customers.
              </p>
              <p>
                {"•"} Developed a custom Streamlit fork to integrate Redis-based caching, optimising data load times and server load.
              </p>
              <p>
                {"•"} Full-stack development using Python (FastAPI) and React, regular deployments with k8s and Helm.
              </p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <PythonIcon/> <ReactIcon /> <TypescriptIcon />
            </div>
          }
        />
        <WorkExpCard
          title={"CSIntelligence"}
          role="Junior SOC Analyst"
          duration="Feb 2020 - Jun 2020"
          description={
            <div>
              <p>
                {"•"} Performed daily threat hunts to find any malicous activity
                that passed the checks of the IDS SaaS.
              </p>
              <p>
                {"•"} Maintained internal applications and scripts used to speed
                up workflows.
              </p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <CsharpIcon /> <DotnetCoreIcon /> <PythonIcon /> <ReactIcon />{"•"}
              <SqlIcon /> <TypescriptIcon /> <BootstrapIcon />
            </div>
          }
        />
        <WorkExpCard
          title={"CSIntelligence"}
          role="Software Development Intern"
          duration="Sep 2019 - Jan 2020"
          description={
            <div>
              <p>
                {"•"} Created full-stack internal applications for employees.
              </p>
              <p>
                {"•"} Reverse engineered external API for SaaS and created a
                nicer UI for the SOC team to improve workflows.
              </p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <CsharpIcon /> <DotnetCoreIcon /> <PythonIcon /> <ReactIcon />{"•"}
              <SqlIcon /> <TypescriptIcon /> <BootstrapIcon />
            </div>
          }
        />
        <WorkExpCard
          title={"Finesse Digital"}
          role="Software Development Intern"
          duration="Sep 2018 - Oct 2018"
          description={
            <div>
              <p>{"•"} Converted designs into live, interactive pages.</p>
              <p>{"•"} Automated environment setup with docker.</p>
            </div>
          }
          languages={
            <div className="flex justify-end flex-wrap">
              <HtmlIcon /> <CssIcon /> <JavascriptIcon /> <BootstrapIcon />{"•"}
              <DockerIcon />
            </div>
          }
        />
        <div className="md:p-5"></div>
      </div>
    </div>
  );
}
