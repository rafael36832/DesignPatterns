import { IndividualVehicleCustomerFactory } from "./factories/IndividualVehicleCustomerFactory";

const vehicle1 = new IndividualVehicleCustomerFactory().createVehicle(
  "Ethios",
  "Rose",
);
vehicle1.pickUp();
