//.........ASSIGNMENT 2....//
// Q1: Write a function that creates a closure and returns a function that can add a specific number to
// any number passed to it. For example, if the closure is created with 5, the returned function
// should add 5 to any number passed to it.

function createAdder(x) {
    return function(y) {
    return x + y;
    }
    }
    const addFive = createAdder(5);
    console.log(addFive(10)); // Output: 15
    console.log(addFive(20)); // Output: 25

    
//Q2 Write a recursive function that searches an array for a specific value. The function should return
// true if the value is found, and false if it is not. You can assume that the array is not nested.

function searchArray(array, value) {
    // base case: array is empty or value is found
    if (array.length === 0) {
    return false;
    } else if (array[0] === value) {
    return true;
    } else {
    // recursive case: search the rest of the array
    return searchArray(array.slice(1), value);
    }
    }

//Q3  Write a function that adds a new paragraph element to the bottom of an HTML document. The
// function should take a string argument that will be used as the text content of the new paragraph
// element
  
function addParagraph(text) {
    const newParagraph = document.createElement('p'); // Create a new paragraph element
    newParagraph.textContent = text; // Set the text content of the new paragraph
    document.body.appendChild(newParagraph); // Add the new paragraph to the end of the document body
    }

    

//Q4 Write a function that adds a new list item to an unordered list in an HTML document. The
// function should take a string argument that will be used as the text content of the new list item    

function addListItem(text) {
    const newListitem = document.createElement('li'); // Create a new list item element
    newListitem.textContent = text; // Set the text content of the new list item
    const list = document.querySelector('ul'); // Get a reference to the unordered list element
    list.appendChild(newListitem); // Add the new list item to the end of the list
    }
    addListItem('Item 4'); // Adds a new list item with the text "Item 4" to the end of the unordered list


//Q5 Write a function that changes the background color of an HTML element. The function should
// take two arguments: the first argument is a reference to the HTML element, and the second
// argument is a string representing the new background color.
    
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color; // Set the background color of the element
    }
    const myElement = document.querySelector('#my-element'); // Get a reference to the HTML element
    changeBackgroundColor(myElement, 'blue'); // Changes the background color of the element to blue.

//Q6 ● Write a function that saves an object to localStorage. The function should take two arguments:
// the first argument is a string representing the key to use for storing the object, and the second
// argument is the object to store.  

function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object)); // Convert the object to a JSON string and save it to
    localStorage
    }
    const myObject = { name: 'John', age: 30 };
    saveToLocalStorage('myObject', myObject); // Saves the object to localStorage with the key "myObject"


//Q7  Write a function that retrieves an object from localStorage. The function should take one
// argument, which is a string representing the key used to store the object. The function should
// return the object.   

function getFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key); // Get the JSON string from localStorage
    return JSON.parse(jsonString); // Convert the JSON string back to an object and return it
    }
    const myObj = getFromLocalStorage('myObj'); // Retrieves the object from localStorage with the key "myObj"
    console.log(myObj); // Outputs the object to the console
    

//Q8 Write a function that takes an object and saves each property to localStorage using the property
// name as the key and the property value as the value. The function should also retrieve the object
// from localStorage and return it as a new object.

function saveToLocalStorage(obj) {
for (let key in obj) {
localStorage.setItem(key, JSON.stringify(obj[key]));
}
let newObj = {};
for (let i = 0; i < localStorage.length; i++) {
let key = localStorage.key(i);
newObj[key] = JSON.parse(localStorage.getItem(key));
}
return newObj;
}