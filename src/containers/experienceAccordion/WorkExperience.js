import React from "react";
import "./WorkExperience.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

function WorkExperience(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Work Experience
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {experience.experiences.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} logoBackgroundColor={degree.background_color} />;
        })}
      </div>
    </div>
  );
}

export default WorkExperience;
