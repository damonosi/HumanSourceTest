"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface ITranzitionProps {
  children: ReactNode;
  className?: string;
}
const PageTransitionWrapper = ({ children, className }: ITranzitionProps) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
