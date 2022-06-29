import { vehicle } from "./vihecle";

export class Bicycle implements vehicle {
  constructor(private bicycleName: string) {}
  pickUp(costumerName: string): void {
    console.log(`${this.bicycleName} está levando ${costumerName}`);
  }
  stop(): void {
    console.log(`${this.bicycleName} Parou`);
  }
}
