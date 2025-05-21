import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { Story_Image } from "../components/story_page_components/Story_Image";
import { Spotify_IFrame } from "../components/story_page_components/Spotify_IFrame";
config.autoAddCss = false;

const story_page = () => {
  return (
    <main className="flex min-h-full flex-col ml-5 mr-5 lg:items-start lg:mr-20 lg:ml-0 lg:mt-10">
      <p className="text-2xl lg:text-5xl font-semibold underline mt-5">
        Who am I?
      </p>
      <p className="mt-5 mb-10">
        {
          "I was born October 15th, 2003 in St. Louis, Missouri. I proceeded to grow up a lot (still working on this). I attended Parkway Central High School, where I was involved in a number of organizations (mostly after realizing I should do this for college), serving as Senior Class President and Swim Captain, as well as Secretary of Coding Colts. I had the opportunity to give our Graduation Speech, pictured below."
        }
      </p>
      <Story_Image
        src={"/graduation_speech.JPG"}
        alt={"Graduation speech picture"}
      />

      <p className="text-3xl underline mt-10">My Interests</p>
      <p className="mt-5">
        {
          " As listed on the home page, some of my interests include history, philosophy, cooking, college basketball, singing, and fitness. I want to talk a little about each, here."
        }
      </p>

      <p className={`text-xl mt-10`}>-&gt; History and Philosophy</p>
      <div className="lg:ml-10">
        <p className="mt-5">
          {
            "When I applied to college, I almost decided to apply as a Political Science major with the intent to enter into Law School. Even while entering college and taking courses under my Computer Science major, I contemplated switching my major to Economics and History and pursuing that goal. While I was and am extremely passionate for technology and the tools it can unlock through innovation and entrepreneurship, politics and history was such a strong personal passion of mine that it almost drew me away."
          }
        </p>
        <p className="mt-5">
          {
            "In grade school, History and Social Studies was always my favorite subject, mostly because it didn't feel like I was grinding away at it. At the same time that I was learning interesting new history, I was engaging my writing and communication skills and working on memorization. For me, History was the whole package."
          }
        </p>
        <p className="mt-5">
          {
            "Nowadays, this educational passion has morphed into a personal passion, where I often find myself reading random historical wikipedia articles, and listening to podcasts. Part of me still wants to take more courses in philosophy and history..."
          }
        </p>
      </div>

      <p className="text-xl mt-10">-&gt; Cooking</p>
      <div className="lg:ml-10">
        <p className="mt-5">
          {
            "My interest in cooking was sparked from years of helping my Mom in the kitchen when she needed another hand, which moved into preparing parts of meals on my own, then cooking steaks, and then starting to make my own full meals. The part of cooking I find most fun and fascinating is the science behind it; how every part of cooking a meal is like its own chemical reaction, with technique and ingredients each playing their part in the formula. At the same time, it's easy to let your mind wander and take your time cooking as an active meditation. Cooking is also a great way to share your passions with others and produce a meal that you can be proud of. Also, good food is delicious so there's that."
          }
        </p>
        <p className="mt-5">
          {
            'During my time studying abroad, I was able to try a lot of new foods and cuisines. I also spent my time in a student residence with a communal kitchen where me and my friend Chinmay cooked insane meals, sometimes for multiple of our friends (something I\'m excited to rekindle). Side note, this was one of the best things about Madrid - living within a 2 minute walk of like 3 grocery stores. Shoutout urban living. My favorite recipe that I have made so far has been Pasta Alla Amatriciana from "Salt Fat Acid Heat" by Samin Nosrat, my '
          }
          <Link
            href="https://www.amazon.com/Salt-Fat-Acid-Heat-Mastering/dp/1476753830"
            className="font-bold underline text-orange-900 group"
            rel={"noopener noreferrer"}
            target="_blank"
          >
            {" Favorite Cookbook"}
            <span className="font-bold text-orange-900 hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>
          {"."}
        </p>
        <div className="flex flex-row justify-evenly self-center lg:pr-10 mt-10">
          <Link
            href="https://www.amazon.com/Salt-Fat-Acid-Heat-Mastering/dp/1476753830"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <Story_Image
              src={`/salt_fat_acid_heat.jpg`}
              alt="Cookbook Cover"
            ></Story_Image>
          </Link>
        </div>
      </div>

      <p className="text-xl mt-10">-&gt; Musical Journey</p>
      <div className="lg:ml-10 mb-10">
        <p className="mt-5">
          {
            "Growing up, music was a steady part of my life. From Classic Rock to the Grateful Dead to Jazz to Bluegrass, music was always playing in our house. But my personal music career began in Elementary School Choir, meeting once a week and singing simple songs. My sister was heavily involved in choir, and as she went into Middle School, she joined choir. I did the same, and continued in choir ever since then."
          }
        </p>
        <p className="mt-5">
          {
            "In high school, I participated in two choirs as classes, earning All Suburban honors three times, as well as All State honors my Junior year, and All State Vocal Jazz my Senior year. There, I was honored to be the featured soloist. Finally, Senior Year, I was honored with the "
          }
          <Link
            href="https://www.wwbw.com/pages/arionaward"
            rel={"noopener noreferrer"}
            target="_blank"
            className="group"
          >
            <span className="font-bold text-yellow-400 underline">
              {"Arion Award"}
            </span>
            <span className="font-bold text-yellow-400 hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>
          {
            ', "established in 1948 to give national recognition... for outstanding achievement in band, orchestra or chorus", as well as community and academic achievement. Nowadays, my musical career continues as a part of the '
          }
          <Link
            href="https://music.unc.edu/undergraduate/ensembles/choral/carolinachoir/"
            rel={"noopener noreferrer"}
            target="_blank"
            className="underline font-bold text-sky-300 group"
          >
            Carolina Choir
            <span className="font-bold text-sky-300 hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>

          {` at UNC, where I'm on the choir council as tech director.`}
        </p>
        <p className="mt-5">
          {
            "Junior year of school after getting back from studying abroad, my friends and I started a band called Pollen. We've performed a couple of times and it's one of the best parts of my life."
          }
        </p>
      </div>

      <p className="text-xl mt-10">-&gt; Fitness</p>
      <div className="lg:ml-10 mb-10">
        <p className="mt-5 pb-20">
          {
            "In my life, I have played a number of sports. Baseball, swimming, water polo, football, and tennis, to name a few. In High School, I was Varsity Swim Captain, specializing in distance freestyle, and helped lead my team to a conference title. Nowadays, I am not a part of any organized athletic teams, but fitness remains a part of my life through regularly going to the gym and going on hikes and swims in the summer. I'm also kind of neurotic about healthy eating."
          }
        </p>
      </div>
      <div className="pb-10 self-end w-container">{`Last updated 5/20/25`}</div>
    </main>
  );
};

export default story_page;
