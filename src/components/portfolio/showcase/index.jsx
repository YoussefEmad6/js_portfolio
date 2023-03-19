import React from "react";

import { BsGithub } from "react-icons/bs";
import Arrow from "../../shared/arrow";

import "./style.scss";

const Showcase = ({ data, transition }) => {
  return (
    <div className="projects-showcase">
      {data.map((project) => (
        <div
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          }`}
          key={project.id}
        >
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="links">
              <div className="go-to-cta">
                <a
                  href={project.herf}
                  className="text"
                  rel="noreferrer"
                  target="_blank"
                >
                  Project link
                </a>
                <Arrow />
              </div>
              <a href={project.herf}
                  className="text-git"
                  rel="noreferrer"
                  target="_blank"><BsGithub /></a>
            </div>
          </div>
          <img src={project.media.thumbnail} alt="hh" />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
