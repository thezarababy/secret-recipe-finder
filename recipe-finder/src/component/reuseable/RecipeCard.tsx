interface mealsType {
  items: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
}

function RecipeCard({ items }: mealsType) {
  return (
    <div>
      <p> {items.strMeal} </p>


      <img src={items.strMealThumb} alt="" />
    </div>
  );
}

export default RecipeCard;
