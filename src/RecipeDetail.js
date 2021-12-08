import React from "react";
import { Link, useParams } from "react-router-dom";
import FormEditRecipe from "./FormEditRecipe";

function RecipeDetail({ recipes, loggedin, deleteRecipe, editRecipe }) {
  const { recipeId } = useParams();
  const [recipeDeleted, setRecipeDeleted] = React.useState(false);

  const currRecipe = recipes.filter((recipe) => recipe._id === recipeId);
  const thisRecipe = { ...currRecipe[0] };

  const delRecipe = () => {
    deleteRecipe(thisRecipe._id);
    setRecipeDeleted(true);
  };

  if (recipeDeleted) {
    return (
      <>
        <p>Recipe deleted!</p>
        <Link to="/">Home</Link>
      </>
    );
  }

  return (
    <div>
      <img src={`/img/${thisRecipe.image}`} alt={thisRecipe.title} />
      <h1>{thisRecipe.title}</h1>
      <h3>Written by: {thisRecipe.author}</h3>
      <p>Published on: {thisRecipe.year}</p>
      <p>{thisRecipe.description}</p>
      <h4>Recipe Ingredients:</h4>
      <p>{thisRecipe.ingredients}</p>
      <h4>Follow Directions:</h4>
      <p>{thisRecipe.directions}</p>
      <h4>Nutrition Facts:</h4>
      <p>{thisRecipe.nutrition}</p>

      <FormEditRecipe thisRecipe={thisRecipe} editRecipe={editRecipe} />
      {loggedin && <button onClick={() => delRecipe()}>Delete Recipe</button>}

      <Link to="/">Home</Link>
    </div>
  );
}

export default RecipeDetail;
