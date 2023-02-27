import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  SiSemanticuireact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
} from "react-icons/si";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";

import CallToAction from "../shared/CallToAction";
// import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <SiSemanticuireact className="icon" style={{ color: "#60A5FA" }} />
          <SiNextdotjs className="icon" style={{ backgroundColor: "white" }} />
          <ImHtmlFive2 className="icon" style={{ color: "#e34c26" }} />
          <SiJavascript className="icon" style={{ color: "yellow" }} />
          <ImCss3 className="icon" style={{ color: "#2965f1" }} />
          <SiTailwindcss className="icon" style={{ color: "#67E8F9" }} />
          <SiBootstrap className="icon" style={{ color: "#6B21A8" }} />
          <SiSass className="icon" style={{ color: "#DB2777" }}/>
          
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the
          </p>
          <CallToAction
            text="Download CV"
            icon={<AiOutlineCloudDownload />}
            action={() => window.open(Resume)}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
