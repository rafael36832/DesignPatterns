import { Car } from "../vehicles/Car";
import { VehicleFactory } from "./VehicleCreator";
import { vehicle } from "../vehicles/vihecle";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): vehicle {
    return new Car(vehicleName);
  }
}
