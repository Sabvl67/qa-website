import { skills } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

interface Card {
  id: number;
  title: string;
  desc: string[];
  className: string;
  thumbnail: string;
}

const Experience = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My
        <span className="text-purple"> Technical Skills </span>
      </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {skills.map((card) => (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-4 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="lg:w-32 md:w-20 w-16"
                />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <div
                  className={`text-start text-white-100 mt-3 font-semibold ${
                    card.desc.length > 4 ? "grid grid-cols-2 gap-2" : ""
                  }`}
                >
                  {card.desc.map((point, index) => (
                    <div key={index}>{point}</div>
                  ))}
                </div>
              </div>
            </Button>
          ))}
        </div>
    </div>
  );
};

export default Experience;
