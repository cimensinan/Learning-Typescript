var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gider."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gider."));
    };
    return Bus;
}());
var taxi_1 = new Taxi(); // taxi_1 değişkeninin tipini Taxi olarak belirliyoruz ve new dedikten sonra bir obje türetmiş oluyoruz.
taxi_1.travelTo({ x: 1, y: 2 }); // tanımladığımız taxi_1 değişkeni üzerinden nokta koyarak interface değerlerine ulaşabiliyoruz. travelTo interface'i bizden bir obje bekliyordu. Onları veriyoruz.
taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi(); // : Taxi demesek de olur. new diyerek doğrudan obje tanımlaması yapabiliyoruz.
taxi_2.travelTo({ x: 5, y: 6 });
taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
var bus_1 = new Bus();
bus_1.travelTo({ x: 5, y: 6 });
// "node object.js" komutu ile terminalde console'daki mesajı yazdırdık
