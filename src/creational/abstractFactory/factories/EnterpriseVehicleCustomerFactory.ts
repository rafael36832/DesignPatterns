import { EnterpriseCar } from "../classes/EnterpriseCar";
import { EnterpriseCustomer } from "../classes/EnterpriseCustomer";
import { Customer } from "../interfaces/Customer";
import { Vehicle } from "../interfaces/Vehicle";
import { CustomerVehicleFactory } from "./CostumerVehicleFactory";

export class EnterpriseVehicleCustomerFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const costumer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, costumer);
  }
}
