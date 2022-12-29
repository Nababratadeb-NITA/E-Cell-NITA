/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable react/jsx-closing-bracket-location */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { useRouter } from "next/router";
import { RiTeamLine } from "react-icons/ri";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const router = useRouter();
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex items-baseline justify-between  gap-8`}>
        <Link href="/">
          <img
            onClick={() => router.push("/")}
            src="https://res.cloudinary.com/doipe9nqx/image/upload/v1650455624/Logo_White_1_q8vq73.png"
            alt="search"
            className="w-[45px] h-[36px] cursor-pointer object-contain"
          />
        </Link>
        <h2
          onClick={() => router.push("/")}
          className="font-extrabold text-[24px] cursor-pointer leading-[30.24px] text-white">
          E-CELL
        </h2>
        <RiTeamLine
          title="team"
          onClick={() => router.push("/team")}
          className="text-white w-[24px] h-[24px] cursor-pointer"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
