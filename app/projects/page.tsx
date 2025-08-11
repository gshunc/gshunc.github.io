import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;

const projects_page = () => {
  return (
    <main className="min-h-full">
      <div className="pb-5 pt-20 lg:ml-20 lg:mr-20 flex flex-col">
        <p className="text-2xl lg:text-3xl font-semibold mt-5">
          Projects and Pursuits
        </p>
        <div className="flex lg:min-h-screen flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-10 lg:mb-10">
          <div className="text-3xl font-normal underline">Professional</div>
          <p className="mt-5">
            <span className="text-xl lg:text-xl text-green-500">MongoDB</span>
            <span className="text-md lg:text-lg text-black">
              {" - Jun 2025 - Aug 2025"}
            </span>
          </p>
          <p className="mt-5 ml-5">
            {
              "Working on the Atlas Growth Platforms team, building scalable A/B and CMAB testing infra for MongoDB Atlas."
            }
          </p>
          <p className="mt-5">
            <span className="text-xl lg:text-xl text-purple-700">
              Momentus Technologies
            </span>
            <span className="text-md lg:text-lg text-black">
              {" - May 2024 - Aug 2024"}
            </span>
          </p>
          <p className="mt-5 ml-5">
            {
              "Mostly worked in Vue, refactoring the app to use Vue3,  new state management system and updating the UI. Also rebuilt their PDF export tool in using basically jQuery which was strange but interesting."
            }
          </p>
          <p className="mt-5">
            <span className="text-xl lg:text-xl text-orange-400">
              Tradepending
            </span>
            <span className="text-md lg:text-lg text-black">
              {" - May 2023 - Aug 2023"}
            </span>
          </p>
          <p className="mt-5 ml-5">
            {
              "Came in during my freshman summer knowing next to nothing about full stack development besides what was quickly taught in my CSSG Education Team experience. Ended up shipping somewhere between 5-7 features accross their main platform for car dealerships staff and salespeople. Personally built a team management admin system, a billing and contract management page, site settings, an inventory management page, and more. This was all React, Node.js, RTK Query, and MongoDB."
            }
          </p>
          <div className="text-3xl font-normal underline mt-5">Research</div>
          <p className="mt-5">
            <span className="text-xl lg:text-xl text-sky-300">
              AURA Project
              <span className="text-base text-gray-400">
                : Deep Learning, WI-FI CSI, Next.js, MongoDB
              </span>
            </span>
            <span className="text-md lg:text-lg text-black">
              {" - Dec 2023 - May 2024"}
            </span>
          </p>
          <div className="flex flex-row mb-2 mt-2 gap-5">
            <Link
              href={"https://github.com/gshunc/react-aura-page"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-500 group"
            >
              <FontAwesomeIcon icon={faGithub} />{" "}
              <span className="underline">{"Github"}</span>
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>

            <Link
              href={"https://ei.cs.unc.edu/"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-500 group"
            >
              <span className="underline">UNC Embedded Intelligence Lab</span>
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          </div>
          <p className="ml-5">
            {
              "I worked in lab under Professor Shahriar Nirjon and a PhD Researcher. For the lab, I built a data visualization and analytics dashboard for a WIFI CSI deep learning signal analysis project. Remodeled system backend to ensure fast data writes and proper indexing for MongoDB Database. Read a bunch of papers."
            }
          </p>
          <p className="mt-5 ml-5">
            {
              "The platform I built was used for a study with UTSA and Florida State schools of nursing using wifi-based movement detection to monitor patient behavior and activity statistics for alzheimers and cancer patients."
            }
          </p>

          <p className="mt-5">
            <span className="text-xl lg:text-xl text-sky-300">
              Mentored Research
              <span className="text-base text-gray-400">
                : Agents, LLMs, Prompt Engineering, Javascript
              </span>
            </span>
            <span className="text-md lg:text-lg text-black">
              {" - Dec 2024 - May 2025"}
            </span>
          </p>
          <div className="flex flex-row mt-2 mb-2 gap-5">
            <Link
              href={"https://github.com/gshunc/adb-executor"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-500 group"
            >
              <FontAwesomeIcon icon={faGithub} />{" "}
              <span className="underline">{"Github"}</span>
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          </div>
          <p className="mb-5 ml-5">
            {
              "Kept working in the embedded intelligence lab as a part of a mentored research class. Built a basic agent system to collaborate with users on playing 2048 (a little silly but a decent case study for a mobile activity requiring human strategy). The goal was twofold, to establish a system that kept users in the loop for operating mobile devices, and to investigate the extent to which LLMs can listen to user strategy for long term strategic tasks."
            }
          </p>
          <p className="mb-5 ml-5">
            {
              "Wrote a demo abstract, accepted to and presented at Sensys 2025 in Irvine, CA during CPS-IoT week to good reception."
            }
          </p>

          <div className="text-3xl font-normal underline mb-5">
            Clubs and Organizations
          </div>
          <section className="border-2 border-black rounded-xl w-full p-4 mb-5">
            <div className="flex flex-row items-end justify-between text-xl lg:text-xl text-teal-300 w-full">
              <p>CS + Social Good</p>
              <p className="text-lg text-gray-400 ml-5">
                Developer -&gt; Education Team TA -&gt; Cofounder CSSG
                Labs/Strategy Lead -&gt; VP of Education -&gt; President
              </p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-xl text-yellow-400 mt-5 w-full">
              <p>Carolina Choir</p>
              <p className="text-lg text-gray-400 ml-5">
                Outreach/Publicity Lead -&gt; Tech Lead
              </p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-xl text-gray-400 mt-5 w-full line-through">
              <p>ACM Carolina</p>
              <p className="text-lg text-gray-400 ml-5">
                Member -&gt; Treasurer
              </p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-xl text-gray-400 mt-5 w-full line-through">
              <p>Undergraduate Student Government</p>
              <p className="text-lg text-gray-400 ml-5">General Staff</p>
            </div>
            <div className="flex flex-row items-end justify-between text-xl lg:text-xl text-gray-400 mt-5 w-full line-through">
              <p>Biokind UNC</p>
              <p className="text-lg text-gray-400 ml-5">
                Founding Data Analyst
              </p>
            </div>
          </section>
          <div className="text-3xl font-normal underline">Projects</div>
          <p className="mt-5">
            <span
              className="text-xl lg:text-xl text-orange-500"
              id="MathRouter"
            >
              MathRouter
            </span>
            <span className="text-base">
              : Python, Tensorflow, Numpy, OpenAI API, Gemini API, Neural
              Networks
            </span>
          </p>
          <p className="mt-5 ml-5">
            {
              "MathRouter is a project completed for my machine learning class at UNC. Our goal was to create a router system to determine which type of model is best suited for solving certain difficulty tiers of math problems. Our motivation was to determine how we could save users money by using the cheapest model capable of solving a given problem. We used a combination of neural networks and OpenAI's API to determine the best model for the job. We also used a combination of numpy and tensorflow to train the models and evaluate their performance. Processing over 5000 problems, solved and judged using LLMs with a custom rubric with structured output, we were able to train a neural network classifier to determine to which tier of difficulty a given problem should be assigned (between unsolvable, GPT 4.1-mini, GPT 4.1, and o4-mini). We also did cost analysis to determine savings based on the model choice."
            }
          </p>
          <div className="mt-5 self-center flex gap-5 justify-center">
            <iframe
              src="/562/COMP562 Project.pdf"
              width="400px"
              height="600px"
              className="border-2 border-black rounded-xl"
            />
            <Image
              src="/562/flowchart.jpeg"
              alt="MathRouter"
              width={600}
              height={400}
              className="border-2 border-black rounded-xl p-10"
            />
          </div>
          <p className="mt-5">
            <span className="text-xl lg:text-xl text-green-500">
              RiceSavers
            </span>
            <span className="text-base">
              : Python, Tensorflow, Flask, HTML, CSS, Javascript
            </span>
          </p>
          <span className="font-bold ml-8 mt-5 text-yellow-300">
            Awarded &quot;Best Junior Hack 2022&quot;
          </span>
          <p className="mt-5 ml-5">
            {
              'My first real project in college, "RiceSavers" was my team\'s submission for HackNC 2022. In November of 2022, my team and I were all very new to college, didn\'t know eachother very well, and weren\'t exceedingly confident that we would be able to do much of anything at the contest. As we began to brainstorm and look over the categories to compete in, we noticed a "Jonn Deere - \'Best Agricultural Hack\'" cateogory. We decided that we might as well pursue it, and created a project using Tensorflow and Keras with a JS and HTML frontend, designed to detect disease in images of rice plants. Despite more than half of our team coming down with the flu, and managed to hack together a model that had a respectable accuracy. Working through the night, we went to record our project overview video and submit. Not expecting to win much of anything given the circumstances, most of our members opted to go home and sleep off their illness. The two of us that decided to attend the award ceremony were shocked and excited to hear that we were selected for the "Best Junior Hack" prize alongside one other team. You can see an image of the award ceremony below, as well as a link to the devpost for the project. (If you happen to watch the video, you can hear how sick we were!) '
            }
          </p>
          <Link
            href="https://devpost.com/software/rice-savers-through-machine-learning"
            rel={"noopener noreferrer"}
            target="_blank"
            className="font-bold text-green-500 group mt-5"
          >
            <span className="underline">{"Devpost"}</span>
            <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default projects_page;
