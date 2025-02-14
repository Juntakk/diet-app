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
      <ScrollArea className="h-[calc(100vh-250px)] overflow-y-auto border rounded-lg">
        {Object.keys(dayData).map((time, index) => {
          const meal = dayData[time];
          return (
            <div
              key={index}
              className="p-6 border-b last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {time}
              </h3>
              <div className="space-y-2">
                <p className="text-2xl text-gray-700 dark:text-gray-300">
                  <span className="font-medium">{meal.repas}</span>
                </p>
                <div className="mt-3">
                  <Separator className="w-36 mt-5 mb-2 bg-slate-50" />
                  <ul className="list-none text-sm text-gray-600 dark:text-gray-300">
                    {meal.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
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

  return (
    <div className="dark p-6">
      {isMobile ? (
        // Dropdown menu for mobile screens
        <div className="flex flex-col gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-48 p-5 bg-zinc-800 text-white">
                {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 max-h-[calc(100vh-200px)] overflow-y-auto bg-zinc-800 text-white border-none">
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
                    {ingredient}
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
            <TabsList className="grid w-full grid-cols-7">
              {Object.keys(mealData).map((day) => (
                <TabsTrigger key={day} value={day}>
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
                      <CardTitle className="text-xl">Ingrédients</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-none">
                        {gatherAllIngredients(day).map((ingredient, index) => (
                          <li key={index} className="text-md p-2">
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
