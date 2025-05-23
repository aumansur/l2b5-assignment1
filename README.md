# Welcome to Assignment 1 blog page 
### Question: What are some differences between interfaces and types in TypeScript? 
### Ans: 
**interfaces:** it is a  types of a typescript content . it is a use to type checking in non primitive  data type in object . ony use in  object data type . Less flexible compared to type. it is synthetically use typescript interface in use in object . 

**Example** : 
<code>
 interface User {
    name: string;
    age:number;
    education:string;
    contactNo: string;
    address:string;
}
 </code>

 **Types** type is a important part in typescript. it is very flexible in type checking in typescript in data type . primitive and non primitive all types use in types .  like function, array, object, method . The Type System in TypeScript describes the various data types supported by the language. It is divided into three major sections: Any Type, Built-In Type, and User-Defined Type. The Type System in TypeScript is responsible for ensuring the correctness of the data types before they are used in a program.

 **Example** : 
<code>
 type User ={
    name: string;
    age:number;
    education:string;
    contactNo: string;
    address:string;
}
 </code>



### Question: What is the use of the keyof keyword in TypeScript? Provide an example.? 
### Ans: 
**Keyof:** it is string lateral  use in array and object key, like union type system When used on an object type with explicit keys, keyof creates a union type with those keys.
 **Example** : 
<code>
 type User ={
    name: string;
    age:number;
    education:string;
    contactNo: string;
    address:string;
}

interface person = keyof User 

context: All user type send to person like only key 
 </code>



### Explain the difference between any, unknown, and never types in TypeScript..? 
### Ans: 
**Any:** it is disable of type checking in typescript . any use then  type not work in project. 
 **Example** : 
<code>
 const something: any = "mansur"
 const something:412 
 const something: true 
 note: type not work any use  then back to  plain javascript. 
 </code>

**unknown:** it is declare in unknown type but no error and checking ing type Meaning: Like any, it can hold any value, but you can’t use it without type-checking first. 
 **Example** : 
<code>
let value: unknown = 42;
value = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); 
}
 </code>

 **never:** it is declare  in never type send error in project  function used in never then throw error. 
 **Example** : 
<code>
function throwError(): never {
  throw new Error("This function never returns");
}
 </code>



### Question: What is the use of enums in TypeScript? Provide an example of a numeric and string enum.? 
### Ans: 
**enums:** In TypeScript, an enum (short for enumeration) is a way to define a set of named constants. It makes code more readable and type-safe by replacing magic numbers or strings with meaningful names.
 **Example** : 
<code>
enum days  {
  Sunday,     
  Monday,     
  Tuesday,    
  Wednesday,  
  Thursday,   
  Friday,    
  Saturday    
}

const today: NumericDays = days.Monday;
console.log(today); 
 </code>
 
### Question: What is type inference in TypeScript? Why is it helpful? 
### Ans: 
**inference:** Type inference is the process by which TypeScript automatically determines the type of a variable or expression without explicit type annotations.

 **helpful** : iam use store type automatically 
 <code>
 const name: "mansur"
 // automatically  type store in variable 
 </code>



### Question: How does TypeScript help in improving code quality and project maintainability?? 
### Ans: 
 TypeScript significantly improves code quality and project maintainability by adding a robust type system on top of JavaScript. Here’s how:



 **Benefit of typescript**
* Static Type Checking
* Improved IDE Support & Autocompletion
* Code Refactoring is Safer
* Self-Documenting Code
* Better Integration with Modern Tooling
* Support for Modern JavaScript Features

### Question: Provide an example of using union and intersection types in TypeScript.? 
### Ans: 
**Union** A union type means a variable can hold one of several types.

**Example**
<code> 

const gender = "Male" | "female"

</code>

**Intersection**  An intersection type combines multiple types into one. The resulting type has all the properties of the intersected types.

**Example**
<code> 

const brother:string = "mamun"
const sister: string = "mahmuda"

const brotherSister = brother & sister 

</code>



### Question: What are Generics in TypeScript? 
### Ans: 
**Generics** Generics allow writing reusable and type-safe components or functions that work with different data types.

**Example**
<code> 

function identity<T>(arg: T): T {
  return arg;
}

const str = identity<string>("Hello");
const num = identity<number>(42);
</code>

### Question: What is readonly in TypeScript? 
### Ans: 
**Readonly** The readonly modifier makes properties immutable after initialization.

**Example**
<code> 
type User = {
  readonly id: number;
  name: string;
};

const user: User = { id: 1, name: "Alice" };
user.id = 2; // error 
</code>





  



