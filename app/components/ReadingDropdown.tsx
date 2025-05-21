"use client";
import { Story_Image } from "./story_page_components/Story_Image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReadingDropdown(props: {
  title: string | JSX.Element;
  author: string;
  content: string | JSX.Element;
  image_src: string;
  image_alt: string;
  is_favorite: boolean;
  targetId: string;
}) {
  const {
    title,
    author,
    content,
    image_src,
    image_alt,
    is_favorite,
    targetId,
  } = props;

  const router = useRouter();

  const [isActive, setActive] = useState(false);

  return (
    <main className="flex flex-row mt-2">
      <div className="peer group">
        <button
          className={`peer w-96 rounded-md text-center content-center select-none border-2 hover:border-black p-3 mt-2
          ${is_favorite ? "font-bold" : ""}`}
          onClick={() => {
            setActive(!isActive);
            if (!isActive) {
              setTimeout(() => {
                router.push("#" + targetId, { scroll: false });

                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }, 1);
            }
          }}
        >
          {title} {"-"} {author}
        </button>
        <div
          className={`w-96 h-fit p-4 mt-1 ${
            isActive
              ? "relative visible opacity-100"
              : "fixed invisible opacity-0"
          } transition-opacity ease-in bg-gray-200 border-2 border-black rounded-md font-light text-sm text-center`}
        >
          {content}
        </div>
      </div>
      <div
        className={`ml-20 mt-2 ${
          isActive
            ? "relative visible opacity-100"
            : "invisible opacity-0 fixed"
        } transition-opacity ease-in`}
      >
        <Story_Image src={image_src} alt={image_alt} />
      </div>
    </main>
  );
}
