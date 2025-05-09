{
  //....
  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };
  const resGeneric = createArrayWithGeneric<number>(12);

  type User = { id: number; name: string };

  const coffeeWithSugar = <T>(param: T): T[] => {
    return [param];
  };

  const resGenricObj = createArrayWithGeneric<User>({
    id: 222,
    name: "awer",
  });
  //copy
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const makeTea = <Tea, Sugar>(param1: Tea, param2: Sugar): [Tea, Sugar] => {
    return [param1, param2];
  };

  const res11 = makeTea<string, string>("black Tea", "camommile Tea");

  //
}
