/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About E-Cell" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <span className="font-extrabold text-white">Entrepreneurship Cell</span>{" "}
        is a non-profit organization run by the students of National Institute
        of Technology Agartala that aims at manifesting the latent
        entrepreneurial spirit of the young students. E-Cell aims at promoting
        the startup culture in Agartala as well as North-East India. With
        various undergoing projects, few successful startups, a lot of failures,
        and the flagship
        <span className="font-extrabold text-white">
          'Carpediem E-Summit',
        </span>{" "}
        E-Cell has transformed itself from a small community established by
        budding entrepreneurs in
        <span className="font-extrabold text-white"> 2017 </span>to a
        full-fledged organization with multi-talented like-minded people
        striving to solve the various problem with an entrepreneurial minsdset{" "}
        <br />
        <span className="font-extrabold text-white">explore</span> the events
        that conducted by ecell by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
