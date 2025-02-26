export type Ingredient = {
  name: string;
  category: string;
};

export type Meal = {
  repas: string;
  boisson?: string;
  complement?: string;
  alimentsFermentes?: string;
  ingredients: Ingredient[];
};

export type MealData = {
  [key: string]: {
    [time: string]: Meal;
  };
};
