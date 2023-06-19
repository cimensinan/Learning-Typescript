// IProductService'i kullanacak bir dosya oluşturuduk.
// IProductService'de yer alan interface yapısı burada oluşturulacak class yapısı ile implement edecek.
// Ürün ekleme, ürünleri çağırma, ürün silme gibi işlemleri burada yapıyoruz.

import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

// ProductService ifadesinin üzerine geldiğimizde karşımıza çıkan uyarılardan quick fix ifadesine tıklıyoruz ve sonrasında da implement interface IProductService ifadesine tıklıyoruz. Böylece süslü parantezlerin içerisi otomatik bir şekilde dolduruluyor. Interface içerisinde yer alan metotların epsi burada gövdeye sahip bir şekilde oluşturuldu.
export class ProductService implements IProductService {

    // dataSource adında bir kaynak yapısı oluşturuyoruz ve tipi de SimpleDataSource olsun istiyoruz.
    private dataSource: SimpleDataSource;

    // ProductService'e özel bir products adında bir liste oluşturalım ve bu listenin tipi de bir product dizisi olsun.
    private products: Product[];

    // constructor içerisinde this dataSource'yi dolduralım ve simpleDataSource'dan gelecek olan liste products listesine aktarılsın.
    constructor() {
        this.dataSource = new SimpleDataSource();
        // boş bir product dizisi oluşturalım.
        this.products = new Array<Product>();
        // simpleDataSource'dan datayı getProducts metodu ile çağıralım ve forEach ile her bir product öğesi products dizisine aktarılsın.
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }
    getById(id: number): Product {
        // getById metodu ile istediğimiz id'li ürünü filtreleyebiliyoruz. Sadece ilk filtrelenen ürünü alsın istediğimizden [0] index değerini sıfır yapıyoruz. Çünkü paramtere olarak tek bir id değeri gönderebiliyoruz.
        return this.products.filter(p => p.id === id)[0];
    }
    getProducts(): Product[] {
        // Bu metot bütün listeyi bize getirir.
        return this.products;
    }
    saveProduct(product: Product): void {
        // Ürün eklemesi ya da ürün güncellemesi yapabiliriz. Ürün eklemesi yapacaksak ürünün daha önce oluşmuş bir id'si olmayacağı için product.id parametresini ekliyoruz. Bunun için generateId() metodunu kullanarak rastgele bir id değeri oluşturuyoruz.
        if(product.id == 0 || product.id == null){
            // generateId() metodunu class'ın içerisinde  private olarak ayarlıyoruz. Dışardan erişilmesine gerek bulunmuyor.
            product.id = this.generateId();
            // Burada push metodu ile products dizisine göndermek istediğimiz product bilgisini gönderebiliriz.
            this.products.push(product);
        } 
        // Eğer ilgili id değeri products dizisinin içerisinde varsa onun index bilgisini alırım. İlgili index değerine sahip product değerini günceller
        else {
            let index;

            for(let i = 0; i < this.products.length; i++){
                if(this.products[i].id === product.id){
                    index = i
                }
            }
            // splice metodu ile ilgili index'ten itibaren 1 elamanı yanı ilgili index'i güncelleriz.
            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        // İlgili product'ı products dizisinin içerisindeki index değerini buluruz.
        let index = this.products.indexOf(product);
        if(index > 0) {
            // Verilen index değerinden itibaren 1 elemanı sileriz.
            this.products.splice(index,1);
        }
    }

    // generateId() yardımcı metodunun görevi bir id bilgisi getirmek.
    private generateId(): number {
        // key adında bir değişkenimiz olsun değeri başlangıçta 1'e eşit olsun
        let key = 1;
        // while döngüsü ile getById metodunun içerisinde 1'e eşit key değeri varsa yukarıdaki key değişkenini bir artırsın yoksa o key değerini bize döndürerek id olarak atasın istedik.
        while(this.getById(key) != null){
            key++;
        }
        return key;
    }

}