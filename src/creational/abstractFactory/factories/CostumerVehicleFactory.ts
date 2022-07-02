import { Customer } from "../interfaces/Customer";
import { Vehicle } from "../interfaces/Vehicle";

export interface CustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
