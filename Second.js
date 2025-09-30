// starts from 329 

// what is switch 

// In JavaScript, the switch statement is a type of conditional statement that is used to execute one block of code from multiple options, based on the value of an expression.

// It’s often used when you have to compare the same value against different possible matches (instead of writing many if...else if statements).



//if is used for fixed conditions 
// break marthe hoi 

const theme = "dark";

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







// what is array ? Index , value ;
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

// numbers[0]=111;     ///no need to declare variables


// numbers.push(3)
// numbers.push(2,1,1)

// console.log(numbers)

// mouse hover kore  ami chaile shob jinis potro jene nite pari 
// numbers.pop(6)   //pop did not take any parameter ignore this just
// we can see the variable we pop 
// const numb1=numbers.pop(4);

// console.log(numbers)

// console.log(numb1) 


// numbers.shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// numbers.unshift(0,1) 
// Inserts new elements at the start of an array, and returns the new length of the array. 




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
// for(let i = 1; i< 5 ; i++){
//      sum = sum + i ;
// }

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



// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//  continue;
//  }
//  console.log(array[i]);
// }



// What is the key difference between a while loop and a do...while loop? 

// ans :
// while loop checks the condition before executing the statements and do… while loop executes the statements at least once before checking the condition.


let  number = 5;

// while(number > 5){
//     console.log(numbers)
//     number ++;
// }

// do{
//     console.log(number);
//     number
// }
// while(number > 5)




///string vs array 
//similarity between then
//difference between them .
//string is immuntable // string ke change kora jai na. 

const capital = "Dhaka ";

// console.log(capital.length )

// console.log(capital[1] )
// console.log(capital)
// console.log(capital.toUpperCase());
// console.log(capital.toLowerCase());
// what is trim do 

// In JavaScript, the .trim() method is used with strings to remove whitespace from both the beginning and the end of a string.
// console.log(capital.trim()); 

// const part = capital.slice(1,3);    //it maens 1 t0 2 
// console.log(capital)
// explore substring and sub str 

// console.log(part)


// const sentence = "I am a good boy";

// console.log(sentence.split())      //it just make an array 
// console.log(sentence.split(""))      //give me every letter space also
// console.log(sentence.split(" "))  //cut every space give word
// console.log(sentence.split("a"))   //it cut a and make word
// a er gia ghai space rakbhe 


// const friends = "Rayhan,Alif,Owalid,Farhan"
// console.log(Array.isArray(friends)) ///false 
// console.log(Array.isArray(friends.split(",")))  //it return an array 

// string k split korle ota array hoye jai
// split return array  

// how it works 
// console.log(friends.split(","))

// const friends = [ 'Rayhan','Alif', 'Owalid', 'Farhan' ];
// console.log(typeof(friends.join()))
// console.log(friends.join(" "))  //, take badh diye dhibhe 
// console.log(friends.join(""))  //it is count the space on array
// console.log(friends.join())   //it is not consider space
// console.log(friends.join("|")) 

// .join type string 


// const frist = "Abid";
// const last = "nabid";

// const fullName = frist + " " +last;  //space addination
// const fullName = frist.concat(last)    //it has no space
// const fullName = frist.concat(' ').concat(last) 

// console.log(fullName) 
// console.log(last.includes("x"))    ///it will return true flase 



// reverse system 
// how it is working 

const  name = "Hero"
// let reverse = '';
// for(const nam of name){
//     // console.log(nam)
//     reverse = nam + reverse
// }
// console.log(reverse )

// another way to deal with it 
// for(let i = 0 ;i <= name.length;i++ ){
//     console.log(name[i])
//     const letter = name[i];
//      reverse = letter + reverse
// }
// console.log(reverse)

// const reversed=name.split('').reverse().join("")
// const reversed=name.split('').reverse().join()  // , ta theke jabhe 

// console.log(reversed)

//what is primitive and non-primitive data


// having fun with Object
//what is object method ?

const person = {
    name : "rayhan",
    profession :"developer",
    age:"10",
    salary:"200000",
    'fav place':"ctg"
}

// console.log(person)
// console.log(person.profession)
// const taka = person.salary ;

///dot notation 


//bracket notation 
// console.log(person['salary'])
// console.log(person['fav place'])
//when we use barcket notaion 

// person.name = "heeloo"
// person['age']=1000;

// const boysh ='age';
// person[boysh]= 2
// console.log(person)


// const keys = Object.keys(person);
// const values = Object.values(person);

// console.log(values)
// delete person.name;
// console.log(person)


//for in for object 
// for(const prop in person ){
//      console.log(prop)
//      console.log(person[prop])
// }


// const keys = Object.keys(person);
// console.log(keys)

// for(const key of keys){
//     console.log(key,":",person[key])
// }



// const pencil = new Object();
// console.log(pencil)   //{}
// const pen = Object.create({});
// console.log(pen)


//array vs object

// what is concatination 

// i have a question here 
// let str = "Mississippi";
// console.log(str.indexOf("i", 4));


const x = ""
// console.log(x.length)   //0
// if(!x.length){
// console.log("Hey")
// }else{
// console.log("Hi")
// }


// string is immutable ei jinista  kintu ami prochi kintu eikhane buji nai 
// karon practive kore dhekhi nai 

// const str = "Hello";
// str[0] = "h";
// console.log(str);