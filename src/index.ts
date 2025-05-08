// problem 1
const formatString = (input: string, toUpper?: boolean): string => {
  if (toUpper === undefined) {
    return input.toUpperCase();
  } else if (toUpper === true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
};

// const result1 = formatString("ASFF World", false);
// console.log(result1);
// Output: "asff world"

// problem 2
const filterByRating = (
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return items.filter((item) => item.rating >= 4);
};
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
const filteredItems = filterByRating(books);
// console.log(filteredItems); // Output: [ { title: 'Item 2', rating: 4 }, { title: 'Item 3', rating: 5 } ]

// problem 3
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
};

// const result3 = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);

// console.log(result3); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// problem 4
class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");

const carInfo = myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
const carModel = myCar.getModel(); // Output: "Model: Corolla"

// console.log(carInfo);
// console.log(carModel);

// problem 5
const processValue = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length;
  }
  if (typeof value === "number") {
    return value * 2;
  }
  throw new Error("Invalid type");
};
// const result5 = processValue(4);
// console.log(result5); // Output: 5

// problem 6
interface Product {
  name: string;
  price: number;
}
const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) {
    return null;
  }
  return products.reduce((prev, current) => {
    return prev.price > current.price ? prev : current;
  });
};
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Pencil", price: 90 },
  { name: "Bag", price: 50 },
];
// const mostExpensiveProduct = getMostExpensiveProduct(products);
// console.log(mostExpensiveProduct);

// problem 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const getDayType = (day: Day): string => {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
};

// problem 8

const squareAsync = async (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
};
