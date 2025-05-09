{
  //
  type User1 = {
    name: string;
    age: number;
  };
  type UserWithRoll1 = User1 & { roll: string };
  interface userWithRoll2 extends User1 {
    role: string;
  }

  const manager: userWithRoll2 = {
    name: "my manager",
    age: 23,
    role: "manager",
  };
  const user1: UserWithRoll1 = {
    name: "azir",
    age: 21,
    roll: "21",
  };

  type coffee = { americano: string; latte: string };
  type coffeeMocha = coffee & { mocha: string };
  const allCoffee: coffeeMocha = {
    americano: " americano coffee",
    latte: "milky coffee",
    mocha: "coffee chocolate",
  };

  type drinks = { one: string; two: boolean };
  type tea = drinks & { tea: number };
  const myDrinks: tea = { one: "coffee", two: true, tea: 21 };

  type rollNumber = number;

  interface User2 {
    name: string;
    age: number;
    study: boolean;
  }

  const azir: User1 = {
    name: "azir",
    age: 32,
  };

  type serialNumber = number[];

  interface Serial2 {
    [index: number]: number;
  }
  //   type Serial1 = number[];
  const serialNumber1: Serial2 = [1, 2, 3];

  //    ex
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const total: Add2 = (num1, num2) => num1 + num2;

  //
}
