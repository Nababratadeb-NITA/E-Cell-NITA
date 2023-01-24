/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}>
        <img
          src="https://imgs.search.brave.com/tGx9P5e_JgTAiqG1e1Rd-VtJp4cm8Vjk7LF8T8gZbbc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0YXJ0LmNvbS9p/bWFnZXMvcm9ja2V0/LWZsYW1lLWNsaXBh/cnQtOC5wbmc"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| What E-Cell Do" />
        <TitleText title={<>Building Startup Eco-System</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
