import React from "react";
import { motion } from "framer-motion";
import { Loader2, RefreshCw } from "lucide-react";

/**
 * Modern Loader Component with Multiple Variants
 *
 * @param {string} variant - "spinner" | "dots" | "pulse" | "bars" | "ring" | "progress"
 * @param {string} size - "sm" | "md" | "lg" | "xl"
 * @param {string} color - "primary" | "white" | "gray"
 * @param {string} text - Optional loading text
 * @param {boolean} fullscreen - Show as fullscreen overlay
 *
 */
export default function Loader({
  variant = "spinner",
  size = "md",
  color = "primary",
  text = "",
  fullscreen = false,
}) {
  const sizeClasses = {
    sm: {
      container: "w-8 h-8",
      dot: "w-2 h-2",
      bar: "w-1 h-6",
      ring: "w-8 h-8 border-2",
    },
    md: {
      container: "w-12 h-12",
      dot: "w-3 h-3",
      bar: "w-1.5 h-8",
      ring: "w-12 h-12 border-3",
    },
    lg: {
      container: "w-16 h-16",
      dot: "w-4 h-4",
      bar: "w-2 h-10",
      ring: "w-16 h-16 border-4",
    },
    xl: {
      container: "w-24 h-24",
      dot: "w-6 h-6",
      bar: "w-3 h-14",
      ring: "w-24 h-24 border-[6px]",
    },
  };

  const colorClasses = {
    primary: {
      spinner: "text-[#0052ab]",
      dot: "bg-[#0052ab]",
      gradient: "from-[#003d82] to-[#0052ab]",
      ring: "border-[#0052ab]",
      text: "text-gray-700",
    },
    white: {
      spinner: "text-white",
      dot: "bg-white",
      gradient: "from-white to-gray-100",
      ring: "border-white",
      text: "text-white",
    },
    gray: {
      spinner: "text-gray-400",
      dot: "bg-gray-400",
      gradient: "from-gray-400 to-gray-500",
      ring: "border-gray-400",
      text: "text-gray-600",
    },
  };

  const sizes = sizeClasses[size];
  const colors = colorClasses[color];

  const LoaderContent = () => {
    switch (variant) {
      case "spinner":
        return (
          <motion.div
            className={`${sizes.container} ${colors.spinner}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-full h-full" strokeWidth={2.5} />
          </motion.div>
        );

      case "dots":
        return (
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizes.dot} ${colors.dot} rounded-full`}
                animate={{
                  y: ["0%", "-50%", "0%"],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      case "pulse":
        return (
          <div className="relative">
            <motion.div
              className={`${sizes.container} rounded-full bg-gradient-to-br ${colors.gradient}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.gradient}`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );

      case "bars":
        return (
          <div className="flex items-end gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`${sizes.bar} rounded-full bg-gradient-to-t ${colors.gradient}`}
                animate={{
                  scaleY: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      case "ring":
        return (
          <div className="relative">
            <motion.div
              className={`${sizes.ring} rounded-full border-t-transparent ${colors.ring}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className={`absolute inset-0 ${sizes.ring} rounded-full border-b-transparent ${colors.ring} opacity-40`}
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        );

      case "progress":
        return (
          <div className="space-y-3">
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ width: "50%" }}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <LoaderContent />
      {text && (
        <motion.p
          className={`text-sm md:text-base font-medium ${colors.text}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
