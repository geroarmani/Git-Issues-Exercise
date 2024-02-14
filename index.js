function greet(name) {
    console.log(`Hello, ${name}!`);
}
  
function sayHello() {
    let name = prompt("Enter your name: ");
    greet(name);
}

sayHello();

function sumArray(arr) {
    let total = 0;
    for (let i = 1; i <= arr.length; i++) {
    total += arr[i];
    }
    return total;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
  