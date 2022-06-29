function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const PersonPrototype = {
  firstName: "Luiz",
  lastName: "Gama",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(PersonPrototype); // Mudando o prototype do objeto PersonPrototype
const Lara = new Person("Lara", "Barbosa", 45);
console.log(Lara.fullName());

function heritagePerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.relativeName = "Jr";
}

heritagePerson.prototype = Object.create(PersonPrototype);
heritagePerson.prototype.constructor = Person;
console.log(heritagePerson);
