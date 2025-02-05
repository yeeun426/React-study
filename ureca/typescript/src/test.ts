let array: number[] = [];
let value = array[0];
console.log(value)

// function getValue(): string | undefined {
//     return '';
// }
  
// let value = getValue();
// console.log('value length: ' + value!.length);
  

// interface Person {
//     name: string;
//     age: number;
//     location?: string;
//   }
  
//   const bob: Omit<Person, 'age' | 'location'> = {
//     name: 'Bob',
// };

// interface Point {
//     x: number;
//     y: number;
//   }
  
//   let a:Point = {x : 10, y : 10};
//   let pointPart: Partial<Point> = {}; 
//   // Point의 부분을 사용할 것이다.
//   // `Partial` allows x and y to be optional
//   pointPart.x = 10;
  

// class NamedValue<T=string> {
//     private _value: T | undefined;

//     constructor(private name : string) {}
//     public setValue(value: T) {
//         this._value=value;
//     }
//     public getValue():T|undefined {
//         return this._value;
//     }
//     public toString():string {
//         return `${this.name}: ${this._value}`;
//     }
// }

// let a = new NamedValue('myNumber');
// a.setValue("10");
// console.log(a.toString());
 
// const nameAgeMap: { [name: string]: number } = {};
// nameAgeMap.Jack = 25; // no error

// const json = JSON.parse("55")
// console.log(typeof json)

// let firstName: string =  "Dylan";
// firstName = 33;
// console.log(firstName);