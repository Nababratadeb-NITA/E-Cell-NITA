/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import {
  slideIn,
  staggerContainer,
  textVariant,
  // zoomIn,
} from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          RESIST the
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center">
          <h1 className={styles.heroHeading}>obvi</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>us</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] -top-[15px] sm:-top-[30px]">
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[10px]" />
        <video
          autoPlay
          muted
          loop
          controls
          poster="https://res.cloudinary.com/djzml9nau/image/upload/v1674377310/WhatsApp_Image_2023-01-19_at_8.52.33_PM_snczv3.jpg"
          className="w-full sm:h-[500px] h-[400px] object-cover rounded-tl-[140px] z-10 relative"
          src="/video.mp4"
        />

        {/* <img
          src="https://res.cloudinary.com/djzml9nau/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1672834829/planet-09_umeiet.jpg"

          alt="hero_cover"
          className="w-full sm:h-[500px] h-[400px] object-cover rounded-tl-[140px] z-10 relative"
        /> */}
        {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <a
              href="https://e-cell-nita.vercel.app/"
              className="bg-green-600 flex px-2 justify-center items-center  w-24 h-24 text-white border-none rounded-full font-bold transition-opacity">
              Explore
            </a>
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
