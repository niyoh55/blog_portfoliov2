import { motion } from "framer-motion";
import React from "react";

const NoContentyet = () => {
  return (
    <div className="w-full h-full">
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: ["100vh", "0vh"] }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="h-[100vh] bg-neutral-300 "
      ></motion.div>

      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: ["0vh", "100vh"] }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-full flex justify-center items-center bg-black"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h1 className="text-9xl text-white text-center">
            Wala pa laman lods
          </h1>
          <img
            width={1280}
            height={720}
            src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NoContentyet;
