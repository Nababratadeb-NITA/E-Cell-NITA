/* eslint-disable quotes */
import React from "react";
import { Navbar } from "../components";
import TeamMam from "../components/TeamMam";

const Team = () => (
  <div className="bg-primary-black overflow-hidden text-white">
    <Navbar />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <TeamMam />
    </div>
  </div>
);

export default Team;
