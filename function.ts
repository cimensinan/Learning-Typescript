function getAverage(a: number, b: number, c?: number): string { // BUradan parametrelerin type'ları söyleyebiliyoruz. String bir değer parametre olarak girildiğinde hata alırız. Çıktının da string bir değer olmasını istediğimizi söyleyebiliyoruz. Ayrıca parametrelerin yanına soru işareti koyduğumuzda bu fonksiyonun soru işareti konulan değerler kadar eksik paramtereyle de çalışabileceğini belirtiyoruz. Soru işareti olmazsa 2 parametreli fonksiyon hata verecektir.
    let total = a+b;
    let count = 2;

    // c parametresini optional duruma getirdik.
    if(typeof c !== "undefined") {
        total += c;
        count++;
    }

    const result = total/count;
    return "result : " + result;
}

getAverage(10, 20, 30);
getAverage(10, 20);

// Fonksiyonun parametre değerinden bağımlılığını kurtarmak için "rest parameter" kavramını kullanırız. Gelecek olan parametre değerine a dizisi deriz. Gelen bütün parametre değerlerini a dizisi içerisine alırız.
function ortalamaAl(...a: number[]): string {
    let total = 0; // Başlangıç değerlerini belirleriz
    let count = 0; // Başlangıç değerlerini belirleriz

    // for döngüsü ile fonksiyonun çağrıldığı yerdeki değerleri sırayla a dizisine ekleriz ve count değerini de bir artırırız.
    for(let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total/count;
    return "result : " + result;
}

ortalamaAl(10, 20, 30);
ortalamaAl(10, 20);
ortalamaAl(10);
ortalamaAl(10, 20, 30, 40);

// modern fonskiyon tanımlaması da yapabiliriz. İlla parametre tanımlamak zorunda değiliz. Ayrıca çıktı değerini de belirlemek zorunda değiliz. Hatta geri dönüş değeri döndürmeyecekse string yerine "void" yazarak yukarıda yer alan return kısmını kaldırırız.
const ortalamaAlVer = (): void => {
    
}

