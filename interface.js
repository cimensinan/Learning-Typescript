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
