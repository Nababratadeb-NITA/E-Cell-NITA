/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { AiFillLinkedin } from "react-icons/ai";

const TeamCard = ({ imgUrl, title, subtitle, link }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={imgUrl}
      alt={title}
    />
    <div className="group-hover:flex flex-col hidden max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{title}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-7 h-7 rounded-full object-fill bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              <AiFillLinkedin />
            </div>
          </a>
          <p className="text-white text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  </div>
);

export default TeamCard;
