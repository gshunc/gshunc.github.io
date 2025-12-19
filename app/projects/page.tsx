import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedSection from "../components/AnimatedSection";
import CollapsibleText from "../components/CollapsibleText";
import ClubProgress from "../components/ClubProgress";
config.autoAddCss = false;

const projects_page = () => {
  return (
    <main className="min-h-full">
      <div className="pb-5 pt-20 lg:ml-20 lg:mr-20 flex flex-col">
        <AnimatedSection>
          <p className="text-2xl lg:text-3xl font-semibold mt-5">
            Projects and Pursuits
          </p>
        </AnimatedSection>

        <div className="flex lg:min-h-screen flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-10 lg:mb-10">
          {/* Professional Section with Timeline */}
          <AnimatedSection>
            <div className="text-3xl font-normal underline">Professional</div>
          </AnimatedSection>

          <div className="relative mt-5">
            {/* MongoDB */}
            <AnimatedSection delay={0.1}>
              <div className="relative group">
                {/* Timeline dot */}
                <div className="p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
                  <p>
                    <span className="text-xl lg:text-xl text-green-500 font-medium">
                      MongoDB{" "}
                      <span className="text-base text-gray-400 font-normal">
                        Software Engineer Intern
                      </span>
                    </span>
                    <span className="text-md lg:text-lg text-black">
                      {" - Jun 2025 - Aug 2025"}
                    </span>
                  </p>
                  <CollapsibleText
                    className="mt-3 text-gray-700"
                    previewLength={180}
                  >
                    {
                      "Worked on the Atlas Growth Platforms team building an internal load testing tool, the first of its kind for MongoDB Atlas. This tool was used to stress test a brand new service for the MongoDB Atlas-Vercel native integration. Spent lots of time writing bash and python scripts to automate the process of setting up and tearing down the test environment. They (my manager) told me lots of people were interested in my tool, so that's great!"
                    }
                  </CollapsibleText>
                  <Link
                    href="https://vercel.com/marketplace/mongodbatlas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-bold text-blue-500 group/link text-sm"
                  >
                    <span className="underline">{"Vercel Marketplace"}</span>
                    <span className="inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transform-none ml-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Momentus */}
            <AnimatedSection delay={0.2}>
              <div className="relative group">
                <div className="p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
                  <p>
                    <span className="text-xl lg:text-xl text-purple-700 font-medium">
                      Momentus Technologies{" "}
                      <span className="text-base text-gray-400 font-normal">
                        Software Engineer Intern
                      </span>
                    </span>
                    <span className="text-md lg:text-lg text-black">
                      {" - May 2024 - Aug 2024"}
                    </span>
                  </p>
                  <CollapsibleText
                    className="mt-3 text-gray-700"
                    previewLength={180}
                  >
                    {
                      "Pitched and built the first AI tool for the company back when RAG was just starting to get traction. Allowed for semantic search over and chat with hundreds of event documents. Other than that I spent most of my time working in Vue, refactoring the app to use Vue3, new state management system and updating the UI. Also rebuilt their PDF export tool in using basically jQuery which was strange but interesting."
                    }
                  </CollapsibleText>
                </div>
              </div>
            </AnimatedSection>

            {/* Tradepending */}
            <AnimatedSection delay={0.3}>
              <div className="relative group">
                <div className="p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
                  <p>
                    <span className="text-xl lg:text-xl text-orange-400 font-medium">
                      Tradepending{" "}
                      <span className="text-base text-gray-400 font-normal">
                        Software Engineer Intern
                      </span>
                    </span>
                    <span className="text-md lg:text-lg text-black">
                      {" - May 2023 - Aug 2023"}
                    </span>
                  </p>
                  <CollapsibleText
                    className="mt-3 text-gray-700"
                    previewLength={180}
                  >
                    {
                      "Came in during my freshman summer knowing next to nothing about full stack development besides what was quickly taught in my CSSG Education Team experience. Ended up shipping somewhere between 5-7 features across their main platform for car dealerships staff and salespeople. Personally built a team management admin system, a billing and contract management page, site settings, an inventory management page, and more. This was all React, Node.js, RTK Query, and MongoDB."
                    }
                  </CollapsibleText>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Research Section */}
          <AnimatedSection className="mt-10">
            <div className="text-3xl font-normal underline">Research</div>
          </AnimatedSection>

          {/* AURA Project */}
          <AnimatedSection delay={0.1}>
            <div className="mt-5 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
              <p>
                <span className="text-xl lg:text-xl text-sky-400 font-medium">
                  AURA Project
                  <span className="text-base text-gray-400 font-normal">
                    : Deep Learning, WI-FI CSI, Next.js, MongoDB
                  </span>
                </span>
                <span className="text-md lg:text-lg text-black">
                  {" - Dec 2023 - May 2024"}
                </span>
              </p>
              <div className="flex flex-row mb-2 mt-3 gap-5">
                <Link
                  href={"https://github.com/gshunc/react-aura-page"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-500 group/link text-sm"
                >
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <span className="underline">{"Github"}</span>
                  <span className="hidden lg:inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transform-none ml-1">
                    →
                  </span>
                </Link>

                <Link
                  href={"https://ei.cs.unc.edu/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-500 group/link text-sm"
                >
                  <span className="underline">
                    UNC Embedded Intelligence Lab
                  </span>
                  <span className="hidden lg:inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transform-none ml-1">
                    →
                  </span>
                </Link>
              </div>
              <CollapsibleText className="text-gray-700" previewLength={200}>
                {
                  "I worked in lab under Professor Shahriar Nirjon and a PhD Researcher. For the lab, I built a data visualization and analytics dashboard for a WIFI CSI deep learning signal analysis project. Remodeled system backend to ensure fast data writes and proper indexing for MongoDB Database. Read a bunch of papers. The platform I built was used for a study with UTSA and Florida State schools of nursing using wifi-based movement detection to monitor patient behavior and activity statistics for alzheimers and cancer patients."
                }
              </CollapsibleText>
            </div>
          </AnimatedSection>

          {/* Mentored Research */}
          <AnimatedSection delay={0.2}>
            <div className="mt-2 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
              <p>
                <span className="text-xl lg:text-xl text-sky-400 font-medium">
                  Mentored Research
                  <span className="text-base text-gray-400 font-normal">
                    : Agents, LLMs, Prompt Engineering, Javascript
                  </span>
                </span>
                <span className="text-md lg:text-lg text-black">
                  {" - Dec 2024 - May 2025"}
                </span>
              </p>
              <div className="flex flex-row mt-3 mb-2 gap-5">
                <Link
                  href={"https://github.com/gshunc/adb-executor"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-500 group/link text-sm"
                >
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <span className="underline">{"Github"}</span>
                  <span className="hidden lg:inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transform-none ml-1">
                    →
                  </span>
                </Link>
              </div>
              <CollapsibleText className="text-gray-700" previewLength={200}>
                {
                  "Kept working in the embedded intelligence lab as a part of a mentored research class. Built a basic agent system to collaborate with users on playing 2048 (a little silly but a decent case study for a mobile activity requiring human strategy). The goal was twofold, to establish a system that kept users in the loop for operating mobile devices, and to investigate the extent to which LLMs can listen to user strategy for long term strategic tasks. Wrote a demo abstract, accepted to and presented at Sensys 2025 in Irvine, CA during CPS-IoT week to good reception."
                }
              </CollapsibleText>
            </div>
          </AnimatedSection>

          {/* Clubs Section */}
          <AnimatedSection className="mt-10 w-full">
            <div className="text-3xl font-normal underline mb-5">
              Clubs and Organizations
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="w-full">
            <section className="border-2 border-black rounded-xl w-full p-6 mb-5 transition-all duration-300 hover:shadow-xl">
              <ClubProgress
                name="CS + Social Good"
                steps={[
                  "Developer",
                  "Education Team TA",
                  "Cofounder CSSG Labs/Strategy Lead",
                  "VP of Education",
                  "President",
                ]}
                color="teal"
              />
              <p className="text-gray-700 mt-3 text-sm">
                Check out the website I built:{" "}
                <Link
                  href="https://cssgunc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-500 group/link text-sm"
                >
                  <span className="underline">{"CSSG Website"}</span>
                  <span className="inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transform-none ml-1">
                    →
                  </span>
                </Link>
              </p>
              <ClubProgress
                name="Carolina Choir"
                steps={["Outreach/Publicity Lead", "Tech Lead"]}
                color="yellow"
              />
              <ClubProgress
                name="ACM Carolina"
                steps={["Member", "Treasurer"]}
                color="gray"
                inactive
              />
              <ClubProgress
                name="Undergraduate Student Government"
                steps={["General Staff"]}
                color="gray"
                inactive
              />
              <ClubProgress
                name="Biokind UNC"
                steps={["Founding Data Analyst"]}
                color="gray"
                inactive
              />
            </section>
          </AnimatedSection>

          {/* Projects Section */}
          <AnimatedSection className="mt-5">
            <div className="text-3xl font-normal underline">Projects</div>
          </AnimatedSection>

          {/* LLM Personalization */}
          <AnimatedSection delay={0.1}>
            <div className="mt-5 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
              <p>
                <span className="text-xl lg:text-xl text-pink-500 font-medium">
                  Mechanistic Origins of Personalization in LLMs
                </span>
              </p>
              <CollapsibleText
                className="mt-3 text-gray-700"
                previewLength={250}
              >
                {
                  "A project for my COMP 790 course on LLM Alignment. My groupmates and I set out to understand what's actually happening inside language models when they personalize responses based on user identity, something that's become ubiquitous in chatbots but remains poorly understood mechanistically. Working with Qwen 2.5-7B-Instruct, we extracted persona vectors for nine identities across religion and race by comparing model activations under personalized versus neutral conditions. What we found surprised us: racial identities all activate at roughly the same depth (layers 18-22), but religious identities are encoded at wildly different layers. Islam peaks at layer 10, Christianity at layer 20, and Christianity shows dramatically stronger steering effects than other faiths, possibly reflecting training data composition. The most exciting result came from our composition experiment: we averaged the strongest vectors from each religion into a single \"Universal Religious Vector,\" then subtracted it during inference. This dropped religiosity scores from around 90% to under 1% across all four religions we tested, and crucially, MMLU performance stayed intact. It's a proof of concept that you can surgically remove category-level bias without retraining or degrading general capabilities, which opens up interesting possibilities for lightweight, targeted model interventions."
                }
              </CollapsibleText>
              <div className="mt-5 self-center flex gap-5 justify-center">
                <iframe
                  src="/790/COMP790 Project.pdf"
                  width="400px"
                  height="600px"
                  className="border-2 border-black rounded-xl"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* MathRouter */}
          <AnimatedSection delay={0.2}>
            <div className="mt-2 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
              <p>
                <span
                  className="text-xl lg:text-xl text-orange-500 font-medium"
                  id="MathRouter"
                >
                  MathRouter
                </span>
                <span className="text-base text-gray-400">
                  : Python, Tensorflow, Numpy, OpenAI API, Gemini API, Neural
                  Networks
                </span>
              </p>
              <CollapsibleText
                className="mt-3 text-gray-700"
                previewLength={200}
              >
                {
                  "MathRouter is a project completed for my machine learning class at UNC. Our goal was to create a router system to determine which type of model is best suited for solving certain difficulty tiers of math problems. Our motivation was to determine how we could save users money by using the cheapest model capable of solving a given problem. We used a combination of neural networks and OpenAI's API to determine the best model for the job. We also used a combination of numpy and tensorflow to train the models and evaluate their performance. Processing over 5000 problems, solved and judged using LLMs with a custom rubric with structured output, we were able to train a neural network classifier to determine to which tier of difficulty a given problem should be assigned (between unsolvable, GPT 4.1-mini, GPT 4.1, and o4-mini). We also did cost analysis to determine savings based on the model choice."
                }
              </CollapsibleText>
              <div className="mt-5 self-center flex gap-5 justify-center flex-wrap">
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
            </div>
          </AnimatedSection>

          {/* RiceSavers */}
          <AnimatedSection delay={0.3}>
            <div className="mt-2 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1">
              <p>
                <span className="text-xl lg:text-xl text-green-500 font-medium">
                  RiceSavers
                </span>
                <span className="text-base text-gray-400">
                  : Python, Tensorflow, Flask, HTML, CSS, Javascript
                </span>
              </p>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-yellow-100 border-2 border-yellow-400 text-yellow-700 font-semibold text-sm">
                🏆 Best Junior Hack 2022
              </div>
              <CollapsibleText
                className="mt-3 text-gray-700"
                previewLength={200}
              >
                {
                  'My first real project in college, "RiceSavers" was my team\'s submission for HackNC 2022. In November of 2022, my team and I were all very new to college, didn\'t know each other very well, and weren\'t exceedingly confident that we would be able to do much of anything at the contest. As we began to brainstorm and look over the categories to compete in, we noticed a "John Deere - \'Best Agricultural Hack\'" category. We decided that we might as well pursue it, and created a project using Tensorflow and Keras with a JS and HTML frontend, designed to detect disease in images of rice plants. Despite more than half of our team coming down with the flu, we managed to hack together a model that had a respectable accuracy. Working through the night, we went to record our project overview video and submit. Not expecting to win much of anything given the circumstances, most of our members opted to go home and sleep off their illness. The two of us that decided to attend the award ceremony were shocked and excited to hear that we were selected for the "Best Junior Hack" prize alongside one other team. You can see an image of the award ceremony below, as well as a link to the devpost for the project. (If you happen to watch the video, you can hear how sick we were!)'
                }
              </CollapsibleText>
              <Link
                href="https://devpost.com/software/rice-savers-through-machine-learning"
                rel={"noopener noreferrer"}
                target="_blank"
                className="inline-block mt-3 font-bold text-green-500 group/link text-sm"
              >
                <span className="underline">{"Devpost"}</span>
                <span className="inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transform-none ml-1">
                  →
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default projects_page;
