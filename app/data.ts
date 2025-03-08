import { MealData } from "@/types";

const mealData: MealData = {
  lundi: {
    Déjeuner: {
      repas: "Œufs brouillés aux épinards et avocat 🥑",
      ingredients: [
        { name: "🥚 Œufs", category: "Protéines" },
        { name: "🌿 Épinards", category: "Légumes" },
        { name: "🥑 Avocat", category: "Protéines" },
        { name: "🍵 Thé vert", category: "Boissons" },
      ],
    },
    Lunch: {
      repas: "Poulet grillé avec quinoa et brocolis 🥦",
      ingredients: [
        { name: "🍗 Poulet", category: "Protéines" },
        { name: "🌾 Quinoa", category: "Céréales" },
        { name: "🥦 Brocolis", category: "Légumes" },
      ],
    },
    Souper: {
      repas: "Soupe de lentilles avec carottes et céleri 🥕",
      ingredients: [
        { name: "🌱 Lentilles", category: "Légumineuses" },
        { name: "🥕 Carottes", category: "Légumes" },
        { name: "🌿 Céleri", category: "Légumes" },
      ],
    },
  },
  mardi: {
    Déjeuner: {
      repas: "Porridge aux flocons d'avoine et fruits rouges 🫐",
      ingredients: [
        { name: "🌾 Flocons d'avoine", category: "Céréales" },
        { name: "🫐 Bleuets", category: "Fruits" },
        { name: "🍓 Fraises", category: "Fruits" },
        { name: "🍵 Thé vert", category: "Boissons" },
      ],
    },
    Lunch: {
      repas: "Salade de quinoa avec légumes grillés et poulet 🥒",
      ingredients: [
        { name: "🌾 Quinoa", category: "Céréales" },
        { name: "🍗 Poulet", category: "Protéines" },
        { name: "🥒 Courgettes", category: "Légumes" },
        { name: "🌶️ Poivrons", category: "Légumes" },
      ],
    },
    Souper: {
      repas: "Saumon grillé avec riz basmati et épinards 🌿",
      ingredients: [
        { name: "🐟 Saumon", category: "Protéines" },
        { name: "🍚 Riz basmati", category: "Céréales" },
        { name: "🌿 Épinards", category: "Légumes" },
      ],
    },
  },
  mercredi: {
    Déjeuner: {
      repas: "Toast à l'avocat et œuf poché 🍳",
      ingredients: [
        { name: "🥑 Avocat", category: "Protéines" },
        { name: "🥚 Œufs", category: "Protéines" },
        { name: "🍞 Pain complet", category: "Céréales" },
        { name: "☕ Café noir", category: "Boissons" },
      ],
    },
    Lunch: {
      repas: "Poulet grillé avec patates douces et asperges 🍠",
      ingredients: [
        { name: "🍗 Poulet", category: "Protéines" },
        { name: "🍠 Patates douces", category: "Légumes" },
        { name: "🌿 Asperges", category: "Légumes" },
      ],
    },
    Souper: {
      repas: "Curry de légumes avec riz basmati 🍚",
      ingredients: [
        { name: "🥕 Carottes", category: "Légumes" },
        { name: "🥒 Courgettes", category: "Légumes" },
        { name: "🍚 Riz basmati", category: "Céréales" },
        { name: "🍛 Curry", category: "Épices" },
      ],
    },
  },
  jeudi: {
    Déjeuner: {
      repas: "Smoothie vert (épinards, banane, lait d'amande) 🍌",
      ingredients: [
        { name: "🌿 Épinards", category: "Légumes" },
        { name: "🍌 Banane", category: "Fruits" },
        { name: "🥛 Lait d'amande", category: "Boissons" },
        { name: "🍵 Thé vert", category: "Boissons" },
      ],
    },
    Lunch: {
      repas: "Salade de lentilles avec légumes et œufs durs 🥕",
      ingredients: [
        { name: "🌱 Lentilles", category: "Légumineuses" },
        { name: "🥕 Carottes", category: "Légumes" },
        { name: "🌿 Céleri", category: "Légumes" },
        { name: "🥚 Œufs durs", category: "Protéines" },
      ],
    },
    Souper: {
      repas: "Poulet rôti avec quinoa et brocolis 🥦",
      ingredients: [
        { name: "🍗 Poulet", category: "Protéines" },
        { name: "🌾 Quinoa", category: "Céréales" },
        { name: "🥦 Brocolis", category: "Légumes" },
      ],
    },
  },
  vendredi: {
    Déjeuner: {
      repas: "Œufs brouillés avec avocat et tomate 🍅",
      ingredients: [
        { name: "🥚 Œufs", category: "Protéines" },
        { name: "🥑 Avocat", category: "Protéines" },
        { name: "🍅 Tomate", category: "Fruits" },
        { name: "☕ Café noir", category: "Boissons" },
      ],
    },
    Lunch: {
      repas: "Poisson blanc avec riz basmati et épinards 🌿",
      ingredients: [
        { name: "🐟 Poisson blanc", category: "Protéines" },
        { name: "🍚 Riz basmati", category: "Céréales" },
        { name: "🌿 Épinards", category: "Légumes" },
      ],
    },
    Souper: {
      repas: "Soupe de légumes avec lentilles 🥕",
      ingredients: [
        { name: "🌱 Lentilles", category: "Légumineuses" },
        { name: "🥕 Carottes", category: "Légumes" },
        { name: "🌿 Céleri", category: "Légumes" },
      ],
    },
  },
  samedi: {
    Déjeuner: {
      repas: "Porridge aux flocons d'avoine et fruits rouges 🫐",
      ingredients: [
        { name: "🌾 Flocons d'avoine", category: "Céréales" },
        { name: "🫐 Bleuets", category: "Fruits" },
        { name: "🍓 Fraises", category: "Fruits" },
        { name: "🍵 Thé vert", category: "Boissons" },
      ],
    },
    Lunch: {
      repas: "Poulet grillé avec patates douces et asperges 🍠",
      ingredients: [
        { name: "🍗 Poulet", category: "Protéines" },
        { name: "🍠 Patates douces", category: "Légumes" },
        { name: "🌿 Asperges", category: "Légumes" },
      ],
    },
    Souper: {
      repas: "Curry de légumes avec riz basmati 🍚",
      ingredients: [
        { name: "🥕 Carottes", category: "Légumes" },
        { name: "🥒 Courgettes", category: "Légumes" },
        { name: "🍚 Riz basmati", category: "Céréales" },
        { name: "🍛 Curry", category: "Épices" },
      ],
    },
  },
  dimanche: {
    Déjeuner: {
      repas: "Toast à l'avocat et œuf poché 🍳",
      ingredients: [
        { name: "🥑 Avocat", category: "Protéines" },
        { name: "🥚 Œufs", category: "Protéines" },
        { name: "🍞 Pain complet", category: "Céréales" },
        { name: "☕ Café noir", category: "Boissons" },
      ],
    },
    Lunch: {
      repas: "Salade de quinoa avec légumes grillés et poulet 🥒",
      ingredients: [
        { name: "🌾 Quinoa", category: "Céréales" },
        { name: "🍗 Poulet", category: "Protéines" },
        { name: "🥒 Courgettes", category: "Légumes" },
        { name: "🌶️ Poivrons", category: "Légumes" },
      ],
    },
    Souper: {
      repas: "Saumon grillé avec riz basmati et épinards 🌿",
      ingredients: [
        { name: "🐟 Saumon", category: "Protéines" },
        { name: "🍚 Riz basmati", category: "Céréales" },
        { name: "🌿 Épinards", category: "Légumes" },
      ],
    },
  },
};

export default mealData;
