type User1 = {
  name: string;
  age: number;
};
type UserRoll = User1 & { role: string };

interface UserRoll1 extends User1 {
  role: string;
}

type rollNumber = number;
const user1: UserRoll = {
  name: "Azir",
  age: 32,
  role: "twenty",
};
interface User2 {
  name: string;
  age: number;
}
console.log("azir", user1);
