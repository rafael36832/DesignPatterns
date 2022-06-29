const PersonPrototype = {
  firstName: "Luiz",
  lastName: "Gama",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(PersonPrototype);
console.log(anotherPerson.firstName); // Como o first name não existe nesse objeto, pegará do protótipo
anotherPerson.firstName = "Vasco da";
console.log(anotherPerson.fullName()); // Agora o first name do objeto faz sombra no fisrt name do protótipo
