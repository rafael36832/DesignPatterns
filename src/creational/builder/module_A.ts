import { Composite_meal } from "./classes/Composite_meal";
import { Rice } from "./classes/Meals";
import { Beans } from "./classes/Meals";
import { Meat } from "./classes/Meals";
import { Salad } from "./classes/Meals";

const rice = new Rice("Integral", 4);
const beans = new Beans("Preto", 3);
const meat = new Meat("Cow", 10);
const salad = new Salad("Tradicional", 2);

const mealBox = new Composite_meal();
mealBox.add(rice, beans, meat, salad);
console.log(mealBox.getPrice());
