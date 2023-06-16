// Objeyi üretebilmek için interface'in class'ına ihtiyacımız var. Tabi class için interface'in şemasını kullanma şartı yok.
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
// taxi_1 => 42 abc 42
// taxi_1.currentLocation
// taxi_1.travelTo()
// taxi_2 => 42 abd 42
// taxi_2.currentLocation
// taxi_2.travelTo()
