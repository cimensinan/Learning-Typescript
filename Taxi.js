"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
// Taxi sınıfını export hale getirdik.
var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this._location.x, " Y: ").concat(this._location.y, " dan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gider."));
    };
    Object.defineProperty(Taxi.prototype, "location", {
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
exports.Taxi = Taxi;
