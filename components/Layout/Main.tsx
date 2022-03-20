import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button";

interface MainProps {
  children?: React.ReactNode;
}

const container = {
  hidden: {
    opacity: 0,
    y: 10
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay:0.1,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
    },
  },
};

const Main = (props: MainProps) => {
  const { children } = props;

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <nav className="flex fixed top-0 left-0 items-center justify-between bg-white shadow-sm w-full px-4 h-12">
        <a href="#">Logo</a>
        <div></div>
        <div className="flex items-center justify-end">
         <Button type="button" variant="primary">Sign in</Button>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </motion.section>
  );
};

export default Main;
