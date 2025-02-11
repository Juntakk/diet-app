type Meal = {
  type: string;
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
    "8:00 AM": {
      type: "Petit Déjeuner",
      repas:
        "Œufs brouillés aux épinards, curcuma et avocat sur du pain complet",
      boisson: "Thé vert",
      ingredients: [
        "Œufs",
        "Épinards",
        "Curcuma",
        "Avocat",
        "Pain complet",
        "Thé vert",
      ],
    },
    "11:00 AM": {
      type: "Encas 1",
      repas: "Une poignée d'amandes et de noix de Grenoble",
      complement: "1 petite pomme",
      ingredients: ["Amandes", "Noix de Grenoble", "Pomme"],
    },
    "2:00 PM": {
      type: "Déjeuner",
      repas: "Saumon grillé avec quinoa, brocolis vapeur et huile d'olive",
      alimentsFermentes: "Choucroute ou kimchi",
      ingredients: [
        "Saumon",
        "Quinoa",
        "Brocolis",
        "Huile d'olive",
        "Choucroute",
        "Kimchi",
      ],
    },
    "5:30 PM": {
      type: "Encas 2",
      repas: "Yaourt grec nature avec cannelle et graines de lin",
      ingredients: ["Yaourt grec", "Cannelle", "Graines de lin"],
    },
    "7:30 PM": {
      type: "Dîner",
      repas:
        "Poêlée de poulet et légumes (courgettes, poivrons, ail) avec riz de chou-fleur",
      ingredients: [
        "Poulet",
        "Courgettes",
        "Poivrons",
        "Ail",
        "Riz de chou-fleur",
      ],
    },
  },
  mardi: {
    "8:00 AM": {
      type: "Petit Déjeuner",
      repas:
        "Porridge aux flocons d'avoine, myrtilles, graines de chia et amandes",
      boisson: "Thé curcuma-gingembre",
      ingredients: [
        "Flocons d'avoine",
        "Myrtilles",
        "Graines de chia",
        "Amandes",
        "Thé curcuma-gingembre",
      ],
    },
    "11:00 AM": {
      type: "Encas 1",
      repas: "Œufs durs avec bâtonnets de concombre",
      ingredients: ["Œufs", "Concombre"],
    },
    "2:00 PM": {
      type: "Déjeuner",
      repas:
        "Poulet grillé avec patates douces rôties, asperges et huile d'olive",
      ingredients: ["Poulet", "Patates douces", "Asperges", "Huile d'olive"],
    },
    "5:30 PM": {
      type: "Encas 2",
      repas: "Guacamole avec bâtonnets de carottes et céleri",
      ingredients: ["Avocat", "Citron", "Tomates", "Carottes", "Céleri"],
    },
    "7:30 PM": {
      type: "Dîner",
      repas: "Soupe de lentilles avec légumes verts et curcuma",
      ingredients: [
        "Lentilles",
        "Légumes verts (par exemple épinards, chou frisé)",
        "Curcuma",
      ],
    },
  },
  mercredi: {
    "8:00 AM": {
      type: "Petit Déjeuner",
      repas: "Smoothie vert (épinards, banane, lait d'amande, graines de chia)",
      boisson: "Café noir",
      ingredients: [
        "Épinards",
        "Banane",
        "Lait d'amande",
        "Graines de chia",
        "Café noir",
      ],
    },
    "11:00 AM": {
      type: "Encas 1",
      repas: "Bâtonnets de céleri avec beurre d'amande",
      ingredients: ["Céleri", "Beurre d'amande"],
    },
    "2:00 PM": {
      type: "Déjeuner",
      repas:
        "Salade de quinoa avec légumes grillés et vinaigrette à l'huile d'olive",
      ingredients: [
        "Quinoa",
        "Légumes grillés (courgettes, poivrons, aubergines)",
        "Huile d'olive",
      ],
    },
    "5:30 PM": {
      type: "Encas 2",
      repas: "Yaourt nature avec des fruits frais et un peu de miel",
      ingredients: ["Yaourt nature", "Fruits frais", "Miel"],
    },
    "7:30 PM": {
      type: "Dîner",
      repas: "Filet de poisson blanc avec riz basmati et légumes vapeur",
      ingredients: ["Poisson blanc", "Riz basmati", "Légumes vapeur"],
    },
  },
  jeudi: {
    "8:00 AM": {
      type: "Petit Déjeuner",
      repas: "Toast à l'avocat avec œuf poché et tomate",
      boisson: "Thé vert",
      ingredients: ["Avocat", "Œuf", "Pain complet", "Tomate", "Thé vert"],
    },
    "11:00 AM": {
      type: "Encas 1",
      repas: "Amandes et raisins secs",
      ingredients: ["Amandes", "Raisins secs"],
    },
    "2:00 PM": {
      type: "Déjeuner",
      repas: "Steak grillé avec pommes de terre rôties et légumes verts",
      ingredients: ["Steak", "Pommes de terre", "Légumes verts"],
    },
    "5:30 PM": {
      type: "Encas 2",
      repas: "Guacamole avec bâtonnets de légumes",
      ingredients: ["Avocat", "Citron", "Tomates", "Carottes", "Poivrons"],
    },
    "7:30 PM": {
      type: "Dîner",
      repas:
        "Sauté de tofu avec légumes (brocolis, poivrons) et riz de chou-fleur",
      ingredients: ["Tofu", "Brocolis", "Poivrons", "Riz de chou-fleur"],
    },
  },
  vendredi: {
    "8:00 AM": {
      type: "Petit Déjeuner",
      repas: "Pancakes aux flocons d'avoine avec fruits rouges",
      boisson: "Café noir",
      ingredients: ["Flocons d'avoine", "Fruits rouges", "Miel", "Café noir"],
    },
    "11:00 AM": {
      type: "Encas 1",
      repas: "Bâtonnets de légumes avec houmous",
      ingredients: ["Légumes", "Houmous"],
    },
    "2:00 PM": {
      type: "Déjeuner",
      repas: "Poulet au curry avec riz basmati et légumes verts",
      ingredients: ["Poulet", "Curry", "Riz basmati", "Légumes verts"],
    },
    "5:30 PM": {
      type: "Encas 2",
      repas: "Yaourt nature avec graines de chia et noix de pécan",
      ingredients: ["Yaourt nature", "Graines de chia", "Noix de pécan"],
    },
    "7:30 PM": {
      type: "Dîner",
      repas: "Pizza maison à la pâte de chou-fleur avec légumes",
      ingredients: [
        "Pâte de chou-fleur",
        "Légumes (tomates, poivrons, oignons)",
        "Fromage",
      ],
    },
  },
  samedi: {
    "8:00 AM": {
      type: "Petit Déjeuner",
      repas: "Omelette avec légumes (poivrons, épinards) et fromage de chèvre",
      boisson: "Thé vert",
      ingredients: [
        "Œufs",
        "Poivrons",
        "Épinards",
        "Fromage de chèvre",
        "Thé vert",
      ],
    },
    "11:00 AM": {
      type: "Encas 1",
      repas: "Yaourt nature avec des graines de tournesol",
      ingredients: ["Yaourt nature", "Graines de tournesol"],
    },
    "2:00 PM": {
      type: "Déjeuner",
      repas: "Salade de pâtes avec légumes grillés et vinaigrette au yaourt",
      ingredients: ["Pâtes", "Légumes grillés", "Yaourt", "Vinaigrette"],
    },
    "5:30 PM": {
      type: "Encas 2",
      repas: "Bâtonnets de carottes avec sauce au yaourt",
      ingredients: ["Carottes", "Yaourt", "Citron"],
    },
    "7:30 PM": {
      type: "Dîner",
      repas: "Poisson grillé avec légumes vapeur et quinoa",
      ingredients: ["Poisson grillé", "Légumes vapeur", "Quinoa"],
    },
  },
  dimanche: {
    "8:00 AM": {
      type: "Petit Déjeuner",
      repas: "Smoothie bowl avec banane, fruits rouges et granola",
      boisson: "Jus d'orange frais",
      ingredients: ["Banane", "Fruits rouges", "Granola", "Jus d'orange frais"],
    },
    "11:00 AM": {
      type: "Encas 1",
      repas: "Mélange de noix et de fruits secs",
      ingredients: ["Noix", "Fruits secs"],
    },
    "2:00 PM": {
      type: "Déjeuner",
      repas: "Curry de légumes avec riz basmati",
      ingredients: ["Légumes", "Curry", "Riz basmati"],
    },
    "5:30 PM": {
      type: "Encas 2",
      repas: "Bâtonnets de légumes avec houmous",
      ingredients: ["Légumes", "Houmous"],
    },
    "7:30 PM": {
      type: "Dîner",
      repas: "Ragoût de légumes avec pois chiches et quinoa",
      ingredients: ["Légumes", "Pois chiches", "Quinoa"],
    },
  },
};

export default mealData;
