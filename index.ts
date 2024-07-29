// //loops 

// import { log } from "console";

// //for loop
// //while loop
// //do while loop
// //for in loop
// //for of loop

// //for loop

// //syntax

// //for(initialization; condition; increment/decrement){}
//                           //      i++        i--
// // for(let i = 1; i <= 5; i++){
// // console.log("hello");

// // };
// //             0        1       2        3          4
// // let array = ["mango","apple","banana","pineapple","grapes"]

// // for(let i = 1; i <= 4; i ++){

// //     console.log(array[i]);
// // };

// //while loop

// // let i = 0;

// // while(i < 4){
// // console.log(i);  // 0,1,2,3
// // i++

// // };

// //do while loop

// // let i = 0;
// // do{console.log(i);
// //     i++

// // }while(i < 4 )

// //for in loop

// let array = ["mango","apple","banana","pineapple","grapes"]

// for(let Array in array){
//     console.log(Array);
    
// };


// // let obj1 = { name:"nirma", age: 20, id: 3 };
// // for (let prop in obj) {
// //   console.log(prop, obj[prop]);
// //  }

// //  const obj = { a: 1, b: 2, c: 3 };
// // for (const prop in obj) {
// //   console.log(prop, obj[prop]); // outputs: "a 1", "b 2", "c 3"
// // }

// //for of loop

// // let array1 = ["mango","apple","banana","pineapple","grapes"]

// // for(let fruit of array1){
// //     console.log(fruit);
// // };

// // const str = "hello";
// // for (const char of str) {
// //   console.log(char); 
// // }

// // how can we declare variable in typescipt

// let mynum: number  //correct answer
// let mynum1: number = 6;
// let myname:string = "afsheen";

// // if else main even or odd
// let number = 10;
// if( number % 2 == 0){      //
//     console.log("number is even")  

// }else{
//     console.log("number is odd")
// }
    
// // ternary operator

// let number1 = 10;
// console.log(number % 2 == 0 ? "number is even" : "number is odd");


// // //Enums k liye 4 statements they 
// // - enums values can strings
// // - enums values can number 
// // - enums are used as named constant
// // - enums can be used as types

// // //- enums values can strings
// // - enums values can number 
// // - enums are used as named constant
// // - enums can not be used in switch case

// //- let is block scope and var is function scope 
// // - let is function scope and var is block scope

// let myname1 = "string"
// console.log(typeof myname1);


// //hoisting
// console.log(add(4,2));

// function add(num1:number,num2:number):number{
//     return num1 + num2
// }
// //arrow function

// ()=>{}
// console.log(sum(4,2));

// let sum = (a:number, b:number)=> a + b


// function box(name:string, ...rest:number[]|string[]){
// return name + rest

// }
// console.log(box("nirma",400,300);


// let dob : string | number;

// a:"1997"
// b: 1997
// c: undefined
// d: both a & b

// //Ternary operator
let newAge = Math.random() > 0.6 ?  "Afsheen" : 23

if (newAge ==="string"){
    console.log(newAge.toUpperCase());
    
}else {
    console.log(newAge.toString());
    
}