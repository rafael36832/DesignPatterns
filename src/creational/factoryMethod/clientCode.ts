import { Car } from "./vehicles/Car";
import { Bicycle } from "./vehicles/Bicycle";
import { CarFactory } from "./factories/CarFactory";
import { BicycleFactory } from "./factories/BicycleFactory";

// Without Factory. Caso ocorra alteração na classe Car,
// é necessário mexer no código do cliente

const carro1 = new Car("Fiesta");
carro1.pickUp("Joana");
carro1.stop();

const carro2 = new Car("Fusca");
carro2.pickUp("Rodrigo");
carro2.stop();

// Usando Factory
// Possíveis mudanças não ocorreram no código do cliente, somente nas factories

console.log("Com factory:");
const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const carro3 = carFactory.getVehicle("Ferrari");
carro3.pickUp("Carmen");
carro3.stop();

const bicycle1 = bicycleFactory.getVehicle("Monark");
bicycle1.pickUp("Lucia");
bicycle1.stop();
