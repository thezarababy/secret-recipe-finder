export interface mealsType {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;
  [key: string]: any;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
