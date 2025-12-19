"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
config.autoAddCss = false;

export default function Home() {
  const [visiblePhotos, setVisiblePhotos] = useState<Record<string, boolean>>({});

  const togglePhotos = (key: string) => {
    setVisiblePhotos((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="lg:ml-20 lg:mr-20 mr-5 ml-5 flex flex-col lg:block lg:ml-0 lg:mt-5 scroll-auto lg:mr-20 pb-5 pt-20">
      <div className="self-end w-fit font-semibold text-3xl animate-typing">
        George Harris.
      </div>
      <p className="text-center lg:text-left mt-5 mb-5 w-50">
        {"I study computer science and math at "}
        <span className="font-extrabold text-sky-300">{"UNC Chapel Hill"}</span>
        {". I'm originally from "}
        <span className="font-extrabold text-red-500">{"St. Louis, MO"}</span>
        {
          ", and have a professional passion for tech and social good, AI research, and entrepreneurship. Outside of that, I'm interested in history, philosophy, cooking, college basketball, fitness, and singing. Learn more about me on the "
        }
        <a href="/my-story" className="font-extrabold underline group">
          {"My Story"}
          <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </a>
        {" page."}
      </p>
      <p className="text-center lg:text-left mt-10 mb-5 w-50">
        {
          "As I briefly outlined above, I'm professionally, but also personally, interested in many aspects of tech, especially in entrepreneurship and innovation. I am at my best when I am a part of or leading a high-functioning team, but I also like to build on my own. You can take a deeper dive into what I'm working on in the "
        }
        <a href="/projects" className="font-extrabold underline group">
          {"Projects"}
          <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </a>

        {" page."}
      </p>
      <div className="text-center lg:text-left mt-10 mb-5 w-50">
        <p className="font-extrabold mb-1">{"Recently:"}</p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <motion.li>
            <span className="font-semibold">
              <span className="">research engineering</span> @{" "}
              <Link
                href="https://github.com/aiming-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <span className="text-sky-300"> AIMING Lab at UNC </span>
              </Link>
            </span>
            &rarr; building an automated dataset curation platform to
            crowdsource advanced mathematics problems, reasoning traces, and
            solutions, check for quality, correctness and duplication, and
            automatically benchmark leading LLMs against them.
          </motion.li>
          <motion.li>
            <span className="font-semibold">
              <span className="">donating my time</span> @{" "}
              <Link
                href="https://www.onedayhealth.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <span className="text-orange-500"> OneDay Health </span>
              </Link>
            </span>
            &rarr; building a distributed agent evaluaton pipeline to help
            deploy a healthcare agent. scaling medical access across 45 field
            hospitals and hundreds of thousands of patients across Northern
            Uganda.
          </motion.li>
          <motion.li>
            <span className="font-semibold">
              swe intern @ <span className="text-green-500">MongoDB</span>{" "}
            </span>
            &rarr; working on the Atlas Growth Platforms team, building load
            testing infrastructure and testing tool for a new{" "}
            <Link
              className="underline"
              href="https://vercel.com/marketplace/mongodbatlas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>integration with Vercel</span>
            </Link>{" "}
            <button
              onClick={() => togglePhotos("mongodb")}
              className="ml-1 text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
            >
              {visiblePhotos["mongodb"] ? "hide photos" : "see photos"}
            </button>
            <AnimatePresence>
              {visiblePhotos["mongodb"] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 mb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <Image
                    src="/homepage/mongodb/nyc1.JPG"
                    alt="MongoDB internship"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/homepage/mongodb/nyc2.jpg"
                    alt="MongoDB NYC office"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/homepage/mongodb/nyc3.jpg"
                    alt="MongoDB team"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/homepage/mongodb/nyc4.jpg"
                    alt="NYC moments"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li>
            <span className="font-semibold">
              co-president @{" "}
              <span className="text-teal-400">UNC CS + Social Good</span>
            </span>{" "}
            &rarr; running a nonprofit student org to build technical solutions
            for other nonprofits. helped reorganize engineering team and
            introduced new programs to mentor members. greatly increased
            velocity, oversaw 6 new projects over the course of the year. built
            a{" "}
            <Link
              className="underline"
              href="https://cssgunc.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>new website</span>
            </Link>{" "}
            for the org.
            <button
              onClick={() => togglePhotos("cssg")}
              className="ml-1 text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
            >
              {visiblePhotos["cssg"] ? "hide photos" : "see photos"}
            </button>
            <AnimatePresence>
              {visiblePhotos["cssg"] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 mb-3"
                >
                  <Image
                    src="/homepage/cssg/cssg1.jpg"
                    alt="CSSG team"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li>
            <span className="font-semibold">
              research @{" "}
              <span className="text-blue-500">
                UNC Embedded Intelligence Lab
              </span>
            </span>{" "}
            &rarr; presented mobile gaming agent and llm mobile device control
            research at Sensys 2025 (CPS-IoT Week) in Irvine, CA.
            <button
              onClick={() => togglePhotos("irvine")}
              className="ml-1 text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
            >
              {visiblePhotos["irvine"] ? "hide photos" : "see photos"}
            </button>
            <AnimatePresence>
              {visiblePhotos["irvine"] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 mb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <Image
                    src="/homepage/irvine/irvine1.jpg"
                    alt="Sensys presentation"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/homepage/irvine/irvine2.jpg"
                    alt="Irvine conference"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li>
            <span className="font-semibold">
              co-founded a <span className="text-yellow-400">band</span>
            </span>{" "}
            &rarr; I sing for <span className="text-yellow-400">Pollen</span>, a
            band I started with my close friends. we'll be playing many more
            shows this spring.
            <button
              onClick={() => togglePhotos("pollen")}
              className="ml-1 text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
            >
              {visiblePhotos["pollen"] ? "hide photos" : "see photos"}
            </button>
            <AnimatePresence>
              {visiblePhotos["pollen"] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 mb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <Image
                    src="/homepage/pollen/pollen1.JPG"
                    alt="Pollen band photo"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                  <video
                    controls
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                    src="/homepage/pollen/pollenMovie.MOV"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li>
            <span className="font-semibold">
              spent last fall abroad in{" "}
              <span className="text-red-500">Madrid</span> @ UC3M
            </span>{" "}
            &rarr; somehow passed all my cs + math classes. lived in a student
            residence w/ communal kitchen; cooked for friends, went to 8
            countries, learned some spanish.
            <button
              onClick={() => togglePhotos("madrid")}
              className="ml-1 text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
            >
              {visiblePhotos["madrid"] ? "hide photos" : "see photos"}
            </button>
            <AnimatePresence>
              {visiblePhotos["madrid"] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 mb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <Image
                    src="/homepage/madrid/madrid1.JPG"
                    alt="Madrid trip"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/homepage/madrid/madrid2.jpg"
                    alt="Spain travel"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/homepage/madrid/madrid3.jpg"
                    alt="Madrid memories"
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-64 object-cover rounded-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li>
            <span className="font-semibold">trying to read and write more</span>{" "}
            &rarr; check out my{" "}
            <Link className="underline" href="/reading-list">
              reading list
            </Link>
            . reading mostly about philosophy, history, and math.
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
