"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faFileLines,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "LinkedIn",
    message: "Visit my LinkedIn!",
    href: "https://www.linkedin.com/in/george-harris-19245620b/",
    isReferrer: true,
    fa: faLinkedin,
  },
  {
    name: "Github",
    message: "View my code!",
    href: "https://www.github.com/gshunc/",
    isReferrer: true,
    fa: faGithub,
  },
  {
    name: "Pursuits",
    message: "Check out what I have going on.",
    href: "/projects",
    isReferrer: false,
    fa: faCode,
  },
  {
    name: "About Me",
    message: "Learn what makes me, me!",
    href: "/my-story",
    isReferrer: false,
    fa: faUser,
  },
  {
    name: "Resume",
    message: "See my experience!",
    href: "/resume/resume.pdf",
    isReferrer: true,
    fa: faFileLines,
  },
  {
    name: "Email",
    message: "Email me at gsh@unc.edu!",
    href: "mailto:gsh@unc.edu",
    isReferrer: true,
    fa: faEnvelope,
  },
];

const miniLinks = [
  {
    name: "Reading List",
    message: "",
    href: "/reading-list",
    isReferrer: false,
    fa: null,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex lg:flex-col lg:content-center pb-2 lg:pb-0 lg:pt-10 rounded-t-lg lg:rounded-none border-l-2 border-t-2 border-r-2 lg:border-t-0 lg:border-r-0 lg:w-72 lg:overflow-y-auto">
      <div className="flex flex-row justify-between w-screen lg:space-x-0 mt-5 lg:mt-12 pl-3 pr-3 lg:pl-8 lg:pr-8 lg:container lg:grid lg:grid-cols-1 lg:text-left lg:float-right">
        {routes.map((link) => (
          <Link
            href={link.href}
            className="ml-1 mr-1 lg:ml-0 lg:mr-0 group rounded-lg  lg:border lg:border-transparent lg:px-5 lg:py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
            target={link.isReferrer ? "_blank" : "_self"}
            rel={link.isReferrer ? "noopener noreferrer" : ""}
            key={link.name}
          >
            <h2
              className={`text-xs flex flex-col text-center font-semibold lg:text-left lg:text-lg lg:block`}
            >
              {link.fa && <FontAwesomeIcon icon={link.fa} />} {link.name}{" "}
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`hidden lg:block max-w-[30ch] text-sm opacity-50`}>
              {link.message}
            </p>
          </Link>
        ))}
        {pathname != "/" && (
          <Link
            href="/"
            className="block group rounded-lg lg:border lg:px-5 lg:py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2
              className={`text-xs flex flex-col lg:block lg:text-lg font-semibold`}
            >
              <FontAwesomeIcon icon={faHome} /> Home
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
        )}
      </div>
      <div className="flex flex-row justify-between w-screen lg:space-x-0 lg:mt-12 pl-3 pr-3 lg:pl-8 lg:pr-8 lg:container lg:grid lg:grid-cols-1 lg:text-left lg:float-right">
        <p className="font-base font-semibold px-5 underline">Fun Stuff</p>
        {miniLinks.map((link) => (
          <Link
            href={link.href}
            className="ml-1 mr-1 lg:ml-0 lg:mr-0 group rounded-lg  lg:border lg:border-transparent lg:px-5 lg:py-2 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
            target={link.isReferrer ? "_blank" : "_self"}
            rel={link.isReferrer ? "noopener noreferrer" : ""}
            key={link.name}
          >
            <h2
              className={`text-xs flex flex-col text-center font-semibold lg:text-left lg:text-sm lg:block`}
            >
              {link.fa && <FontAwesomeIcon icon={link.fa} />} {link.name}{" "}
              <span className="hidden lg:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`hidden lg:block max-w-[30ch] text-sm opacity-50`}>
              {link.message}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
