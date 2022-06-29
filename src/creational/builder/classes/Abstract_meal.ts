import { meal_composite_protocol } from "../interfaces/meal_composite_protocol";

export abstract class Abstract_meal implements meal_composite_protocol {
  constructor(private name: string, private price: number) {}
  getPrice(): number {
    return this.price;
  }
}
