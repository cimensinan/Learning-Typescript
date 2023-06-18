var Taxi = /** @class */ (function () {
    // public color: string; // Bu şekilde public ifadesi de kullanılabilir. Ancak public olarak ayarladığımız bir yapı için bunu kullanmak zorunda değiliz.
    // color: string; // Yukarıdaki mantıkla bu şekilde de public olan bir değer dışarıdan değiştirilmeye açık değerlerdir. Bunların değiştirilmesinin önüne geçmek için private ifadesi kullanılmalıdır.
    //  private color: string;
    //  private currentLocation: Point;
    // Yukarıdaki gibi değerlerimizi private olarak ayarlayabiliriz. Ya da constructor içerisinde de private olarak ayarlayabiliriz. Böylece yukarıdaki yapıları oluşturmamıza gerek kalmaz. Ayrıca this diyerek atama yapmamıza da gerek kalmıyor. İşlemi böylece kısaltmış oluyoruz.
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        // this.currentLocation = location;
        // this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this.location.x, " Y: ").concat(this.location.y, " dan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gider."));
    };
    return Taxi;
}());
// taxi_1 üzerinden artık loaction ve color değerlerimize kontrollü bir şekilde ulaşabiliyoruz.
var taxi_1 = new Taxi({ x: 2, y: 5 });
// taxi_1 üzerinden yukarıda ilgili değerlerimizi private yaptığımız için artık sadece travelTo değerine ulaşabiliyoruz.
taxi_1.travelTo({ x: 1, y: 2 });
