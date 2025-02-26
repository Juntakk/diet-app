"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import data from "./data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Ingredient } from "@/types";

export default function Home() {
  const mealData = data;
  const [selectedDay, setSelectedDay] = useState(Object.keys(mealData)[0]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile on component mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // This function will render the meals for a given day
  const renderMealsForDay = (day: string) => {
    const dayData = mealData[day];

    return (
      <ScrollArea className="h-[calc(100vh-250px)] overflow-y-auto border rounded-lg bg-zinc-800">
        {Object.keys(dayData).map((time, index) => {
          const meal = dayData[time];
          return (
            <div
              key={index}
              className="p-6 border-b last:border-b-0 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                {time}
              </h3>
              <div className="space-y-2">
                <p className="text-2xl text-zinc-700 dark:text-zinc-300">
                  <span className="font-medium">{meal.repas}</span>
                </p>
                <div className="mt-3">
                  <Separator className="w-36 mt-5 mb-2 bg-slate-50" />
                  <ul className="list-none text-sm text-zinc-600 dark:text-zinc-300">
                    {meal.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    );
  };

  // This function will gather all ingredients for the given day
  const gatherAllIngredients = (day: string) => {
    const dayData = mealData[day];
    const allIngredients = Object.values(dayData).flatMap(
      (meal) => meal.ingredients
    );
    return allIngredients;
  };

  const gatherAllWeekIngredients = () => {
    const allIngredients = Object.values(mealData).flatMap((dayData) =>
      Object.values(dayData).flatMap((meal) => meal.ingredients)
    );

    // Remove duplicates using a Map
    const uniqueIngredientsMap = new Map<string, Ingredient>();
    allIngredients.forEach((ingredient) => {
      if (!uniqueIngredientsMap.has(ingredient.name)) {
        uniqueIngredientsMap.set(ingredient.name, ingredient);
      }
    });

    return Array.from(uniqueIngredientsMap.values());
  };

  // Group ingredients by category
  const groupIngredientsByCategory = (ingredients: Ingredient[]) => {
    return ingredients.reduce((acc, ingredient) => {
      console.log(acc);
      // console.log(ingredient);

      const category = ingredient.category;
      // console.log(category);

      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(ingredient);
      return acc;
    }, {} as { [category: string]: Ingredient[] });
  };

  const allIngredients = gatherAllWeekIngredients();
  const groupedIngredients = groupIngredientsByCategory(allIngredients);

  return (
    <div className="dark p-6">
      {isMobile ? (
        // Dropdown menu for mobile screens
        <div className="flex flex-col gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-48 p-5 bg-zinc-800 text-zinc-400">
                {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 max-h-[calc(100vh-200px)] overflow-y-auto bg-zinc-800 text-zinc-400 border-none">
              <DropdownMenuRadioGroup
                value={selectedDay}
                onValueChange={(value) => setSelectedDay(value)}
              >
                {Object.keys(mealData).map((day) => (
                  <DropdownMenuRadioItem key={day} value={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Content for the selected day */}
          <Card className="shadow-lg hover:cursor-pointer">
            <CardHeader className="rounded-t-lg">
              <CardTitle className="text-2xl">
                {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y">
              {renderMealsForDay(selectedDay)}
            </CardContent>
          </Card>

          {/* Ingredients Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Ingrédients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none">
                {gatherAllIngredients(selectedDay).map((ingredient, index) => (
                  <li key={index} className="text-md p-2">
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ) : (
        // Tabs for larger screens
        <Tabs
          defaultValue={selectedDay}
          onValueChange={(value) => setSelectedDay(value)}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <TabsList className="grid w-full grid-cols-7 ">
              {Object.keys(mealData).map((day) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-200 data-[state=active]:font-bold bg-zinc-800"
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Content for the selected day */}
          {Object.keys(mealData).map((day) => (
            <TabsContent key={day} value={day} className="mt-4">
              <div className="flex gap-4">
                {/* Left Section (3/4 width) */}
                <div className="flex-1 w-3/4">
                  <Card className="shadow-lg hover:cursor-pointer">
                    <CardHeader className="rounded-t-lg">
                      <CardTitle className="text-2xl">
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="divide-y">
                      {renderMealsForDay(day)}
                    </CardContent>
                  </Card>
                </div>

                {/* Right Section (1/4 width) */}
                <div className="w-1/4">
                  <Card className="shadow-lg h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Ingrédients pour{" "}
                        {day[0].toLocaleUpperCase() + day.replace(day[0], "")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {gatherAllIngredients(day).map((ingredient, index) => (
                        <li key={index} className="text-md p-2">
                          {ingredient.name}
                        </li>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
      <AlertDialog>
        <AlertDialogTrigger className="m-2 text-zinc-300 bg-zinc-800 p-2.5 rounded hover:bg-zinc-700">
          Tous les Ingrédients
        </AlertDialogTrigger>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogContent className="bg-zinc-800">
          <ScrollArea className="h-[calc(100vh-200px)] w-full bg-zinc-900 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6">
              {Object.entries(groupedIngredients).map(
                ([category, ingredients]) => (
                  <div key={category} className="mb-6">
                    <h3 className="text-xl font-bold text-zinc-200 mb-3">
                      {category}
                    </h3>
                    <ul className="list-disc pl-6">
                      {ingredients.map((ingredient, index) => (
                        <li key={index} className="text-md text-zinc-400 mb-2">
                          {ingredient.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </ScrollArea>

          <AlertDialogFooter>
            <AlertDialogAction>Fermer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
