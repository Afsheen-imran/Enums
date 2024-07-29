// Enum (Enumeration)set of named constant

enum Color 
{    Red ,
    Green,
    Blue 
};
let c: Color = Color.Green; //1

enum Color1 
{   Red =2,
    Green= 3,
    Blue
};
let colorName: string = Color1[2];
console.log(colorName);

enum Color2
 {   Red = 1,
     Green = 2,
      Blue = 4
    };//can assign values to all
// let colorIndex = Color2["Blue"];
console.log(Color2.Green); //2
console.log(Color2["Blue"]); //4
console.log(Color2[2]); // green

//Const enum

const enum Direction{
    Up =1,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // 1
console.log(Direction.Right); //4



enum Direction1 {
    "up" = "up",
    "down" = "down",
    "left" = "left",
    "right" = "right",
  }
  
  console.log(Direction1.Up); // "UP"
  console.log(Direction1.Right); //"RIGHT
  
  //heterogenous enum

  enum Mix {
    Monday = "Monday",
    ID =  45
  }
  
  computed number

  enum Calculation{

    Num1 = 1,
    Num2 = Num1 *2,
    Num3 = Num2 + 3
  }

  console.log(Calculation.Num2);
  console.log(Calculation.Num3);

  //Ambiant Enum

  declare enum Colors{
    Red ,
    Green,
    Blue

  }
    
  console.log(Colors.Red);
  
  
  