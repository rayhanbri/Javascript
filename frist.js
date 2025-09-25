// console.log(22)

// node frist .js 

// what is variable ? 
// why there is convention for declaring variable 

// what is javascript and why it is import for web? 

// history of javascript 

//characteristics of javascript 

// how javascript compiles 


// var apple  = 40;
// var orange = 90;

// apple = 100;

// //change it we can chagne var.  
// 

// console.log(apple,orange )


// what is string ?

// var name ="sodor uddin";
// console.log(name)

// what is boolena type ?
// var isRich = true ;

//snake case ,camel case,Pascal Case

// const apple = 20;
// const orange = "20";
// const orange = parseInt("20");
// const orange = parseInt("eef"); //NaN
// parseFloat

// console.log(apple + orange )  //2020
// console.log(apple * orange )  //khali jog e jhamela 


// const one = 0.1;
// const two = 0.2;
// const total = 0.1 + 0.2;
// console.log(typeof total)
// console.log(typeof total.toFixed(2)) //string 



// shorthand 
// var price = 45;
// price += 10; //no need to declare variable 
// price -=10
// price *=10

// console.log(price)

// what is concatination 
// what is null in javascript 


// why this is happening 

// const a = isNaN(11);
// console.log(a)

// const b = isNaN(10-2);
// console.log(b)


// module - 18

/** Comparison 
 * 1.bigger : >
 * 2.less : <
 * 3.equal : ==
 * 4.greater than euqla : >=
 * 5.less than equal : <=
 * 6.not equal : !=
 * 
 * 7. and && (duitai true)
 * 8.or || (jekhono ekta true hote hobe )
 */

// Comparison 
// console.log(5>10);  //false
// console.log(5<10);  //true
// console.log(5==10);  //false
// console.log(5<=10);  //true
// console.log(10<=10);  //true
// console.log(15<=10);  //flase
// console.log(15>=10);  //true 


///

// console.log(10=="10")                   //true
// console.log(10==="10")                  //false

     
//  console.log(10 !="10")                      //false
//  i have a question there 
// console.log(10 !=="10")                      //true 

// what is condition is javascript 
//what is conditional statement in javascript 


// if else system 

// if(5<10){
//     console.log("yes okay ")
// }


// if(45<10){
//     console.log("yes okay ")
// }

// /*what is conditional statement in javascript 
// / difference between 3 equal and two equal in javascript . 



// const price = 30

// if(price < 30){
//     console.log('okya choto ')
// }
// else{
//     console.log('na choto na ')
// }
// --------------------


const salary  = 100;
const isBCS = false ;
const house = true;

// if(salary > 200 || isBCS == true  ){
//     console.log('okay')
// }


// if(salary > 200 && isBCS == true  ){
//     console.log('okay')
// }


// if(salary > 100 && isBCS == true && house == true){
//     console.log('okay ')
// }


// if(salary > 100 || isBCS == true || house == true){
//     console.log('okay ')
// }


// complex conditions 
// if((salary <= 100 && isBCS ==true) || house== true){
//     console.log('okay ')
// }



// multilabel if else conditions

// const price = 2500;

// if(price >= 5000){
//     discount = price * 10/ 100;
//     console.log("10%",discount)
// }
// else if(price >=2500){
//     // 5% discount 
//    discount= price * 5/100;
//    console.log("5%",discount)
// }
// else{
//     console.log('nai ')
// }




/*Neste if */
// age ekta if else likhe fhelbho 
// const money = 500;

// if(money >=500){
//     console.log('you are rich bro ')
// }
// else{
//     if(money >= 300){
//         console.log('you are middle class ')
//     }
//     else{
//         if(money >= 50){
//             console.log('you are fokir bro')
//         }
//         else{
//             console.log('tui k bea ')
//         }
//     }
// }



// Ternary operator 
//codition ? do somtheign : do something else 

    // const age = 17

// age >=18 ? console.log('vode dio') : console.log('gumao ')
// age >= 18 ? console.log('heloo') : console.log('tui to bacca')
// complex ternary 


// let price = 200;     //eikhane const decalre korle kintu kaj hoi to na 
// const isLeader =true;

// // price = isLeader == true ? 0 : price + 100;

// // console.log(price )



// price = isLeader == true ? 
//       price > 100 ? price / 2 : 0 :
//        price + 100;
// // nested logic tah onno jaigha theke likhe anbho 

// console.log(price)


// short cut .js 

const isLeader = true ; 

// if(!!isLeader){
//     console.log("chair char ")

// }
// // if(!isLeader){
// //    console.log("chair char ")

// //  }
// else{
//     console.log("bose thak")
// }

// why condition is important ?
//go to JS-conditionals-task from programming hero and solve the problem

//hw making decision in your code mdn blogs read .
//What is conditional branching? 

//What is a nested if-else statement?
//ans : 
// An if-else statement inside another if-else statement 

//What is the ternary operator in JavaScript?
// ans : 
// A shorthand for an if-else statement 


//What is the purpose of else if in a multi-level conditional statement?
// ans : To execute code if the if condition is false and the else if condition is true 


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// const ticketPrice   = 800;
// const age = 18;
// const isStudent = true ;


// if(age < 10) {
//     console.log('you got free ')
// }
// else if(age >= 60){
//     const discount = ticketPrice*15 / 100;
//     console.log("15",discount)
// }
// else if(isStudent == true){
//     const discount = ticketPrice*50 / 100;
//     console.log("50",discount)
// }
// else{
//     console.log(ticketPrice)
// }


// const num1 = 1;
// const num2 = 2;

// write it again  

// const result = num1>num2 ? num1 * num1 :
//  num1 <=num2 ? num1 + num2 : 0;

//  console.log(result)


