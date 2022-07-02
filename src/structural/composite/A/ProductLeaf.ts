import { ProductComponent } from "./ProductComponent";

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
    this.price = price;
    this.name = name;
  }
  getPrice(): number {
    return this.price;
  }
}
