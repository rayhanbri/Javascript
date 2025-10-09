// reverse 

// const numbers = [1,2,3,4]
// console.log(numbers.reverse())
// console.log(numbers.length)


// const reverseArray=[];

// for(const num of numbers){
//     reverseArray.unshift(num)
// }

// console.log(reverseArray)

//reverse //this is very interestings   
//index length cheye 1 kom
// for(let i = numbers.length;i >=0;i--){
//     console.log(i)
// }


// const person = ["a","e","c","d"]
// console.log(person.sort())

//Assending : small to larger
//Decending : larget to small

// birat jhamela why? 
//a to z A to Z ascii code. 
const numbers = [1, 2, 3, 44, 12, 20, 22];
// const numbers1 = [2,3,6,3]

// console.log(numbers.sort())
//asending e 44 aghe chole asche 
// const ascending = numbers.sort(function(a,b){a-b})
// console.log(ascending)
// const desending = numbers.sort(function(a,b){return b-a})
// console.log(desending)

// github array-looping-task 


/*                  Function syntex                */

//what is function why we use it 

//why there is an undefined fuction 

// function offthefan (){
//     console.log('fan off kore');
//     console.log('fan off kore dhur ho ')
// }
// // console.log(offthefan)
// console.log(offthefan())


//what is parameter 

// function add(a,b,c){
//     const adds = a + b + c;
//     console.log(adds)
// }

// add(1,2)    //nan 
// add(1,2,3)



//what is argument ?
// In JavaScript, an argument is a value you pass into a function or method when you call it.


//return

// function add(a,b,c){
//     const adds = a + b + c;
//     return adds;
// }

// const addNumber = add(1,2,9)
// console.log(addNumber)

// function isOdd (a){
//     if(a % 2 === 0){
//         return true;
//     }
//     return false ;
// }

// console.log(isOdd(5))


// sum of even numbers 

// function evenNumbers(numbers){
//     let sum = 0;
//     for(const number of numbers){
//         if(number % 2 !== 0 ){
//             sum = sum + number
//         }
//     }
//     return sum;
// }

// console.log(evenNumbers([1,2,3]))

// github js-function-pracitce-tasks

// What is a JavaScript function? 

// A block of code that performs a specific task


// In JavaScript, what is the primary difference between a function and a loop?
// A loop is used for iteration, while a function is for code organization.


// What is an argument in the context of a JavaScript function?
// A value passed to a function when calling it 


// why undefined ? 
// function getMenu() {
//  console.log("Burger, Pizza, Pasta");
// }

// console.log(getMenu())


// In JavaScript, what happens if a function does not contain a "return" statement?

// It automatically returns "undefined"

// function inchtoFeet(number){
//     const feetFloat = number / 12;
//     const feet = parseInt(feetFloat)
//     // const inches = feetFloat - feet; 
//     const inches = number % 12;

//     return {feet , inches}
// }

// console.log(inchtoFeet(75))


//leap year ber kora 

// function isLeapYear(year){
//     // && logic diye kora jaitho bolod shala  
//     if(year % 100 !== 0){
//         if(year % 4 === 0){
//             return 'yes this is a lear year';
//         }
//     }
//     if(year % 100 === 0 && year % 400 === 0){
//         return true;
//     }
//   return false ;
// }

// console.log(isLeapYear(2400))


///give me the average of odd number of an array ;


// function averageOfOddNumber(number){
//     let sum = 0
// let count = 0
//     for(let num of number){
//         if(num % 2 !== 0){
//             sum = num + sum;
// count++;
//         }
//     }
//     const average = sum / count;
//     return average

// }

// console.log(averageOfOddNumber([1,2]))


//remove duplicate of an array 

// function unique(number){
//     // console.log(number)
//   let uniqueArray = [];
//  for(const num of number){
//     // ei code e jamela ache 
// why empty array 
//     if(uniqueArray.includes(num)){
//         uniqueArray.push(num)
//     }
//  }
//   return uniqueArray
// }

// console.log(unique([1,2,3,3]))


/////// complex ////////

// const Math = {
//     min : function(num1,num2){
//         return num1;
//     }
// }


// console.log(Math.min(1,2,4,5))
// why not working in array 
// console.log(Math.max[1,2,3,4])

// console.log(Math.PI)
// console.log(Math.abs(-1))  //eleminate the symbol

// console.log(Math.round(4.5))      //jeitar kachakahci oi dhike  chole jabe
// console.log(Math.round(4.2))

// console.log(Math.floor(4.5))

// console.log(Math.ceil(4.5))

// console.log(Math.random())
// console.log(Math.random()*10) //10 er modde daw 


// console.log(Math.round(Math.random()*10))  

const today = new Date();
const date = new Date("2026-10-19")
// console.log(date)
// console.log(date.toLocaleDateString())
//ekhane month index hisebhe input dei ar out put dei 1 theke
// console.log(date.getMonth())

//unix ecop
//moment.js explore



//variable swaping

// let a = 5;
// let b= 7;
// console.log(a,b)
// a=b;
// b=a;
// console.log(a,b)
// const temp = a;
// a=b;
// b=temp;
// console.log(a,b)

// it is not working why

// [a , b] = [b, a];

// console.log(a,b)

//git hub : js-problems-part1-practice task



// What is the main difference between var and let?

// var is function-scoped, and let is block-scoped

// for (var i = 0; i < 5; i++) {
//  	 setTimeout(function () {
//  	console.log(i);
//   }, 100);
// }
//and is 555555

// What does Math.pow(2, 3) return?

// Math.sqrt()

// When using destructuring to swap variables, what happens if the variables have different data types?  not matter


// argument
// A value passed to a function when it is called

// What happens if a function is called with fewer arguments than it has parameters?

// The missing arguments are filled with undefined

