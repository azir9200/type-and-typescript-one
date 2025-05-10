import { resolve } from "path";

{
  //
  //no 1
  const createData = () => {
    return new Promise((resolve, reject) => {
      const data = "my new data";
      if (data) {
        resolve(data);
      } else {
        reject("no data");
      }
      console.log(data);
    });
  };
  console.log(createData);

  //no 2
  const makeData = () => {
    return new Promise((resolve, reject) => {
      const myData = "something is data";
      if (myData) {
        resolve(myData);
      } else {
        reject("no data found");
      }
    });
  };

  const showData = async () => {
    const data = await makeData();
    console.log("show data 1", data);
  };
  showData();

  {
    //
    // json place
    type Todo = {
      id: number;
      userId: string;
      title: string;
      completed: boolean;
    };
    const getData = async (): Promise<Todo> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const res = await response.json();
      return res;
    };
    getData();
  
    //no 1
    const createPromise = (): Promise<Something> => {
      return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: "someone making tea" };
        if (data) {
          resolve(data);
        } else {
          reject("nothing is here");
        }
      });
    };
    const showData = async (): Promise<Something> => {
      const data: Something = await createPromise();
      return data;
      console.log("newData", showData);
    };
    showData();
  
    // no 2
  
    type Something = { something: string };
  
    //simulate
    //   const makeData = (): Promise<string> => {
    //     return new Promise<string>((resolve, reject) => {
    //       const myData = null;
    //       //   const myData = "my data here";
    //       if (myData) {
    //         resolve(myData);
    //       } else {
    //         reject("There is no data");
    //       }
    //       console.log("no.1", myData);
    //     });
    //   };
  
    //
  }
  
  //
}
