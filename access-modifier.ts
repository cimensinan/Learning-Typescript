interface Point {
  x: number;
  y: number;
}

interface Vehicle {
//   currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  // public color: string; // Bu şekilde public ifadesi de kullanılabilir. Ancak public olarak ayarladığımız bir yapı için bunu kullanmak zorunda değiliz.
  // color: string; // Yukarıdaki mantıkla bu şekilde de public olan bir değer dışarıdan değiştirilmeye açık değerlerdir. Bunların değiştirilmesinin önüne geçmek için private ifadesi kullanılmalıdır.

  //  private color: string;
  //  private currentLocation: Point;
  // Yukarıdaki gibi değerlerimizi private olarak ayarlayabiliriz. Ya da constructor içerisinde de private olarak ayarlayabiliriz. Böylece yukarıdaki yapıları oluşturmamıza gerek kalmaz. Ayrıca this diyerek atama yapmamıza da gerek kalmıyor. İşlemi böylece kısaltmış oluyoruz.
  constructor(private location?: Point, private color?: string) {
    // this.currentLocation = location;
    // this.color = color;
  }

  travelTo(point: Point): void {
    console.log(`taksi X: ${this.location.x} Y: ${this.location.y} dan X: ${point.x} Y: ${point.y} konumuna gider.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
// taxi_1 üzerinden yukarıda ilgili değerlerimizi private yaptığımız için artık sadece travelTo değerine ulaşabiliyoruz.
taxi_1.travelTo({ x: 1, y: 2 });
