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
export interface NavbarProps {
  onOpenSidebar: () => void;
  collapsed: boolean;
}
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  collapsed?: boolean;
}
