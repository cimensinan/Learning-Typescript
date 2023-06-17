var Taxi = /** @class */ (function () {
    // Soru işareti eklediğimde ilgili değeri optional yapıya çeviriyorum.
    function Taxi(lacotion, color) {
        this.currentLocation = lacotion;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gider."));
    };
    return Taxi;
}());
// new Taxi() objesi yukarıdaki constructor değeri parametre aldığı için parametresiz iken hata verir. Bu yüzden new Taxi() yapısına bir obje parametresi veriyoruz.
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
// Aşağıdaki currentLocation değişkenini bu şekilde belirtmeme gerek kalmıyor
// taxi_1.currentLocation = {x: 2, y: 5}
console.log(taxi_1.currentLocation);
// taxi_1.color = "Red";
var taxi_2 = new Taxi({ x: 2, y: 5 }, "Red");
var taxi_3 = new Taxi();
