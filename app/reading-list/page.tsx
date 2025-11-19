"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ReadingDropdown from "../components/ReadingDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { books, Book } from "@/app/data/books/books";
import { useState } from "react";
import BookModal from "../components/BookModal";


const ReadingList = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBook(null), 300); // Clear after animation
  };

  // Group books by category
  const booksByCategory = books.reduce((acc, book) => {
    const category = book.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(book);
    return acc;
  }, {} as Record<string, typeof books>);

  const categories = [
    "Philosophy & Politics",
    "History & Biography",
    "Business & Economics",
    "Science & Society",
    "Arts & Living",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center scroll-smooth pb-20 pt-20">
      <div className="w-full max-w-6xl px-4 lg:px-10">
        <h1 className="text-4xl lg:text-5xl font-bold mt-10 mb-16 text-center">
          My Library
        </h1>
        
        {categories.map((category) => {
          const categoryBooks = booksByCategory[category];
          if (!categoryBooks) return null;

          return (
            <section key={category} className="mb-16 w-full">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 border-b-2 border-gray-600 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                {categoryBooks.map((book, index) => {
                  const uniqueId = `${book.title.replace(/\s+/g, "-")}-${index}`;
                  return (
                    <div 
                      key={uniqueId} 
                      className="flex flex-col items-center group perspective-1000 cursor-pointer"
                      onClick={() => handleBookClick(book)}
                    >
                      <div className="relative w-32 h-48 md:w-40 md:h-60 shadow-xl transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl rounded-r-md rounded-l-sm bg-white">
                        {/* Book Spine/Cover Effect */}
                        <div className="absolute inset-0 bg-gray-200 rounded-r-md rounded-l-sm overflow-hidden border-l-4 border-l-gray-800">
                            {book.image_src ? (
                                <img 
                                    src={book.image_src} 
                                    alt={book.image_alt}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white p-2 text-center text-xs">
                                    {book.title}
                                </div>
                            )}
                        </div>
                        
                        {/* Hover Overlay for Details (Simple version) */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-r-md"></div>
                      </div>
                      
                      <div className="mt-4 text-center max-w-[160px]">
                        <h3 className="font-bold text-sm md:text-base leading-tight mb-1">
                          {book.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-400 italic">
                          {book.author}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Shelf Graphic */}
              <div className="h-4 bg-gray-700 w-full mt-2 shadow-md rounded-sm relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-600 opacity-50"></div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Book Modal */}
      <BookModal 
        book={selectedBook} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  );
};

export default ReadingList;
