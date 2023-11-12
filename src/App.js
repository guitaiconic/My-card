import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./Skill";
import "./index.css";

const App = () => (
  <div className="card">
    <Avatar />
    <div className="data">
      <Intro />
    </div>
    <div className="skill-List">
      <SkillList skill="React" emoji="💪" color="green" />
      <SkillList skill="HTML+CSS" emoji="💪" color="orangered" />
      <SkillList skill="JavaScript" emoji="💪" color="yellow" />
      <SkillList skill="Web Design" emoji="💪" color="brown" />
      <SkillList skill="Git and GitHub" emoji="💪" color="skyblue" />
    </div>
  </div>
);

export default App;
