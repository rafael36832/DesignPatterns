import { vehicle } from "../vehicles/vihecle";

export abstract class VehicleFactory {
  //factoryMethod
  abstract getVehicle(vehicleName: string): vehicle;

  pickUp(constumerName: string, vehicleName: string): vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(constumerName);
    return car;
  }
}
