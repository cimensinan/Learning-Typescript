"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// İlk olarak Product.ts dosyasının içinde product adında bir class oluşturuluyor.
// Product class'ının içine constructor içerisinde parametreler göndereceğiz.
// Dışarıda kullanacağımız için bu class'a export ekliyoruz.
var Product = /** @class */ (function () {
    function Product(
    // Parametrelerimize dışarıdan erişim sağlanabilecek bir şekilde public yapıda oluşturduk ve "?" kullanarak parametrelerimizi optional hale getirdik. Yani kullanılmayan parametreler dolayısıyla hata almayacağız. Private olsaydı sadece sınıfa özel sınıf içerisinde ulaşılabilen bir parametre değeri olurdu.
    id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
// class üzerinden tanımlayacak olduğumuz bir p objesi için new Product dediğimizde class içerisinde yer alan public yapılara erişebiliyoruz.
// let p = new Product();
