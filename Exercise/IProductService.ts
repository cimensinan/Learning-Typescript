import { Product } from "./Product";

// Bu dosyada interface bilgisi olacak. Dışarıda kullanabilmek için de export ifadesi ekliyoruz.
export interface IProductService {
  // getById adında bir metot ekliyoruz. Bu metot bir id parametresini number türünde alacak. Bu değere göre bize bir atne product döndürecek.
  // Product class'ını import etmemiz gerekiyor.
  getById(id: number): Product;
  // getProducts adında tüm ürünleri döndürmesini isteyeceğiz bir metot ekliyoruz. Bu ürünler bir dizide listelensin istiyoruz. Bunun için iki yöntem var. Biri Product[] diğeri ise Array<Product> şeklindedir.
  getProducts(): Product[];
  // saveProduct adında bir metot ekliyoruz. Dışarıdan bir adet product objesi alsın istiyoruz. Tipinin de Product class'ı gibi olmasını istiyoruz. Geriye de bir değer döndürmemesi için de void ifadesini ekliyoruz.
  saveProduct(product: Product): void;
  // deleteProduct adında bir metot ekliyoruz. Dışarıdan bir product objesi alsın istiyoruz. Geriye de bir değer döndürmemesi için de void ifadesini ekliyoruz.
  deleteProduct(product: Product): void;
}
