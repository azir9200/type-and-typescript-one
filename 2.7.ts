import Module from "node:module";

type Vechicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = "bike" | "car" | "ship";

type Owner2 = keyof Vechicle;

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const car = {
  model: "Toyota 100",
  year: 2000,
};

const result = getPropertyValue(car, "model");
