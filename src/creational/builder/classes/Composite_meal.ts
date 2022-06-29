import { meal_composite_protocol } from "../interfaces/meal_composite_protocol";

// Ideal é cada classe estar em arquivos diferentes
export class Composite_meal implements meal_composite_protocol {
  private children: meal_composite_protocol[] = [];
  private soma = 0;

  getPrice(): number {
    for (const meal of this.children) {
      this.soma = this.soma + meal.getPrice();
    }
    return this.soma;
  }

  add(...meal: meal_composite_protocol[]) {
    meal.forEach((item) => this.children.push(item));
  }
}
