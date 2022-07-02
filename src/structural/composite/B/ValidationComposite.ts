import { ValidationComponent } from "./ValidationComponent";

export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (validation == false) return false; // Se alguma validação falhar, gera erro
    }
    return true;
  }
  add(...children: ValidationComponent[]) {
    children.forEach((element) => this.children.push(element));
  }
}
