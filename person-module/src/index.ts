interface Person {
  firstName: string;
  lastName: string;
  greet(): string;
}

class Person implements Person {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

export { Person };
