What are some differences between interfaces and types in TypeScript?

=> If You have started using typescript you have probably seen the words interface 
and type.

What’s an interface?
 Interface is used to define the shape of an object. Think of it like saying,This is what my object should look like.

 Here is Example
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Sajid",
  age: 25
};

when is Type?
=>A type is more flexible. It’s not just for objects. You can use type to describe:

* Objects
* Unions 
* Tuples

Type Example:

type ID = string | number;
type User = {
  name: string;
  id: ID;
};
type ID = string | number;

type User = {
  name: string;
  id: ID;
};

 When to Use Interface and type?


=> Use interface when you are defining objects or working with classes.Use type when you want to Combine types together(like string or number).Work with more advanced types like unions or tuples.


How TypeScript Improves Code Quality and Project Maintainability?

 What is TypeScript?

=>TypeScript is a superset of JavaScript. This means it is basically JavaScript, but with extra features.you can define the types of your variables like string, number, boolean, etc.
How TypeScript Improves Code Quality.

let age: number = "twenty"; // wrong twenty is not a number
let age: number = 23; // Right

 How TypeScript Improves Code Quality?
 
=>Typscript type based. This not only improves the quality of your code but also ensures that your project remains maintainable as it grows.In large projects, code can quickly become hard to understand. TypeScript helps by providing clear type annotations