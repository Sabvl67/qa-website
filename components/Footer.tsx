import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-[100px] md:mb-5 sm:mb-2" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {" "}
          Ready to <span className="text-purple"> blah </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today to discuss how can i help you
        </p>
        <a href="mailto: avo672002@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Anh Vo
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center
                        backdrop-filter backdrop-blur-lg saturate-180
                        bg-opacity-75 bg-black-200 rounded-lg border border-black-200">
              <img src={profile.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
