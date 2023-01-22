/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable react/jsx-closing-bracket-location */

"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiOutlineTeam, AiFillContacts } from "react-icons/ai";
import styles from "../styles";

const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.xPaddings} sticky py-8`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex items-baseline justify-between  gap-8`}>
        <div className="flex justify-center space-x-2 items-center">
          <img
            onClick={() => router.push("/")}
            src="https://res.cloudinary.com/doipe9nqx/image/upload/v1650455624/Logo_White_1_q8vq73.png"
            alt="search"
            className="w-[45px] h-[36px] cursor-pointer object-contain"
          />
          <div className="h-9 w-0.5 bg-white" />
          <h2
            onClick={() => router.push("/")}
            className="font-extrabold text-[24px] cursor-pointer leading-[30.24px] text-white">
            E-CELL
          </h2>
        </div>
        {!toggle ? (
          <GiHamburgerMenu
            onClick={() => setToggle(true)}
            className="text-white w-[24px] h-[24px] cursor-pointer"
          />
        ) : (
          <RxCross2
            onClick={() => setToggle(false)}
            className="text-white w-[24px] h-[24px] cursor-pointer"
          />
        )}

        {toggle ? (
          <div className="glassmorphism right-1 mt-12 absolute p-4 text-white rounded-md space-y-5 font-bold ">
            <div
              onClick={() => router.push("/team")}
              className="flex justify-start items-center cursor-pointer space-x-4 ">
              <AiOutlineTeam /> <h2>Team</h2>
            </div>{" "}
            <div
              onClick={() => router.push("/contactus")}
              className="flex justify-start items-center cursor-pointer space-x-4 ">
              <AiFillContacts /> <h2>Contact Us</h2>
            </div>{" "}
            <div className="cursor-pointer">
              <a
                className="flex justify-start items-center space-x-4 "
                href="https://ecellnita.co/carpediem"
                target="_blank"
                rel="noopener noreferrer">
                <BsFillCalendarEventFill /> <h2>Carpediem</h2>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
