// console.log(22)

// node frist .js 
// Node (or Node.js) is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

// Normally, JavaScript runs inside the browser (like Chrome, Firefox). But Node.js lets you use JavaScript on the server-side (backend).

// Key points about Node.js:

// Built on Chrome’s V8 JavaScript engine (very fast).

// Lets you build server-side applications (APIs, web servers, backend systems).

// what is non-blocking and event driven ? 
// Definition:
// Non-blocking means a program doesn’t stop or "wait" for one operation to finish before moving to the next one.
// Instead, it continues running other tasks, and when the first operation is done, it notifies the program (via callback, promise, or async/await).

// Event-Driven

// Definition:
// Event-driven means the flow of the program is controlled by events (like user clicks, API responses, timers, incoming requests).
// Instead of checking repeatedly ("is it done?"), the program listens for events and reacts when they happen.

// Everyday Example:

// A waiter in a restaurant doesn’t stand in the kitchen waiting for food (blocking).

// Instead, he serves other tables and when the kitchen bell rings (event), he goes to collect food.

// Uses non-blocking, event-driven architecture, which makes it great for handling many requests at the same time.

// You can use JavaScript for full-stack development (both frontend and backend).



// what is variable ? 
// A variable is like a container that stores data in programming.

// what is funciton scoped and block scoped 

// 🔹 Function Scoped

// A variable is function-scoped if it is accessible anywhere inside the function where it’s declared.

// In JavaScript, the var keyword is function-scoped.

// 🔹 Block Scoped

// A variable is block-scoped if it is only accessible inside the block { } where it’s declared.

// function demo() {
//   if (true) {
//     var a = 1;    // function-scoped
//     let b = 2;    // block-scoped
//     const c = 3;  // block-scoped
//   }

//   console.log(a); // ✅ works
//   console.log(b); // ❌ error
//   console.log(c); // ❌ error
// }

// demo();

// test();

// var – old way (function-scoped, not commonly used now).

// let – modern way (block-scoped, value can change).

// const – modern way (block-scoped, value cannot be reassigned).

// ------
// // why there is convention for declaring variable 

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
// A string is a sequence of characters (letters, numbers, symbols, spaces) used to represent text in programming.

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

//if we use to fixed than it bemoces string



// shorthand 
// var price = 45;
// price += 10; //no need to declare variable 
// price -=10
// price *=10

// console.log(price)

// what is concatination 
// In programming, concatenation means joining things together.

// what is null in javascript 
// In JavaScript, null is a special value that represents nothing or empty on purpose.


// why this is happening 

// const a = isNaN('f');    //it is function 
// console.log(a)

// const b = isNaN(10-2);      ///false mane numbers 
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

//only value comparison and value and type both comparision 

//  console.log(10 !="10")                      //false
//  i have a question there 
// console.log(10 !=="10")                      //true 
// because type different duitai true hoithe hobe . 


// what is condition is javascript 

// 🔹 What is a Condition in JavaScript?

// A condition is simply an expression that evaluates to either true or false (a Boolean).
// It’s often used in decision-making.

//what is conditional statement in javascript 
// A conditional statement is how we tell JavaScript:
// 👉 “If a condition is true, run this code; otherwise, run something else.”


// if else system 

// if(5<10){
//     console.log("yes okay ")
// }


// if(45<10){
//     console.log("yes okay ")
// }


// const price = 30

// if(price < 30){
//     console.log('okya choto ')
// }
// else{
//     console.log('na choto na ')
// }
// --------------------


// const salary  = 100;
// const isBCS = true ;
// const house = true;

// if(salary > 50 || isBCS == true  ){
//     console.log('okay')
// }


// if(salary > 50 && isBCS == true  ){
//     console.log('okay')
// }


// if(salary > 100 && isBCS == true && house == true){
//     console.log('okay ')
// }


// if(salary > 100 || isBCS == false || house == true){
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
// const vote = age >= 17 ? console.log('vote daw') : console.log('dio na')

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

const isLeader = true;

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


//hw making decision in your code mdn blogs read .
//What is conditional branching? 
// Conditional branching = decision-making in code.
// It allows programs to choose different paths depending on conditions.

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


// const num1 = 10;
// const num2 = 8;

// // write it again  

// const result = num1 > num2 ? num1 + num2 :
//     num1 < num2 ? num1 * num2 : 0;

// console.log(result)


// why developer  use Node.js ?
// That’s an important one 👍 Developers choose **Node.js** because of its **speed, scalability, and developer-friendly ecosystem**. Let’s break it down:

// ---

// ## 🔹 Why Developers Use Node.js

// ### 1. **Non-blocking & Event-driven (High Performance)**

// * Node.js uses an **event loop** and **non-blocking I/O**.
// * Instead of waiting for slow operations (like database queries or file reads), it handles thousands of requests simultaneously.
//   👉 Perfect for **real-time apps** (chat, live notifications, streaming, multiplayer games).

// ---

// ### 2. **Single Programming Language (JavaScript Everywhere)**

// * With Node.js, you use **JavaScript on both frontend and backend**.
// * Developers don’t need to switch between multiple languages (like PHP, Python, Java for backend + JS for frontend).
//   👉 This makes development **faster and easier**.

// ---

// ### 3. **Huge Ecosystem (npm Packages)**

// * Node.js has **npm (Node Package Manager)** with **over 2M+ packages**.
// * You can find ready-made solutions for almost anything (authentication, file upload, payment gateways, APIs).
//   👉 Saves time, avoids reinventing the wheel.

// ---

// ### 4. **Great for APIs & Microservices**

// * REST APIs, GraphQL, WebSockets — Node.js handles them efficiently.
// * Works well with **microservice architecture** (splitting large apps into smaller services).

// ---

// ### 5. **Real-time Applications**

// * Node.js shines when apps need **instant updates**:

//   * Chat apps (WhatsApp, Slack, Messenger)
//   * Live streaming (YouTube Live, Twitch)
//   * Collaborative tools (Google Docs style editing)

// ---

// ### 6. **Scalability**

// * Node.js can handle **tens of thousands of concurrent users** on a single server.
// * Big companies (Netflix, Uber, PayPal) use it because it scales horizontally (adding more servers easily).

// ---

// ### 7. **Fast Prototyping & Startup Friendly**

// * Easy setup, lots of libraries, huge community → ideal for startups and hackathons.
// * Developers can build a **MVP (Minimum Viable Product)** quickly.

// ---

// ### 8. **Active Community & Support**

// * Node.js is **open source** with millions of developers worldwide.
// * Any problem? Likely someone already solved it.

// ---

// ## ✅ In One Line:

// Developers use Node.js because it’s **fast, scalable, uses JavaScript everywhere, and has a massive ecosystem**, making it perfect for **modern web apps, APIs, and real-time applications**.

// ---

// 👉 Do you want me to also give you a **real-world example** of when to use Node.js vs when **NOT** to use Node.js (like CPU-heavy tasks)? That helps you see the practical limits too.

