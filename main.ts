import { Person } from './person-module';

declare module './person-module' {
  interface Person {
      slap(): void; // add a new method
  }
}

Person.prototype.slap = function() { // implement the new method
  return `You slapped ${this.firstName} ${this.lastName}`;
}

const normalPerson = new Person('John', 'Doe');

console.log(normalPerson.greet());
console.log(normalPerson.slap());

// $ ts-node main.ts
// Hello John Doe
// You slapped John Doe