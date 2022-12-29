/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  const router = useRouter();
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}>
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col items-start justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Contact With E-Cell
          </h4>
          <p className="font-bold md:text-[15px] text-[14px] text-white">
            Akshat Srivastava [For E-Cell Realted Quaries]
          </p>
          <p className="font-bold md:text-[15px] text-[14px] text-white">
            Nababrata Deb [For Website Realted Issues]
          </p>
          <button
            type="button"
            onClick={() => router.push("/contactus")}
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img
              src="/phone.png"
              alt="headset"
              className="w-[32px] h-[32px] object-contain"
            />
            <span className="font-normal  text-[16px] text-white">
              Contact Us
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              Entreprenurship Cell
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              ©Developed by Teach Team | E-Cell | NIT Agartala. <br /> All
              rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img
                    key={social.link}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
