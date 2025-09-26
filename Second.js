// what is switch 



//if is used for fixed conditions 

// const theme = "red";

// switch (theme){
//     case "light":
//         console.log('light theme applied')
//         break;
//     case "dark":{
//         console.log("dark theme applied")
//         break;
//     }
//     default :
//     console.log("system theme applied")
// }



// what is array ? Index , value ;

// get element from an array 
// const numbers= [1,23,4,5,9] 

// console.log(numbers.length) 
// console.log(numbers[1])

///set or update element value in a array 

// numbers[0]=111;


// numbers.push(3)
// numbers.push(2,1,1)

// mouse hover kore  ami chaile shob jinis potro jene nite pari 
// numbers.pop()

// const numb1=numbers.pop();

// console.log(numb1)


// numbers.shift()
// numbers.unshift(0)




// console.log(numbers)
// console.log(numbers.includes(1))   //it is case sensitive


// console.log(numbers.indexOf(1))   
// console.log(numbers.indexOf(160))   //jodi na thake taile -1 ;

// console.log(Array.isArray(numbers))

// console.log(Array.isArray(Array(5))) ??

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

// let number = 1; 
// let sum = 0;

// while (number < 10){
//     sum = sum + number ;
//     console.log("sum",sum)
//     number ++;
// }


// js-loop-tasks github

// even number 

// while (number < 5){
//     if(number % 2 === 0){
//         console.log("number",number)
//     }
//     number ++;
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

// let number = 5; 
// while(number >= 0){
//     console.log(number)
//     number--;
// }

// 
// differend ways to do a thing 

//0/ 2  what will be the result 

// even numbers  
// for(let i = 1 ; i < 5; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


// for(let i = 1 ; i < 5; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// for(let i = 0 ; i < 5; i+=2){
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

// for ( let i  = 1 ; i < 25 ; i++){
//     if( i === 10){
//         break ;
//     }
//     console.log(i)
// }

// let number = 1;

// while ( number < 10){
   
//     if(number === 5){
//         break ;
//     }
//     console.log(number);
//     number ++ ;
// }


//what is iteration 
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

// while ( number < 10){
   
//     if(number % 2 === 0){
//         continue ;
//     }
//     console.log(number);
//     number++ ;
// }



// do while 
// difference between while and do while 
// let number = 1;

// do{
//     console.log(number);
//     number ++;
// }
// while(number  < 5)

