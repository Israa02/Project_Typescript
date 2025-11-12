;
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    ;
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    ;
    Car.prototype.addHorsePower = function (puissance) {
        this.horesePower = puissance;
    };
    ;
    return Car;
}());
;
var newCar = new Car("Toyota", "mmmmmm", 2014);
newCar.start();
newCar.addHorsePower(2000);
console.log(newCar);
