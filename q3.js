const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];

function result(name)  {
    for(let student of students){
        if (student.name === name) { 
            return student.marks > 90 ?
                console.log(`congratulation ${student.name}! you have cleared the exam.`)
                
            : 
                console.log(`sorry ${student.name}! you have not cleared the exam.`)
            }
        
        }
                     console.log("invalid!!!");
        
    };

    result("Prabir")
    result("Mithun")
    result("Mithgvun")

// output
// sorry Prabir! you have not cleared the exam.
// congratulation Mithun! you have cleared the exam.
// invalid!!!
    