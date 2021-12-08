import React from "react";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  const { title, year, author, description, directions, image, _id } = recipe;
  return (
    <summary>
      <img src={`img/${image}`} alt={title} />
      <h2>
        <Link to={_id}>{title}</Link>
      </h2>
      <h4>Written by: {author}</h4>
      <p>{description}</p>
      <h5>Follow Directions:</h5>
      <p>{directions}</p>
      <small>Published on: {year}</small>
    </summary>
  );
}

export default Recipe;
