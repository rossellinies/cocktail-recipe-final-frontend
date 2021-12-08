import React from "react";
import Recipe from "./Recipe";
import RecipesContext from "./RecipesContext";
import FormCreateRecipe from "./FormCreateRecipe";

function Recipes({ loggedin, addRecipe }) {
  return (
    <RecipesContext.Consumer>
      {(recipes) => (
    <summary>
      {loggedin && <FormCreateRecipe addRecipe={addRecipe} />}
      {recipes.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </summary>
      )}
    </RecipesContext.Consumer>
  );
}

export default Recipes;
