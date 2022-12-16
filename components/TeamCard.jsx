/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const TeamCard = ({
  id,
  imgUrl,
  title,
  subtitle,
  link,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] sm:min-w-[200px] sm:h-[450px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
    onClick={() => handleClick(id)}>
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[20px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 flex items-center justify-start lg:h-[40%] h-full w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] rounded-t-[24px] lg:rounded-t-none">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div
            className={`${styles.flexCenter} mt-4 w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
            <img
              src="/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </a>
        <h2 className="mt-[24px] sm:mt-[2px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className="font-normal mt-2 text-[16px] leading-[20.16px] text-white uppercase">
          {subtitle}
        </p>
      </div>
    )}
  </motion.div>
);

export default TeamCard;
