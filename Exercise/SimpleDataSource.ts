// Bir data kaynağı oluşturuyoruz.

import { Product } from "./Product";

export class SimpleDataSource {
    // Burada private olarak tanımladığımız bir products kaynağı var.
    private products: Array<Product>;

    // private olarak tanımladığımız products kaynağının içerisini sadece constructor'dan gelen değerlerle dolduruyoruz. Dışarıdan müdahale etmenin önüne geçiyoruz.
    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "Telefon", 1000),
            new Product(2, "Samsung S6", "Telefon", 2000),
            new Product(3, "Samsung S7", "Telefon", 3000),
            new Product(4, "Samsung S8", "Telefon", 4000),
        );
    }

    // SimpleDataSource üzerinden getProducts dersem products kaynağı direk gelecek. Ekleme, silme işlemleri burada yapılmayacak.
    getProducts(): Array<Product> {
        return this.products;
    }
}
