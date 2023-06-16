let a: number = 5;
let b: string = 'a';
let c: boolean = true;
let d: any; // herhangi bir type belirtilmeyen değerlerdir.
let e: number[] = [1, 2, 3]; // iki farklı array tanımlaması vardır. 1. yöntem
let f: Array<number> = [1, 2, 3]; // 2. yöntem
let g: [string, number] = ["hello", 1]; // aynı hizaya gelecek şekilde array tanımı içerisinde farklı tipde değerler kullanılabilir. Buna tuple denir.
let h: [string, number, boolean] = ["hello", 1, true];
let i: any[] = [1, "hello", true]; // any array type

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment { // javascript karşılığı function şeklinde olur.
    Kredi = 0,
    Havale = 5,
    kapidaOdeme = 2,
    Eft = 3}

let kredi = Payment.Kredi; // 0
let havale = Payment.Havale; // 5
let kapidaOdeme = Payment.kapidaOdeme; // 2
let eft = Payment.Eft; // 3