"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface ITranzitionProps {
  children: ReactNode;
  className?: string;
  initial?: {};
  animate?: {};
  transition?: {};
  exit?: {};
}
const PageTransitionWrapper = ({
  children,
  className,
  initial,
  animate,
  transition,
  exit,
}: ITranzitionProps) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 } || initial}
      animate={{ x: 0, opacity: 1 } || animate}
      transition={{ duration: 1 } || transition}
      exit={{ x: 100, opacity: 0 } || exit}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
