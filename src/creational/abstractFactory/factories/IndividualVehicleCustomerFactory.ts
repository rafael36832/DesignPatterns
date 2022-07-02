import { Customer } from "../interfaces/Customer";
import { Vehicle } from "../interfaces/Vehicle";
import { CustomerVehicleFactory } from "./CostumerVehicleFactory";
import { IndividualCustomer } from "../classes/IndividualCustomer";
import { IndividualCar } from "../classes/IndividualCar";

export class IndividualVehicleCustomerFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const costumer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, costumer);
  }
}
