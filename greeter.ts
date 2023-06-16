function greeter(name) {
    console.log("Hello " + name);
}

let user = "Sinan"; // tsc types.ts komutunu terminalde yazdığımızda buradaki değerler javascript'e transpiled edilir yani dönüştürülür ve let ES5'e uygun formata yani "var" ifadesine döner.

greeter(user)