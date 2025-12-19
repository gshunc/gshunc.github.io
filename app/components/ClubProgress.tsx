"use client";

import { motion } from "motion/react";

interface ClubProgressProps {
  name: string;
  steps: string[];
  color: string;
  inactive?: boolean;
}

export default function ClubProgress({
  name,
  steps,
  color,
  inactive = false,
}: ClubProgressProps) {
  const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
    teal: { text: "text-teal-400", bg: "bg-teal-400", border: "border-teal-400" },
    yellow: { text: "text-yellow-400", bg: "bg-yellow-400", border: "border-yellow-400" },
    gray: { text: "text-gray-400", bg: "bg-gray-400", border: "border-gray-400" },
  };

  const colors = colorClasses[color] || colorClasses.gray;

  return (
    <motion.div
      className={`py-4 ${inactive ? "opacity-50" : ""}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: inactive ? 0.5 : 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <p className={`text-xl font-medium mb-3 ${inactive ? "line-through text-gray-400" : colors.text}`}>
        {name}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              className={`px-3 py-1.5 rounded-full text-sm border-2 ${
                inactive
                  ? "border-gray-300 text-gray-400"
                  : `${colors.border} ${colors.text}`
              } ${!inactive && "hover:scale-105 transition-transform cursor-default"}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {step}
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                className={`mx-1 ${inactive ? "text-gray-300" : colors.text}`}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.1 + 0.15 }}
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
