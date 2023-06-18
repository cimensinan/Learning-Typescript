interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  //   currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(private _location?: Point, private _color?: string) {}

  travelTo(point: Point): void {
    console.log(
      `taksi X: ${this._location.x} Y: ${this._location.y} dan X: ${point.x} Y: ${point.y} konumuna gider.`
    );
  }

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
  get location() {
    return this._location
  }

  set location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Koordinat bilgileri negatif olamaz!");
    }
    this._location = value;
  }
  

}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });
// getLocation(); ve setLocation() methodları artık hatalı gözükecektir.
// let currentLocation = taxi_1.getLocation();
// taxi_1.setLocation({ x: 2, y: 5 });

let currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };

