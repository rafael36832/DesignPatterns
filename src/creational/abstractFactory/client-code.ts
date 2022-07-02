import { IndividualVehicleCustomerFactory } from "./factories/IndividualVehicleCustomerFactory";
import { EnterpriseVehicleCustomerFactory } from "./factories/EnterpriseVehicleCustomerFactory";
const vehicle1 = new IndividualVehicleCustomerFactory().createVehicle(
  "Ethios",
  "Rose",
);
const vehicle2 = new EnterpriseVehicleCustomerFactory().createVehicle(
  "Ferrari",
  "Rubens",
);
vehicle1.pickUp();
vehicle2.pickUp();
