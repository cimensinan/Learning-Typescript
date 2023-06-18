var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this._location.x, " Y: ").concat(this._location.y, " dan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gider."));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        // private olan bir değeri bir başka fonksiyon içerine atayarak public olarak kullanmamız mümkün.
        // getLocation(){
        //   return this._location;
        // }
        // setLocation(value: Point){
        //     if(value.x < 0 || value.y < 0){
        //         throw new Error("Koordinat bilgileri negatif olamaz!");
        //     }
        //     this._location = value;
        // }
        // objenin içerisindeki property sayısı çok fazla ise yukarıdaki gibi tek tek get ve set methodları oluşturmak yorucu olabilir. Bunun için property methodları kullanıyoruz.
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("Koordinat bilgileri negatif olamaz!");
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
// getLocation(); ve setLocation() methodları artık hatalı gözükecektir.
// let currentLocation = taxi_1.getLocation();
// taxi_1.setLocation({ x: 2, y: 5 });
var currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };
