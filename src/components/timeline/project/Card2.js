import React from "react";
import { LazyGroup } from "react-lazy";
const Card2 = ({ title, desc, poto1, poto2, poto3, descTag, date }) => (
  <React.Fragment>
    <div className="timeline--content">
      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="composition--2">
        <LazyGroup>
          <img
            alt={poto1.alt}
            className="composition--2__photo composition--2__photo--p1"
            src={poto1.src}
          />
          <img
            alt={poto2.alt}
            className="composition--2__photo composition--2__photo--p2"
            src={poto2.src}
          />
          <img
            alt={poto3.alt}
            className="composition--2__photo composition--2__photo--p3"
            src={poto3.src}
          />
        </LazyGroup>
      </div>
      <p className="topMargin">{descTag}</p>
    </div>
    <div className="timeline--time">
      <h4>{date}</h4>
    </div>
  </React.Fragment>
);

export default Card2;
