import React from "react";
import "../css/Course.css";

function Course({ courseProps }) {
  const { id, title, description, price, link, image } = courseProps;
  return (
    <>
      <div className="course">
        <div>
          <img src={image} alt="" width="300px" />
          <h4>{title}</h4>
          <h5>{description}</h5>
          <h3>{price} ₺</h3>
          <a href={link}>Buradan Ulaşın</a>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Course;
