// function unload(){
//   event.defaultPrevented();
// }
function clearOutput() {
  console.log("clear");
  document.getElementById("output").innerHTML = "";
}
const showOutput = (output) => {
  document.getElementById("output").innerHTML += output + "</br>"
}


// 1.	Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function createAdder(num) {
  return function (x) {
    return num + x;
  }
}

var addFive = createAdder(5);
// console.log(addFive(10)); 
// console.log(addFive(20)); 
const addNumber = () => {
  let addnum = + prompt("Enter Number To Add ");
  let addValue = addFive(addnum);
  showOutput(addValue);
}


// 2.	Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

// method-1

function recursivefun(arr, val) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === val) {
    return true;
  } else {
    return recursivefun(arr.slice(1), val);
  }
}

const myArray = [1, 2, 3, 4, 5];
const myValue = 8;

console.log(recursivefun(myArray, myValue)); // true



// method-2

var arr = [];
const addValue = () => {
  let name = prompt("Enter Valve : ");
  name = name.toUpperCase();

  let itemFound = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
      itemFound = true;
      let msg = "<span style='color:red'>" + "&quot" + name + "&quot" + '</span>' + " is already in list";
      showOutput(msg);
    }
  }
  if (itemFound === false) {

    arr.push(name);
    msg = "<span style='color:green'>" + name + "&quot" + '</span>' + " has been successfully added into the list",
      showOutput(msg);
  }
}

const showValue = () => {

  if (arr.length === 0) {
    return alert("False! Please Add value in array")
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      showOutput(arr[i]);
    }
  }
}

// 3.	Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraph(text) {
  const newParagraph = document.createElement("p");
  const textNode = document.createTextNode(text);
  newParagraph.appendChild(textNode);
  document.body.appendChild(newParagraph);
  document.body.appendChild(newParagraph);
  showOutput(text);
}
const addpara = () => {

  addParagraph("This is a new paragraph.");
}

// 4.	Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

const creatli = (items) => {
  var ul = document.getElementById("lang");
  var li = document.createElement("li");
  var text = document.createTextNode(items);
  li.appendChild(text);
  ul.appendChild(li);
}

const addlistitem = () => {
  let items = prompt("Enter Your Items Name : ");
  creatli(items);
}

// 5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.
let mypara = document.getElementById("head");
mypara.innerHTML += "<br>Pakistan Zindabad</br>";
// let mypar = document.getElementById("output");
// mypar.innerHTML += "<br>Pakistan Zindabad</br>";

setInterval(function () {
  let color1 = Math.floor(Math.random() * 16777215).toString(16);
  mypara.style.backgroundColor = "#" + color1;
  // mypar.style.backgroundColor = "#" + color1;
}, 1000);

// other method

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}
const changecolor = () => {
  const element = document.getElementById('footer');
  const color = document.getElementById("inputcolor").value;
  changeBackgroundColor(element, color);

}
//  second method

document.getElementById("inputcolor").addEventListener("input", function () {
  document.getElementById("bg").style.backgroundColor = this.value;
})



// 6.	Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : [];
const provideStudent = () => {
  let std = {
    name: prompt("Enter your name:"),
    fatherName: prompt("Enter your Father name:"),
    class: prompt("Enter your Class:"),
    rollNo: +prompt("Enter Your RollNo :"),
  }
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students);
  localStorage.setItem("students", stringify);
}


// other method
function saveObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}
const myObj = { name: 'Ali', age: 30 };
saveObjectToLocalStorage('myKey', myObj);
const myObjFromLocalStorage = JSON.parse(localStorage.getItem('myKey'));


// Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}
const myObject = { name: 'Ijjaz Ahmad', age: 21, rollnumber: 'JS-124122', city: 'Faisalabad' };
saveToLocalStorage('myObject', myObject);
const storedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(storedObject);
let nam = storedObject.name;
let ag = storedObject.age;
let roll = storedObject.rollnumber;
let cit = storedObject.city;
let detail = nam +"</br>"+roll +"</br>"+ag +"</br>"+cit;
showOutput(detail);


// date year function 

let date = new Date();
// console.log(date);
date = date .getFullYear();
// console.log(year);
document.getElementById("year").innerHTML=date;




