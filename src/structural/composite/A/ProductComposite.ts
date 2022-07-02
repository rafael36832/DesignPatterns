import { ProductComponent } from "./ProductComponent";

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];
  constructor(public name: string, public price: number = -1) {
    super();
    this.price = price;
    this.name = name;
  }

  add(...products: ProductComponent[]): void {
    products.forEach((element) => {
      this.children.push(element);
    });
  }

  remove(product: ProductComponent): void {
    const index = this.children.indexOf(product);
    if (index != -1) {
      this.children.splice(index, 1);
    }
  }
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}
