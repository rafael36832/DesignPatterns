export abstract class ProductComponent {
  abstract getPrice(): number;
  add(...products: ProductComponent[]): void {} // Não pode ser abstract pois as Leafs não implementa
  remove(product: ProductComponent): void {} // Não pode ser abstract pois as Leafs não implementa
}
