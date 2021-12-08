import React from "react";
import Button from "./button/Button";

const FormCreateRecipe = ({ addRecipe }) => {
  const [values, setValues] = React.useState({
    title: "",
    image: "",
    author: "",
    description: "",
    ingredients: "",
    directions: "",
    nutrition: "",
    year: "",
  });

  const createRecipe = (event) => {
    event.preventDefault();
    const recipe = {
      title: values.title,
      image: values.image,
      author: values.author,
      description: values.description,
      ingredients: values.ingredients,
      directions: values.directions,
      nutrition: values.nutrition,
      year: values.year,
    };
    addRecipe(recipe);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Create A New Cocktail Recipe</h3>
      <form onSubmit={createRecipe}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Recipe Image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Recipe Author"
          value={values.author}
          name="author"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Recipe Description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="Recipe Year"
          value={values.year}
          name="year"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Recipe Ingredients"
          value={values.ingredients}
          name="ingredients"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Recipe Directions"
          value={values.directions}
          name="directions"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Nutrition Facts"
          value={values.nutrition}
          name="nutrition"
          onChange={handleInputChange}
        />

        <Button type="submit">Create Recipe</Button>
      </form>
    </div>
  );
};

export default FormCreateRecipe;
