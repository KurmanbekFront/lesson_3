// functions


// function declaration

// var age = 20;
// var num = 40;

// function func(a, b) {
//     console.log(a + b);
// }
// func(age, num)


// function expression

// var func2 = function(first, second, three = 0) {
//     console.log(first + second + three);
// }
// func2(12, 5)


// arrow function

// var calc = (a, b) => {
//     console.log(a / b);
    
// }
// calc(30, 2)

// IIFE

// (() => {
//     console.log("login");
// })();

// var obj = {
//     name: "Kurmanbek",
//     age: 17,
//     func: function () {
//         console.log("func log");
//     },
//     isDev: true,
// }
// console.log(obj.func());

// var console2 = {
//     log: (str) => {
//         console.log(str);
//     },
// };
// console.log("Kurmanbek");

// var userAge = Number(prompt("Age"))

// var check = (age) => {
//     if (typeof age === "number") {
//         if (age >= 18) {
//             console.log("ok");    
//         } else if (age < 18) {
//             console.log("not ok");
//         } else {
//             console.log("error");
//         }
//     } else {
//         console.log("Nan");
//     }
//     return age
// }
// console.log(check(userAge));


// Замыкание

// var createCount = () => {
//     var count = 0;
//     return () => {
//         count++;
//         console.log(count);
//         return 20
//     }
// }
// var counter = createCount()
// console.log(counter());
// counter()



// lambda function

// var fun = (str) => console.log(str);
// fun("hello")



// function init() {
//     var name = "travis";
//     function displayName() {
//         alert(name)
//     }
//     displayName()
// }
// init()


// anonim function

// var anonimFunc = (fn) => {
//     return fn();   
// }

// anonimFunc(() => {
//     console.log("anonim");
// })



// ES5
// console.log(number);
// var number = 0;
// number = 10;


// var x = "outer";
// function test(inner) {
//     if (inner) {
//         var x =  "inner"
//         return console.log(x);
//     }
//     return x;
// }
// test(false)
// test(true)



// ES6

// let num = 0;
// num = 12

// console.log(num);


// const test = "Kurmanbek";
// test = "pweco,p"
// console.log(test);


// let x = "outer";
// function test(inner) {
//     if (inner) {
//         let x =  "inner"
//         return console.log(x);
//     }
//     return console.log(x);
// }
// test(false)
// test(true)







