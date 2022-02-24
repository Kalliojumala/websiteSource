import React from "react";
import { AboutMeContent } from "../../data/aboutmedata";

const AboutMe = () => {
    
  return (
    <ul>
      {AboutMeContent.map(({sectionLogo, sectionTitle, details}, i) => (
        <li key={i}>
          <div className="icon">
            <i class={sectionLogo}></i>
          </div>
          
          <h5 className="poppins-font text-uppercase">
            {sectionTitle}
            
          </h5>
          {details.map((item) => (
            <p className="open-sans-font">{item}</p>
          ))}
          
        </li>
      ))}
    </ul>
  );
};

export default AboutMe;