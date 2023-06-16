// Aşağıda fonksiyonların içerisindeki parametreleri ve parametrelerin type'larını tek bir yerden belirleyebiliriz. Yani objemizin şeklini belirleriz. Bizim obje üretebilmemiz için "class"a ihtiyacımız var.
interface Point {
    x: number,
    y: number
}

interface Passenger {
    name: string;
    phone: string;
}

// Tanımlayacak olduğumuz herhangi bir aracın istediğimiz özelliklerini tanımladığımız bir yer
interface Vehicle {
    currentLocation: Point; // x ve y değerlerine sahip bir konum bilgisi olsun
    travelTo(point: Point): void; // travelTo fonskiyonunu burada tanımlayabilirim. Burada travelTo fonksiyon değil artık bir metot olarak tanımlanıyor. Burada sadece bu metoda ne parametresi gelecek ve geriye ne döndürecek onu belirtiyoruz. Buralarda gövde belirtmiyoruz. Sadece metodun şemasını belirtiyoruz.
    getDistance(pointA: Point, pointB: Point): number;
    // Dışarda Passenger adında bir interface tanımlayıp kullanabiliyoruz.
    addPassenger(passenger: Passenger): void; // geriye bişey döndürmüyor araca yolcu ekliyor.
    removePassenger(passenger: Passenger): void; // geriye bişey döndürmüyor aractan yolcu çıkarıyor.
}

// Bu fonksiyon tanımlamalarına artık ihtiyaç yok tüm bunlara ilişkin verileri bir interface içerisinde tanımladık.
// let travelTo = (a, b, x, y, z) => {} şeklinde tek tek parametre göndermek yerine aşağıdaki gibi bir obje gönderebiliriz. Bu objenin içinde mesafe, hız, şehir adları gibi bilgiler bulunabilir.
// let travelTo = (point : {x: number, y: number}) => {} şeklinde objenin içinde yer alacak değerlerin type'larını belirleyebiliriz. Bunu tersi şekilde fonksiyonu çağırdığımız yerde de yapabiliriz.
// interface tanımladıktan sonra objenin yerine interface değerin yazarız. Gönderilecek olan parametremiz artık bir interface içerisinde.
// let travelTo = (point : Point) => {
//     // ..
// }

// let getDistance = (pointA : {x: number, y: number}, pointB : {x: number, y: number}) => {}
// interface tanımladıktan sonra objenin yerine interface değerin yazarız.
// let getDistance = (pointA : Point, pointB : Point) => {
//     // ..
// }

// travelTo({
//     x: 1,
//     y: 2
// })