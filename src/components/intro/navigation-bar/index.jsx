import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="JS Dev"
                />
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
            <ul className={`navigation ${mobileMenu ? "active" : ""}`}>
                <li
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("skills")}
                >
                    Skills
                </li>
                <li
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("portfolio")}
                >
                    Portfolio
                </li>
                <li
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("blogs")}
                >
                    Blogs & Articles
                </li>
                <CallToAction className="call"
                    text="Contact me"
                    id="navContactMe"
                    action={() => {
                        menuItemClickHandler("contact");
                    }}
                />
            </ul>
        </div>
    );
};

export default Navigation;
