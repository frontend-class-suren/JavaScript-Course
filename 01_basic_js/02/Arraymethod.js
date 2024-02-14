// const array1 = [1, 2, 6, 5, 1, 2, 6, 5];

// Fill with 0 from position 2 until position 4
// console.log(array1.fill(10,2,7));
// Expected output: Array [1, 2, 0, 0]
// index i= 0 =>start
//index+1 = end 


// Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]


const studentRecord = [
    { name: "one", quantity: 12 },
    { name: "two", quantity: 10 },
    { name: "three", quantity: 15 },
  ];
  
  function isStudent(record) {
    return record.name === "three";
  }
  
  console.log(studentRecord.find(isStudent));
  // { name: 'cherries', quantity: 5 }