type Meal = {
  repas: string;
  boisson?: string;
  complement?: string;
  alimentsFermentes?: string;
  ingredients: string[];
};

type MealData = {
  [key: string]: {
    [time: string]: Meal;
  };
};

const mealData: MealData = {
  lundi: {
    Déjeuner: {
      repas: "Œufs brouillés aux épinards et avocat 🥑",
      ingredients: ["🥚 Œufs", "🌿 Épinards", "🥑 Avocat", "🍵 Thé vert"],
    },
    Lunch: {
      repas: "Poulet grillé avec quinoa et brocolis 🥦",
      ingredients: ["🍗 Poulet", "🌾 Quinoa", "🥦 Brocolis"],
    },
    Souper: {
      repas: "Soupe de lentilles avec carottes et céleri 🥕",
      ingredients: ["🌱 Lentilles", "🥕 Carottes", "🌿 Céleri"],
    },
  },
  mardi: {
    Déjeuner: {
      repas: "Porridge aux flocons d'avoine et bleuets 🫐",
      ingredients: ["🌾 Flocons d'avoine", "🫐 Bleuets", "🍵 Thé vert"],
    },
    Lunch: {
      repas: "Salade de quinoa avec légumes grillés 🥒",
      ingredients: ["🌾 Quinoa", "🥒 Courgettes", "🌶️ Poivrons"],
    },
    Souper: {
      repas: "Poisson blanc avec riz basmati et épinards 🌿",
      ingredients: ["🐟 Poisson blanc", "🍚 Riz basmati", "🌿 Épinards"],
    },
  },
  mercredi: {
    Déjeuner: {
      repas: "Toast à l'avocat et œuf poché 🍳",
      ingredients: ["🥑 Avocat", "🥚 Œuf", "🍞 Pain complet", "☕ Café noir"],
    },
    Lunch: {
      repas: "Poulet grillé avec patates douces et asperges 🍠",
      ingredients: ["🍗 Poulet", "🍠 Patates douces", "🌿 Asperges"],
    },
    Souper: {
      repas: "Curry de légumes avec riz basmati 🍚",
      ingredients: [
        "🥕 Carottes",
        "🥒 Courgettes",
        "🍚 Riz basmati",
        "🍛 Curry",
      ],
    },
  },
  jeudi: {
    Déjeuner: {
      repas: "Smoothie vert (épinards, banane, lait d'amande) 🍌",
      ingredients: [
        "🌿 Épinards",
        "🍌 Banane",
        "🥛 Lait d'amande",
        "🍵 Thé vert",
      ],
    },
    Lunch: {
      repas: "Salade de lentilles avec légumes 🥕",
      ingredients: ["🌱 Lentilles", "🥕 Carottes", "🌿 Céleri"],
    },
    Souper: {
      repas: "Poulet rôti avec quinoa et brocolis 🥦",
      ingredients: ["🍗 Poulet", "🌾 Quinoa", "🥦 Brocolis"],
    },
  },
  vendredi: {
    Déjeuner: {
      repas: "Œufs brouillés avec avocat et tomate 🍅",
      ingredients: ["🥚 Œufs", "🥑 Avocat", "🍅 Tomate", "☕ Café noir"],
    },
    Lunch: {
      repas: "Poisson blanc avec riz basmati et épinards 🌿",
      ingredients: ["🐟 Poisson blanc", "🍚 Riz basmati", "🌿 Épinards"],
    },
    Souper: {
      repas: "Soupe de légumes avec lentilles 🥕",
      ingredients: ["🌱 Lentilles", "🥕 Carottes", "🌿 Céleri"],
    },
  },
  samedi: {
    Déjeuner: {
      repas: "Porridge aux flocons d'avoine et bleuets 🫐",
      ingredients: ["🌾 Flocons d'avoine", "🫐 Bleuets", "🍵 Thé vert"],
    },
    Lunch: {
      repas: "Poulet grillé avec patates douces et asperges 🍠",
      ingredients: ["🍗 Poulet", "🍠 Patates douces", "🌿 Asperges"],
    },
    Souper: {
      repas: "Curry de légumes avec riz basmati 🍚",
      ingredients: [
        "🥕 Carottes",
        "🥒 Courgettes",
        "🍚 Riz basmati",
        "🍛 Curry",
      ],
    },
  },
  dimanche: {
    Déjeuner: {
      repas: "Toast à l'avocat et œuf poché 🍳",
      ingredients: ["🥑 Avocat", "🥚 Œuf", "🍞 Pain complet", "☕ Café noir"],
    },
    Lunch: {
      repas: "Salade de quinoa avec légumes grillés 🥒",
      ingredients: ["🌾 Quinoa", "🥒 Courgettes", "🌶️ Poivrons"],
    },
    Souper: {
      repas: "Poisson blanc avec riz basmati et épinards 🌿",
      ingredients: ["🐟 Poisson blanc", "🍚 Riz basmati", "🌿 Épinards"],
    },
  },
};

export default mealData;
