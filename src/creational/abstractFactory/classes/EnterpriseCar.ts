import { Customer } from "../interfaces/Customer";
import { Vehicle } from "../interfaces/Vehicle";

export class EnterpriseCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}
  pickUp(): void {
    console.log(`${this.name} (Enterprise) is carrying ${this.customer.name}`);
  }
}
