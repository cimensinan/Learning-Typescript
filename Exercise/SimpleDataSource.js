"use strict";
// Bir data kaynağı oluşturuyoruz.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    // private olarak tanımladığımız products kaynağının içerisini sadece constructor'dan gelen değerlerle dolduruyoruz. Dışarıdan müdahale etmenin önüne geçiyoruz.
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Telefon", 1000), new Product_1.Product(2, "Samsung S6", "Telefon", 2000), new Product_1.Product(3, "Samsung S7", "Telefon", 3000), new Product_1.Product(4, "Samsung S8", "Telefon", 4000));
    }
    // SimpleDataSource üzerinden getProducts dersem products kaynağı direk gelecek. Ekleme, silme işlemleri burada yapılmayacak.
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
