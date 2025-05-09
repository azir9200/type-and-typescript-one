type GenericArray<T> = Array<T>;
const rollNumbers: Array<number> = [3, 4, 5];
const nameList: Array<string> = ["my", "name", "is", "Azir", "role"];
const yesNo: Array<boolean> = [true, false, true, true];

const add = (x: number, y: number) => x - y;
add(34, 23);

const user: GenericArray<{ name: string; age: number }> = [
  {
    name: "Mezba",
    age: 23,
  },
  {
    name: "azir",
    age: 23,
  },
];

// tuple
type GenTuple<X, Y> = [X, Y];
const manush: GenTuple<string, string> = ["mr  ali", "ms fatima"];

type generArray<all, oll> = [all, oll];
const coffee: generArray<string, string> = ["Latte", "capoccino"];

type geNumber<some, more, over,> = [some, more, over, ];
const something: geNumber<string, number, boolean> = ["azir", 12, true];


// const mySome: geNumber<{name: string, age: number, isMarried: boolean}> = [
//   { name: "azir", age: 122, isMarried: true },
//   { name: "azir", age: 122, isMarried: true },
// ];
