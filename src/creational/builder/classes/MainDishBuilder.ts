import { meal_builder_protocol } from "../interfaces/meal_builder_protocol";
import { Composite_meal } from "./Composite_meal";
import { Beans, Beverage, Dessert, Meat, Rice, Salad } from "./Meals";

export class MainDishBuilder implements meal_builder_protocol {
  private meal: Composite_meal = new Composite_meal();

  reset(): this {
    this.meal = new Composite_meal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Branco", 4);
    const meat = new Meat("Boi", 12);
    const salad = new Salad("Simples", 3);
    const beans = new Beans("Preto", 5);
    this.meal.add(rice, meat, beans, salad);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Suco de Laranja", 5);
    this.meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Pudim", 6);
    this.meal.add(dessert);
    return this;
  }
  getCompleteMeal(): Composite_meal {
    return this.meal;
  }
  getPrice(): number {
    return this.meal.getPrice();
  }
}
