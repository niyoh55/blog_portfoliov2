import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-row justify-start items-start h-full shadow-2xl bg-white rounded-2xl overflow-hidden">
      <img
        src={props.imgURL}
        className="w-40 h-40 object-cover object-center"
      />
      <div className="p-5">
        <h1 className="text-4xl font-bold">{props.title}</h1>
        <span>{props.desc}</span>
      </div>
    </div>
  );
};

export default Card;
