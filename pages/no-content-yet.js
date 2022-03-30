import { motion } from "framer-motion";
import React from "react";

const NoContentyet = () => {
  return (
    <div className="w-full h-full">
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: ["100vh", "0vh"]}}
        transition={{ duration: 1, ease: "easeIn" }}
        className="h-[100vh] bg-neutral-300"
      ></motion.div>

      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: ["0vh", "100vh"] }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-full flex justify-center items-center h-[100vh] bg-bg_1 bg-cover"
      ></motion.div>
    </div>
  );
};

export default NoContentyet;
