interface Vehicle {
  make: string;
  model: string;
  year: number;

  start(): void; 
}; 

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor (make:string, model:string, year:number ) {
    this.make = make;
    this.model= model;
    this.year= year;}

    start(): void {
      console.log("Car engine started");
    };

};

let newCar = new Car("Toyota", "mmmmmm",2014);

newCar.start();

console.log("1",newCar)
console.log("2",newCar.start())