// İlk olarak Product.ts dosyasının içinde product adında bir class oluşturuluyor.
// Product class'ının içine constructor içerisinde parametreler göndereceğiz.
// Dışarıda kullanacağımız için bu class'a export ekliyoruz.
export class Product {

    constructor(
        // Parametrelerimize dışarıdan erişim sağlanabilecek bir şekilde public yapıda oluşturduk ve "?" kullanarak parametrelerimizi optional hale getirdik. Yani kullanılmayan parametreler dolayısıyla hata almayacağız. Private olsaydı sadece sınıfa özel sınıf içerisinde ulaşılabilen bir parametre değeri olurdu.
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number
    ) {}
}

// class üzerinden tanımlayacak olduğumuz bir p objesi için new Product dediğimizde class içerisinde yer alan public yapılara erişebiliyoruz.
// let p = new Product();