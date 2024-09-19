/* eslint-disable */
import React from "react";
import "../css/Course.css";

function Course({ courseProps }) {
  const { id, title, description, price, link, image } = courseProps;
  return (
    <>
      <div>
        <div className="course">
          <img src={image} alt="" />
          <h4 className="course-title">{title}</h4>
          <p className="course-desc">{description}</p>
          <h3 className="course-price">{price} ₺</h3>
          <div className="course-link">
            <a href={link}>Buradan Ulaşın</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
