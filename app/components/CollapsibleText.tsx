"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CollapsibleTextProps {
  children: string;
  previewLength?: number;
  className?: string;
}

export default function CollapsibleText({
  children,
  previewLength = 200,
  className = "",
}: CollapsibleTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsCollapse = children.length > previewLength;

  if (!needsCollapse) {
    return <p className={className}>{children}</p>;
  }

  const previewText = children.slice(0, previewLength).trim() + "...";

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.p
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.p>
        ) : (
          <motion.p
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {previewText}
          </motion.p>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-1"
      >
        {isExpanded ? "Show less" : "Read more"}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ↓
        </motion.span>
      </button>
    </div>
  );
}
