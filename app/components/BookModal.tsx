"use client";
import { Book } from "@/app/data/books/books";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookModal({ book, isOpen, onClose }: BookModalProps) {
  if (!book) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 z-40 cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ 
                duration: 0.2,
                ease: "easeOut"
              }}
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-2xl pointer-events-auto"
            >
            <div className="relative p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>

              {/* Book Content */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Book Cover */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-48 h-72 relative shadow-xl rounded-r-md rounded-l-sm overflow-hidden border-l-4 border-l-gray-800">
                    {book.image_src ? (
                      <img
                        src={book.image_src}
                        alt={book.image_alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white p-4 text-center">
                        {book.title}
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 text-gray-900">
                  <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
                  <p className="text-xl text-gray-600 italic mb-6">
                    by {book.author}
                  </p>

                  {book.is_favorite && (
                    <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      ⭐ Favorite
                    </div>
                  )}

                  {/* Pros */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 text-green-600">
                      Pros
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {book.pros || "No pros listed yet."}
                    </p>
                  </div>

                  {/* Cons */}
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-600">
                      Cons
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {book.cons || "No cons listed yet."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
