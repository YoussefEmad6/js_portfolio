import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Section from "../shared/section";

import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";
import { DiAtlassian } from "react-icons/di";

import "./style.scss";

const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <DiAtlassian />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>

          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact me
          </li>
        </ul>
        <div className="social-icons">
          {/* <SocialIcon
            color="#FF0000"
            icon={<FaGithub />}
            link="https://www.youtube.com/"
          /> */}
          <SocialIcon color="#0D2636" icon={<FaGithub />} link='https://github.com/YoussefEmad6' />
          <SocialIcon color="#0A66C2" icon={<FaLinkedinIn />} link='https://www.linkedin.com/in/youssef-emad-shehata/' />
          {/* <SocialIcon color="#f2740d" icon={<FaStackOverflow />} />
          <SocialIcon color="#E84C88" icon={<FaInstagram />} /> */}
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2022 JS Dev Hindi | All Rights Reserved
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
