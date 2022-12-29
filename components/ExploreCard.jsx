/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  link,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[210px] h-[450px] transition-[flex] duration-[0.7s] ease-out-flex`}
    onClick={() => handleClick(id)}>
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold last:mb-3 sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex items-center justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
            <img
              src="/instagram.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </a>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          To Enjoy The Memories Click The Instagram Icon
        </p>
        <h2 className="mt-[24px]  font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
