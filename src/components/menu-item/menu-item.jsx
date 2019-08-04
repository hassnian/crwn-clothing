import React from "react";
import "./menu-item.scss"

const MenuItem = ({title,img,size}) => (
  <div  className={`${size} menu-item`}>
    <div style={{backgroundImage:`url(${img})`}} className="background-image">

    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem