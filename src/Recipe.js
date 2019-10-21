import React from "react";
import style from "./recipe.module.css"

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, index) => {
                    return <li key = {index}>{ingredient.text} </li>
                })}
            </ol>
            <p><strong>Calories: </strong>{calories}</p>
            <img className={style.image} src={image} alt = "" />

        </div>
    );
}

export default Recipe;