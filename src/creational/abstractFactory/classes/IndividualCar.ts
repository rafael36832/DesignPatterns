import { Vehicle } from "../interfaces/Vehicle";
import { Customer } from "../interfaces/Customer";

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}
  pickUp(): void {
    console.log(`${this.name} (Individual) is carrying ${this.customer.name}`);
  }
}
