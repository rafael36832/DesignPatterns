import { ValidationComponent } from "./ValidationComponent";

export class ValidationString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string";
  }
}
