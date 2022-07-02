import { Customer } from "../interfaces/Customer";

export class IndividualCustomer implements Customer {
  constructor(public name: string) {}
}
