import { Customer } from "../interfaces/Customer";

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {}
}
