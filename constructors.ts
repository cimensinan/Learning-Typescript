interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string; // Bu color bilgisine ait objeyi constructor içerisinde tanımlamazsak aşağıdaki gibi taxi_1.color = "red"; ifadesini oluşturmamız gerekir.

  // Soru işareti eklediğimde ilgili değeri optional yapıya çeviriyorum.
  constructor(lacotion?: Point, color?: string) {
    this.currentLocation = lacotion;
    this.color = color;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gider.`);
  }
}

// new Taxi() objesi yukarıdaki constructor değeri parametre aldığı için parametresiz iken hata verir. Bu yüzden new Taxi() yapısına bir obje parametresi veriyoruz.
let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
// Aşağıdaki currentLocation değişkenini bu şekilde belirtmeme gerek kalmıyor
// taxi_1.currentLocation = {x: 2, y: 5}
console.log(taxi_1.currentLocation);

// taxi_1.color = "Red";

let taxi_2 = new Taxi({ x: 2, y: 5 }, "Red");

let taxi_3 = new Taxi();
