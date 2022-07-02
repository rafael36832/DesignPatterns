import { ProductComposite } from "./ProductComposite";
import { ProductLeaf } from "./ProductLeaf";

const feijao = new ProductLeaf("Feijao", 8);
const arroz = new ProductLeaf("Arroz", 21);
const refeicao: ProductComposite = new ProductComposite("ArrozEFeijao");
refeicao.add(feijao, arroz);
console.log(refeicao.getPrice());
