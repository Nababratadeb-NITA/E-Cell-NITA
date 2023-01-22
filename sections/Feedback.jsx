/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative">
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Steve Jobs
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder Of Apple, Inc
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[18px] text-[14px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “Your time is limited, so don’t waste it living someone else’s life.
          Don’t be trapped by dogma – which is living with the results of other
          people’s thinking. Don’t let the noise of other’s opinions drown out
          your own inner voice. And most important, have the courage to follow
          your heart and intuition. They somehow already know what you truly
          want to become. Everything else is secondary.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center">
        <img
          src="steve.webp"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        {/* <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]">
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
