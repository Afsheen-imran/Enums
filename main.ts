// //Promises
// //it is solution of callback hell, they are object in js

// import { log } from "console";

// //syntax
// /*let promise = new Promise((resolve, reject)=>{})
//                   //function with 2 handlers
// resolve and reject are callbacks provided by js   
// Promises has 3 states
// pending
// fulfilled
// reject*/

// // let returnedMoney = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("success...");
// //   }, 3000);
// // });

// // returnedMoney.then((value) => {
// //   console.log(value);
// //   console.log("Thanks for returning money");
// // });

// // returnedMoney.catch((value) => {
// //   console.log(value);
// //   console.log("sorry i can't return the money");

// // });
// // returnedMoney.finally(()=>{
// //     console.log("next time i will not give you money");
    
// // })
// // Example of promise

// function washing() {
//   console.log("washing started....");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("washing done");
//     }, 3000);
//   });
// }

// function soaking() {
//   console.log("soaking started.....");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("soaking not done");
//     }, 2000);
//   });
// }

// function drying() {
//   console.log("drying started....");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("drying done");
//     }, 1000);
//   });
// }

// // washing()
// //   .then((value) => {
// //     console.log(value);
// //     return soaking();
// //   })

// //   .then((value) => {
// //     console.log(value);
// //     return drying();
// //   })

// //   .then((value) => {
// //     console.log(value);
// //   })
  
// //     .catch((error)=>{
// //         console.log(error);
        
// //     });

//     //Async await

    
    async  function funcwashingmachine(){
    try{
    const result1 = await washing();
    console.log(result1);
    const result2 = await soaking();
    console.log(result2);
    const result3 = await drying();
    console.log(result3);
    }
    catch(error){
        console.log(error);
     }    
    finally{
        console.log(" I will run anyway");
        
//     }
//     }

//     funcwashingmachine()
//  // Promise.all([washing(), soaking(), drying()])




 let arr: Array<number> = [1,2,3,4,5];
 let [a,...b] = arr;
 console.log(b)


 function add(a,b){return a+b;}
 let add = (a,b) => a +b;
 const add = function (a,b){return a +b;}

 All of above