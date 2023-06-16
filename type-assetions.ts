let message; // any type

message = "Hello World"; // any type

let count = (<string>message).length; // 1. Yöntem => String'e dönüştürüldü. Yoksa string değerine ait property'leri göstermez. Yani length'ini öğrenemeyiz.
let messageLength = ( message as string ).length; // 2. Yöntem => String'e dönüştürüldü.