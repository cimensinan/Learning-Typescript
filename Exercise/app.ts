// Product.ts, IProductService.ts, ProductService ve SimpleDataSource.ts dosyalarını kullanabileceğimiz app.js dosyasını oluşturalım.

import { Product } from "./Product";
import { ProductService } from "./ProductService"; 

let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(2);

// Bir ürün silmek istersek de deleteProduct metoduna parametre olarak son oluşturduğumuz result objesini verebiliriz. Böyle 2 numaralı id'ye sahip ürün bilgileri silinir.
_productService.deleteProduct(result);

// Yeni bir ürün oluşturalım. Product'ı import etmek gerekiyor.
let p = new Product();
// id bilgisi dışındaki bilgileri ekliyoruz.
p.name = "Iphone 6";
p.price = 4000;
p.category = "Telefon";
// p objesini saveProduct metoduna parametre olarak veriyoruz.
_productService.saveProduct(p);
result = _productService.getProducts(); // Product { id: 5, name: 'Iphone 6', category: 'Telefon', price: 4000 }
// Yukarıdaki silme işleminden sonra => Product { id: 2, name: 'Iphone 6', category: 'Telefon', price: 4000 } şeklinde boşta kalan id değeribni bu obje'ye atadı.

// Aşağıdaki silme yöntemi ile de 2. index'deki yani 3 sıraya gerilemiş olan 4 numaralı id değerine sahip ürünü silmiş oluruz.
_productService.deleteProduct(result[2]);
result = _productService.getProducts();

let p1 = new Product();
// 2 numaralı id değerine sahip üründe güncelleme yapmak istediğim için id değerini de ekliyoruz.
p1.id = 2;
p1.name = "Iphone 7";
p1.category = "Telefon";
p1.price = 5000;
// Aşağıdaki saveProduct metodu ile bu sefer de güncelleme işlemini gerçekleştiriyoruz.
_productService.saveProduct(p1);
result = _productService.getProducts();

// Öncelikle cmd terminalinde "cd Exercise" alt dosyamıza geçiş yapalım. Sobrasında js'e transpile edelim. Bunun için "tsc app.ts" diyelim. Terminalde console'a yazılan değeri görmek için de "node app.js" diyelim.
console.log(result);
