/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
/* eslint-disable react/jsx-wrap-multilines */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { teamMambers } from "../constants";
import TeamCard from "./TeamCard";

const TeamMam = () => {
  const [active, setActive] = useState("1");
  return (
    <section className={`${styles.paddings}`} id="team">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex justify-center items-center space-y-5 flex-col`}>
        <TypingText title="| The Team" textStyles="text-center" />
        <TitleText
          title={
            <>
              Meet The Top 10% Inteligent <br className="md:block hidden" />{" "}
              People Of NITA
            </>
          }
          textStyles="text-center"
        />
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
          {" "}
          {teamMambers.map((world, index) => (
            <TeamCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamMam;
