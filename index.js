// 1. Ways ot print in javascript?

// console.log("Hello world ", 5 + 8, " Another world");
// alert("this is an alert");
// document.write("this is document write");





// 2. javascript console API

// console.warn("This is warning");
// console.error("This is an error");
// alert("me");





// 3. Javascript Variable->container to store data values

// var num1 = 12;
// var num2 = 34;
// console.log(num1 + num2);





// 4.Data types in javascript

// var str1 = "this is a string1 "
// var str2 = 'this is a string2 '
// var num1 = 34;
// console.log(str1 + str2 + num1);





// 5. Object type

// var marks = {
//     dipak: 12,
//     gautam: 45,
//     mahesh: 90,
//     123:"haa"
// };




// Boolean datatype
// a = true;
// b = false;
// console.log(a, b)

// var und = undefined;
// var k;
// console.log(und, k)

// var n = null;
// console.log(n);




/* 
At a very high level in JavaScript There are 2 types of data types

1:Primitive data types: undefined, null, number, string, boolean,symbol
2.Reference data types:Arrays and Objects
*/

// var s=[1,2,"dipak",5,67,6];





// Operators in JavaScript
//Arithmetic operators
// var a=24;
// var b=56;
// console.log("The value of a+b",a+b);
// console.log("The value of a-b",a-b);
// console.log("The value of a*b",a*b);
// console.log("The value of a/b",a/b);
// console.log("The value of a%b",a%b);






// Assignment operator
// var c=12;
// var d=c;
// c+=9;
// console.log("c is ",c);
// console.log("d is ",d);







// Comparison Operators
// var a = 12;
// var b = 45;
// console.log(a == b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);
// console.log(a < b);
// console.log(a > b);






// Logical Operators

// console.log(true && true)
// console.log(false && true)
// console.log(false || true)
// console.log(!true)






// Function in javascript (DRY principle)
// DRY= Do not repeat yourself
// function avg(a, b) {
//     return (a + b) / 2;
// }
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);






// Conditional in Javascript

// var age = 4;
// if (age < 18)
//     console.log("you are a kid");
// else
//     console.log("you are mature");



// var arr = [1, 2, 3, 54, 65,4,78,5]
// console.log(arr);
// for (var j = 0; j < arr.length; j++)
// console.log(arr[j]);


// arr.forEach(function (element) {
//     console.log(element);
// })


// let j = 0;
// const k = 0; //connot be change
// k++; k = k + 1 // throw an error


// while loop

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }


// do while
// let j = 0;
// do {
//     console.log(arr[j]);
//     j++;
// }
// while (j < arr.length);


// let o = 19;
// let myArr = [1, 12, 23, 5, 2, 3, "dipak", 'hello', null, undefined, true, false, o];
// console.log(myArr.length);
// console.log(myArr.pop()); // return pop element

// console.log(myArr.push("hii harry")); //return length array 
// console.log(myArr.shift()); //return 1st index because it was deleted
// console.log(myArr.unshift("unshift"));
// myArr[4] = 2324;
// console.log(myArr.length)






// String methods in JavaScript

// let mylovelystring = "dipak is a good boy good";
// console.log(mylovelystring.length);
// console.log(mylovelystring.indexOf("good"))
// console.log(mylovelystring.lastIndexOf("good"));

// console.log(mylovelystring.slice(1, 3))

// d = mylovelystring.replace("dipak", "Gautam"); // replace method only replace the 1st occurence of a string not all the occurs
// d = d.replace("good", "bad", 2);
// console.log(d, mylovelystring);






// let mydate = new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());






// Javascript DOM manipulation
// let elem = document.getElementById('click')
// console.log(elem);



// let elemw = document.getElementsByClassName('container')
// console.log(elemw);



// elemw[0].style.background="yellow";
// elemw[0].classList.add("bg-primary");
// elemw[0].classList.add("text-success");

// console.log(elemw[0].innerHTML);
// console.log(elemw[0].innerText);






// tn1 = document.getElementsByTagName("button");
// console.log(tn1);

// createdElement = document.createElement('p');
// createdElement.innerText = "This is a new para";


// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a new bold";


// tn = document.getElementsByTagName("div");
// console.log(tn);


// tn[0].appendChild(createdElement);
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element);--> to remove element





// document function

// console.log(document.location);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.images);
// console.log(document.links);
// console.log(document.body);
// console.log(document.scripts);
// console.log(document.styleSheets);






// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container') //used in css selector
// console.log(sel);





// Events in Javascript
// function clicked() {
//     console.log('button was clicked');
// }
// window.onload = function () {
//     console.log('document is loaded');
// }

// firstcontainer.addEventListener('click', function () {
//     console.log("clicked on Container");
// });

// firstcontainer.addEventListener('mouseover', function () {
//     console.log("mouse on container");
// });

// firstcontainer.addEventListener('mouseout', function () {
//     console.log('mouse out of container');
// });

// let prev = document.querySelectorAll('.container')[1].innerHTML;

// firstcontainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = prev;
//     console.log("mouse up ");
// })

// firstcontainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We haved clicked</b>";
//     console.log("mouse down ");

// })
// firstcontainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> I have clicked above</b>";
//     console.log("clicked on container 1");
// })




// Arrow Functions
// function sum(a,b){
//     return a+b;
// }

// sum=(a,b)=>{
//     return a+b;
// }



// SetTimeout and SetInterval
logkaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set timeout fired</b>";
    console.log("I am your log");
}
clr = setInterval(logkaro, 2000);
clearInterval(clr); //clr will get the ID of setInterval which is use to stop the interval similarly with clearTimeout to stop setTimeout



// JavaScrpit localStorage


// localStorage.setItem('six', '65')
// undefined
// localStorage

// localStorage.getItem(2)
// "item"
// localStorage.getItem(6)
// "six"
// localStorage.getItem('harry')
// localStorage.removeItem('name')
// localStorage.clear()


// JSON  Json object should have only double quotes if a string has single quotes and it is converted to Json format using stringify than all single quotes will converted to double quotes

// obj = { 'name': "harry", length: 1, a: { this: "that" } }
// jso = JSON.stringify(obj);
// console.log(jso)
// console.log(typeof (jso))

// parsed = JSON.parse(`{ "name": "harry", "length": 1, "a": { "this": "tha\\"t" } }`);
// console.log(parsed);



// Template literals - Backticks

a = 34;
console.log(`this is a ${a}`);
