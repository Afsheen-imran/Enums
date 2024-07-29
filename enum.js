// Enum (Enumeration)set of named constant
// enum Color 
// {    Red ,
//     Green,
//     Blue 
// };
// let c: Color = Color.Green; //1
// enum Color1 
// {   Red =2,
//     Green= 3,
//     Blue
// };
// let colorName: string = Color1[2];
// console.log(colorName);
// enum Color2
//  {   Red = 1,
//      Green = 2,
//       Blue = 4
//     };//can assign values to all
// // let colorIndex = Color2["Blue"];
// console.log(Color2.Green); //2
// console.log(Color2["Blue"]); //4
// console.log(Color2[2]); // green
//Const enum
// const enum Direction{
//     Up =1,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Up); // 1
// console.log(Direction.Right); //4
var Direction1;
(function (Direction1) {
    Direction1["up"] = "up";
    Direction1["down"] = "down";
    Direction1["left"] = "left";
    Direction1["right"] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Colors.Red); //
export {};
