;
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    ;
    return Car;
}());
;
var newCar = new Car("Toyota", "mmmmmm", 2014);
newCar.start();
console.log("1", newCar);
console.log("2", newCar.start());
