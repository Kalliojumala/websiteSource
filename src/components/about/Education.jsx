import React from "react";
import DetailsModal from "./DetailsModal";
import { educationContent } from "../../data/aboutmedata";

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i class="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>

          <p className="open-sans-font">{val.details}</p>
          <DetailsModal title={val.title} items={val.items} />
        </li>
      ))}
    </ul>
  );
};

export default Education;
