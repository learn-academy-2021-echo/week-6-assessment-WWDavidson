// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// describe(" ", () => {
//       it("", () => {
//         expect();
//       });
//   });  






// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// a) Create a test with an expect statement using the variable provided.


//as per the feedback from last week's assessment, I will try building my test around the provided inputs instead of copy and pasting them in the test after. 
// I will name my function nameAndOcc


describe("nameAndOcc", () => {
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
      expect(nameAndOcc(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);
    });
});  




// b) Create the function that makes the test pass.
//first I need to create function that takes in an array as it's parameter
// I will then need to iterate over the array and access the names 
//I will then need to capitalize the first letter of the first and last names
//since the only way to capitalize strings that I'm currently aware of is .toUpperCase, I will have to use .slice to separate the first letter from the rest of the word list
// THen using string interpolation I can return the sentence as desired.

const nameAndOcc = (array) => {
  return array.map((object) => `${object.name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} is ${object.occupation}.`
  );
};


// I started attempting to see if I could make the array of objects work as a new instance of a class. 
// I will come back to this if I have the time because it seemed like I may have been getting somewhere.

// class PersonAndProfession {
//   constructor([{name, occupation}]){
//     this.name = name.charAt(0).toUpperCase() + name.slice(1)
//     this.occupation = occupation
//   }

//   nameAndOcc(){
//    return `${this.name} is ${this.occupation}.`
//   }

// }

// var people = new PersonAndProfession ([
// { name: "ford prefect", occupation: "a hitchhiker" },
// {name: "zaphod beeblebrox", occupation: "president of the galaxy"},
// { name: "arthur dent", occupation: "a radio employee"} 
// ])
// console.log(people.nameAndOcc())




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//I will name my funciton cuber



describe("cuber ", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
it("akes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 ", () => {
    expect(cuber(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
    expect(cuber(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  });
});  




// b) Create the function that makes the test pass.

//I need to create a function that takes in an array of mixed data 
//I then need to filter out elements that aren't numbers 
// as I iterate, I can add the numbers to an array after finding their remainder using ' % 3'
//then I can just return the array of remainders


const cuber = (array) => {
  let remainderArray = []
  array.filter(value => {
    if(typeof value === 'number'){
      remainderArray.push(value % 3)
    }
  })
    return remainderArray
}
















// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//I will name my function "cubeNSummer"


describe("cubeNSummer ", () => {
      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
     expect(cubeNSummer(cubeAndSum1)).toEqual(99);
     expect(cubeNSummer(cubeAndSum2)).toEqual(1125);
  });
}); 



// b) Create the function that makes the test pass.
//first i need to create a function that takes in an array of numbers
//I will then need to iterate over the array and create a new array of the numbers cubed
//I will then add the elements of the array by iterating over them and using the += operator 
// I also saw another way using the reduce method that would save some code. If I have time I will come back and make another funciton with it for practice. 

const cubeNSummer = (array) => {
  let sum = 0;
  let cubedArray = [];
   array.map(value  =>{
    cubedArray.push(value ** 3)
  })
  for (let i = 0; i < cubedArray.length; i++){
    sum += cubedArray[i];
  }
  return sum
}