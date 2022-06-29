import { Bicycle } from "../vehicles/Bicycle";
import { VehicleFactory } from "./VehicleCreator";
import { vehicle } from "../vehicles/vihecle";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): vehicle {
    return new Bicycle(vehicleName);
  }
}
