interface Vehicle {
  make: string;
  model: string;
  year: number;
  horesePower?: number;

  start(): void; 
  addHorsePower(puissance:number): void;
}; 

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;
  horesePower? : number;

  constructor (make:string, model:string, year:number ) {
    this.make = make;
    this.model= model;
    this.year= year;
  };

    start(): void {
      console.log("Car engine started");
    };

    addHorsePower(puissance:  number) : void {
      this.horesePower = puissance;
    };

};

let newCar = new Car("Toyota", "mmmmmm",2014);

newCar.start();

newCar.addHorsePower(2000);
console.log(newCar);