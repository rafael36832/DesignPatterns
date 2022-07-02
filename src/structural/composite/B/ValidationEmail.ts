import { ValidationComponent } from "./ValidationComponent";

export class ValidationEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") return false;
    return /@/.test(value);
  }
}
