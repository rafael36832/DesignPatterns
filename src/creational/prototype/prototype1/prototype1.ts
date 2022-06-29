interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}
  public addresses: Address[] = [];
  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }
  addAddresses(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address("Av Brasil", 23);
const person3 = new Person("Luiz", 30);
person3.addAddresses(address1);
