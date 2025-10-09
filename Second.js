// 1.// what is switch 

// 1// In JavaScript, the switch statement is a type of conditional statement that is used to execute one block of code from multiple options, based on the value of an expression.
// It’s often used when you have to compare the same value against different possible matches (instead of writing many if...else if statements).





//if is used for fixed conditions 
// break marthe hoi 

const theme = "light";

// switch(theme){
//     case "light" :{
//         console.log('this is light')
//         break;
//     };
//     case "dark" :{
//         console.log('this is dark')
//         break 
//     };
//     default :{
//         console.log('this is red')
//     }
// }

//why we use break 
// shob gula ekshathe print kore dhibe 
// switch(theme){
//     case "light" :{
//         console.log('this is light');
//     }
//     case "gray" :{
//         console.log('this is red');
//     }
//     default : {
//         console.log('i am nothing')
//     }
// }


// Array=====================

// 02 what is array ? Index , Elements ;
// 1.How to  set and get value from an array??
//2.How to add an element in the end of an array?
//3.How to cut  the last element  from an array? (value jai daw kaj hobe na )
//4.how to remove the frist element  of an array.what happen if the array is empty?
//5.How insert elements at the frist of an array ?
//6.how to get index of an element?it not what return ?
//7.how to check the array have any elements?
//8.how ceck it is array or not?
//09.what it is done Array(5) ?

// 02-------------
// In JavaScript, an array is a special type of object used to store multiple values in a single variable.

// Arrays are written with square brackets [ ].

// Values inside are called elements.

// Each element has an index (position), starting from 0.

// Arrays can hold different data types at once 






// get element from an array 
const numbers= [1,2,3,4]; 

// console.log(numbers.length) 
// console.log(numbers[4])

///set or update element value in a array 

// numbers[0]=111;
//      ///no need to declare variables
// numbers[1]= 100;


// numbers.push(3)
// numbers.push(2,1,1)

console.log(numbers)

// mouse hover kore  ami chaile shob jinis potro jene nite pari 
// numbers.pop(6)   //pop did not take any parameter ignore this just
// we can see the variable we pop 
// const numb1=numbers.pop(100);

// console.log(numbers)

// console.log(numb1) 


// console.log(numbers)
// console.log(numbers.includes(1))   //it is case sensitive


// console.log(numbers.indexOf(10))   
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present. 
// console.log(numbers.indexOf(160))   //jodi na thake taile -1 ;

// console.log(Array.isArray(numbers))  //true

// console.log(Array.isArray(Array(5)))   
//  //true
// When you call the Array constructor with a single number (5), it creates an empty array of length 5.
// const array = Array(5)
// console.log(array)

// what is array join ? 
// what is concat in array
// what is array slice 
// what is splice 


/*looop *//////////////////////////////////////////

//1.How to get all element from an array? fo and while loop?
//2.What is While loop ?
//3. sum of 1 to 10 number ? for and while loop?
//4. get the even numbers with for and while loop? 3 ways to get it ?
//5. // for(let i = 1; i< 5 ; i++){
//      sum = sum + i ;
// }
//06.what is for loop ?
//07.what is iteration ?
//08. What is break and continue?
//09.how for loop iterates over an array . 
//10.difference between while and do while .

// const numbers = [1,2,3,4,5]

// for(const num of numbers){
//     console.log(num)
// }



// let number = 1;

// while(number <= 10){
//     console.log(number);
//     number ++;
// }

// run and debug diye Node.js select kore nibho 

// 10 ti shongkhar jhogfhol 


// In JavaScript, a while loop is a control flow statement that lets you repeat a block of code as long as a condition is true.

// let number = 1; 
// let sum = 0;

// while (number < 10){
//     sum = sum + number ;
//     console.log("sum",sum)
//     number ++;
// }


// js-loop-tasks github

// even number 
// while loope must let diye declare korte hoi 

// let number = 1;

// while (number < 3){
//     // console.log(number)    ///why infinity
//     if(number % 2 === 0){
//         console.log(number);
//     }
//     // number ++;
// }



// 1 theke 5 er jogful 
// let sum  = 0;


// console.log(sum )


// decremental for 
// for( let i = 5 ; i >=0 ; i--){
//     console.log(i)
// }

//what happen is i run a code infinite

// let number = 5; 
// while(number >= 0){
//     console.log(number)
//     number--;
// }

// 
// differend ways to do a thing 

//0/ 2  what will be the result

// console.log(0/0);    //nan
//console.log(2/0);   infinity

// console.log(0/2);  0


// even numbers  
// for(let i = 1; i<=10 ; i++){
//     if(i % 2=== 0){
//         console.log(i)
//     }
// }


// for(let i = 1 ; i <= 5; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// for(let i = 0 ; i < 5; i+=2){
//     if(i === 0){
//         continue;
//     }
//         console.log(i)
// }

// 1 to 20 the number divisible by 3 and 5 

// for(let i = 1; i <= 20 ; i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }

// for(let i = 1; i <= 20 ; i++){
//     if(i % 5 === 0  || i % 3 === 0){
//         console.log(i)
//     }
// }


// for(let i = 1; i <= 20 ; i++){
//     if(i % 5 === 0  && i % 3 === 0){
//         console.log(i)
//     }
// }



// break and continue  


// n JavaScript, a for loop is a control flow statement used to repeat a block of code a specific number of times.

// for ( let i  = 1 ; i < 25 ; i++){
//     if( i <= 11){
//         //ei khane kintu 10 porjonto run hobe 
//         break ;
//     }
//     console.log(i)
// }

// let number = 1;

// while ( number < 10){
   
//     if(number === 5){
//         //ei ta kintu 4 porjonoto print korbee 
//         break ;
//     }
//     console.log(number);
//     number ++ ;
// }


//what is iteration 
// In JavaScript (and programming in general), iteration means repeating a process or executing a block of code multiple times, usually inside a loop.

// Think of it like going step by step through items or repeating actions until a condition is met.
//continue mane holo skip the code 
//debug kore kore dhekbho 

// for ( let i  = 1 ; i < 25 ; i++){
//     if( i%2 === 0){
//         continue ;
//     }
//     console.log(i)
// }


// here is problem in this code y6

// let number = 1;

// while(number<10){
// //   ei khane ekta moja bhul korechi 
//     if(number % 2 === 0){
//         continue ;
//     }
//     console.log(number);
//     number++ ;
// }



// do while 
// difference between while and do while 
//multiplicaiton table from git hub programming hero1
// let number = 1;

// do{
//     console.log(number);
//     number ++;
// }
// while(number  < 5)


// What is the purpose of a loop in  JavaScript? 
// ans : To execute a block of code multiple times 


// What does the continue statement do in a loop? 
//ans: Skips the current iteration and proceeds to the next iteration of the loop


// Which statement best describes how the for loop iterates over an array in JavaScript?

// ans : 
// It iterates over the indexes of an array, but not over the values.



