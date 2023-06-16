function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    // c parametresini optional duruma getirdik.
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    var result = total / count;
    return "result : " + result;
}
getAverage(10, 20, 30);
getAverage(10, 20);
// Fonksiyonun parametre değerinden bağımlılığını kurtarmak için "rest parameter" kavramını kullanırız. Gelecek olan parametre değerine a dizisi deriz. Gelen bütün parametre değerlerini a dizisi içerisine alırız.
function ortalamaAl() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0; // Başlangıç değerlerini belirleriz
    var count = 0; // Başlangıç değerlerini belirleriz
    // for döngüsü ile fonksiyonun çağrıldığı yerdeki değerleri sırayla a dizisine ekleriz ve count değerini de bir artırırız.
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return "result : " + result;
}
ortalamaAl(10, 20, 30);
ortalamaAl(10, 20);
ortalamaAl(10);
ortalamaAl(10, 20, 30, 40);
// modern fonskiyon tanımlaması da yapabiliriz. İlla parametre tanımlamak zorunda değiliz. Ayrıca çıktı değerini de belirlemek zorunda değiliz. Hatta geri dönüş değeri döndürmeyecekse string yerine "void" yazarak yukarıda yer alan return kısmını kaldırırız.
var ortalamaAlVer = function () {
};
