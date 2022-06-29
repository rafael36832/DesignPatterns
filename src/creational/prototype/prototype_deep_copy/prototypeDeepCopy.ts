interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}
  public addresses: Address[] = [];
  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }
  addAddresses(address: Address) {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}
  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address("Av Brasil", 23);
const person3 = new Person("Luiz", 30);
person3.addAddresses(address1);
