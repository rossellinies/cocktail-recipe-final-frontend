import React from "react";
import Button from "./button/Button";

const FormEditRecipe = ({ editRecipe, thisRecipe }) => {
  const [values, setValues] = React.useState({
    title: thisRecipe.title,
    image: thisRecipe.image,
    description: thisRecipe.description,
    year: thisRecipe.year,
    ingredients: thisRecipe.ingredients,
    directions: thisRecipe.directions,
    nutrition: thisRecipe.nutrition,
  });

  const updateRecipe = (event) => {
    event.preventDefault();
    const recipe = {
      ...thisRecipe,
      title: values.title,
      image: values.image,
      description: values.description,
      year: values.year,
      ingredients: values.ingredients,
      directions: values.directions,
      nutrition: values.nutrition,
    };
    editRecipe(recipe);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Edit Cocktail Recipe</h3>
      <form onSubmit={updateRecipe}>
        <input
          type="text"
          placeholder="Recipe title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Recipe image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Recipe description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="Recipe year"
          value={values.year}
          name="year"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={values.ingredients}
          name="ingredients"
          onChange={handleInputChange}
          />
        <input
          type="text"
          placeholder="Directions"
          value={values.directions}
          name="directions"
          onChange={handleInputChange}
          />
        <input
          type="text"
          placeholder="Nutrition"
          value={values.nutrition}
          name="nutrition"
          onChange={handleInputChange}
          />

        <Button type="submit">Edit Recipe</Button>
      </form>
    </div>
  );
};

export default FormEditRecipe;
