import { vehicle } from "./vihecle";

export class Car implements vehicle {
  constructor(private carName: string) {}
  pickUp(costumerName: string): void {
    console.log(`${this.carName} está levando ${costumerName}`);
  }
  stop(): void {
    console.log(`${this.carName} Parou`);
  }
}
