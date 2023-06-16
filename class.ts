interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

// Objeyi üretebilmek için interface'in class'ına ihtiyacımız var. Tabi class için interface'in şemasını kullanma şartı yok.
// implements, bir sınıfın bir arayüzü uygulamak istediğini belirtmek için kullanılır. Bir sınıf, bir arayüzü uygulamak için implements anahtar kelimesini kullanarak arayüzde tanımlanan tüm özellikleri ve yöntemleri (fonksiyonları) içermek zorundadır. Bu, bir sınıfın belirli bir davranışı uygulayacağını garanti altına alır.
class Taxi implements Vehicle {
    // Sadece taxi'ye ait özellikleri de ekleyebiliriz.
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gider.`);
    }
}


class Bus implements Vehicle {
    // Sadece bus'a ait özellikleri de ekleyebiliriz.
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gider.`);
    }
}

// taxi_1 => 42 abc 42
// taxi_1.currentLocation
// taxi_1.travelTo()

// taxi_2 => 42 abd 42
// taxi_2.currentLocation
// taxi_2.travelTo()