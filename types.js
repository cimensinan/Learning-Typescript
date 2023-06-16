var a = 5;
var b = 'a';
var c = true;
var d; // herhangi bir type belirtilmeyen değerlerdir.
var e = [1, 2, 3]; // iki farklı array tanımlaması vardır. 1. yöntem
var f = [1, 2, 3]; // 2. yöntem
var g = ["hello", 1]; // aynı hizaya gelecek şekilde array tanımı içerisinde farklı tipde değerler kullanılabilir. Buna tuple denir.
var h = ["hello", 1, true];
var i = [1, "hello", true]; // any array type
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["Kredi"] = 0] = "Kredi";
    Payment[Payment["Havale"] = 5] = "Havale";
    Payment[Payment["kapidaOdeme"] = 2] = "kapidaOdeme";
    Payment[Payment["Eft"] = 3] = "Eft";
})(Payment || (Payment = {}));
var kredi = Payment.Kredi; // 0
var havale = Payment.Havale; // 5
var kapidaOdeme = Payment.kapidaOdeme; // 2
var eft = Payment.Eft; // 3
