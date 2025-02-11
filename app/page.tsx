import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "./data";

export default function Home() {
  const mealData = data;

  // This function will render the meals for a given day
  const renderMealsForDay = (day: string) => {
    const dayData = mealData[day];

    return Object.keys(dayData).map((time, index) => {
      const meal = dayData[time];
      return (
        <div key={index} className="p-5">
          <h3>{time}</h3>
          <p>
            <strong>{meal.type}</strong>: {meal.repas}
          </p>
          {meal.boisson && (
            <p>
              <strong>Boisson</strong>: {meal.boisson}
            </p>
          )}
          {meal.complement && (
            <p>
              <strong>Complément</strong>: {meal.complement}
            </p>
          )}
          <p>
            <strong>Ingrédients</strong>: {meal.ingredients.join(", ")}
          </p>
        </div>
      );
    });
  };

  // This function will gather all ingredients for the given day
  const gatherAllIngredients = (day: string) => {
    const dayData = mealData[day];
    const allIngredients = Object.values(dayData).flatMap(
      (meal) => meal.ingredients
    );
    return allIngredients;
  };

  return (
    <div className="space-y-5">
      {Object.keys(mealData).map((day) => (
        <Card key={day}>
          <CardHeader>
            <CardTitle>{day.charAt(0).toUpperCase() + day.slice(1)}</CardTitle>
            <CardDescription>
              Meal Plan for {day.charAt(0).toUpperCase() + day.slice(1)}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderMealsForDay(day)}</CardContent>
          <CardFooter>
            <div>
              <strong>
                Ingrédients pour {day.charAt(0).toUpperCase() + day.slice(1)}:
              </strong>
              <ul>
                {gatherAllIngredients(day).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
