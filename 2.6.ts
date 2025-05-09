{
    //
    const addCourseToStudent = <
      T extends { id: number; email: string; name: string }
    >(
      student: T
    ) => {
      const course = "Web development";
      return {
        ...student,
        course,
      };
    };
  
    const student1 = addCourseToStudent({
      id: 222,
      name: "mr.x",
      email: "a@.pt",
    });
  
    const makeCoffee = <T>(sugarTea: T) => {
      const coffee = "flat white";
      return {
        ...sugarTea,
        coffee,
      };
    };
  
    //
  }
  