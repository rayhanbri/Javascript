// explore substring and sub str 
//167 line 
// 1.How for loop iterate on an array ? 

// for loop iterates on index of an array



 const array = [1, 2, 3, 4, 5, 6, 7]; 



// i = 1 means it  will starts from 1 index 

// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//  continue;
//  }
//  console.log(array[i]);
// }



// What is the key difference between a while loop and a do...while loop? 

// ans :
// while loop checks the condition before executing the statements and do… while loop executes the statements at least once before checking the condition.




// what while loop returns 


//!!while loop returns an Object it is important 
// let  number =3;
// while(number < 10){
//     console.log(typeof number,number)
//     number ++;
// }

// it returns number 
// for(let i = 0 ; i < 5 ; i ++){
//     console.log(typeof i,i)
// }

// do{
//     console.loimilarity between tg(number);
//     number
// }
// while(number > 5)




///string vs array 
//shen
//difference between them .
//string is immuntable // string ke change kora jai na. 

// 1.How to get length of an string , make Uppercase ,lowerdcaser? 
//2. What is trim do ?
//3.What is the differ between slice and splice ? 

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


// console.log(part)


//1.what is split ? 
//2.how to make a string into array .how get every word of an stirng ? how get word devided by string   ? how cut  a word form an string? 
//3.How to check is something is array or not ? 

// string k split korle ota array hoye jai
// split return array 








const sentence = "I am a good boy";

// split return array of a string 

// console.log(sentence.split())       //it just make an array 
// console.log(sentence.split(""))      //give me every letter space also in an array 
// console.log(sentence.split(" "))  //cut every space give word
// console.log(sentence.split("a"))   //it cut a and make word
// a er gia ghai space rakbhe 


// const friends = "Rayhan,Alif,Owalid,Farhan"
// console.log(Array.isArray(friends)) ///false 
// console.log(friends.split(","))  //it return an array 

 

// how it works 
// console.log(friends.split(","))


// join of an  in array 
//1.what join return ? 
//2. How to join every  element of an array whithout comma and space ? 
// how to join with space between every elements ? 
// How join with comma ? 
//How join with fullstop or something else? 
//



const friends = [ 'Rayhan', 'Alif', 'Owalid', 'Farhan' ];
// console.log(typeof(friends.join())) //string return koer
// console.log(friends.join(""))  //, take badh diye dhibhe 
// console.log(friends.join(" "))  //it is count the space on array
// console.log(friends.join())   //it is not consider space
// console.log(friends.join("|")) 

// .join type string 

// concatinaton in array ? 
//how add space manually between two variable 
//how add with out space using concat()
//how to add space using concat. 
//how to use includes and what it returns ?







// const frist = "Abid";
// const last = "nabid";

// const fullName = frist + " " +last;  //space addination
// const fullName = frist.concat(last)    //it has no space
// const fullName = frist.concat(' ').concat(last) 

// console.log(fullName) 
// console.log(last.includes("x"))    ///it will return true flase 



// reverse system 
// how it is working 

//1.how to reverse using split,and reverse




const  name = "Hero"
// how it is working i dont no 
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

// const reversed=name.split('').reverse().join("")  //oreh
// const reversed=name.split('').reverse().join()  //o,r,e,h , ta theke jabhe 

// console.log(reversed)

//what is primitive and non-primitive data


// having fun with Object
//what is object method ?

//1.How to get an property value from object tell two methods ? 
//2.how to  use bracket and when we use it .
//3.how get all the keys and values form object /
//4. new object and Object.create()

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
//     //  console.log(prop)
//     //  console.log(prop , person[prop])  
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

// length zero ? 
// const x = "" 
// console.log(x.length)  
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