"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ReadingDropdown from "../components/ReadingDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { books } from "@/app/data/books/books";

const ReadingList = () => {
  return (
    <main className="min-h-screen flex flex-col items-start justify-between pt-10 scroll-smooth">
      <div className="flex flex-col flex-grow">
        <p className="text-2xl lg:text-5xl font-semibold underline mt-5 mb-10">
          Reading List
        </p>
        <section className="flex flex-col flex-grow scroll-smooth overflow-auto">
          {books.map((book, index) => {
            const uniqueId = `${book.title.replace(/\s+/g, "-")}-${index}`; // Create a URL-friendly unique ID
            return (
              <a key={uniqueId} id={uniqueId}>
                <ReadingDropdown
                  title={book.title}
                  author={book.author}
                  targetId={uniqueId} // Pass the unique ID
                  content={
                    <div className="flex flex-col">
                      <span className="font-semibold">{"Pros:"}</span>
                      {book.pros ? book.pros : "N/A"}
                      <span className="font-semibold">{"Cons:"}</span>
                      {book.cons ? book.cons : "N/A"}
                    </div>
                  }
                  image_src={book.image_src}
                  image_alt={book.image_alt}
                  is_favorite={book.is_favorite}
                />
              </a>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default ReadingList;
