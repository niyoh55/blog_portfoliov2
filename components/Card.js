import { motion } from "framer-motion";
import React from "react";

const Card = (props) => {
  return (
    <motion.div className="flex flex-row justify-start items-start h-full shadow-2xl bg-slate-50 hover:scale-105 duration-300 ease-in rounded-2xl overflow-hidden">
      <img
        src={props.imgURL}
        className="w-40 h-40 object-cover object-center"
      />
      <div className="p-5">
        <h1 className="text-4xl font-bold">{props.title}</h1>
        <span>{props.desc}</span>
      </div>
    </motion.div>
  );
};

export default Card;
