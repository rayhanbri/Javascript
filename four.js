// function bigNumber(num1,num2,num3){
//     if(num1 > num2 &&  num1 > num3){
//         return 'number 1 is the big boy'
//     }
//     else if(num2 > num3 && num2 > num1){
//         return "number 2 is the big boy"
//     }
//     return 'number 3 is the big boy'
// }

// const bigOne = bigNumber(6,9,10)
// console.log(bigOne)

// const num1 =9;
// const num2=5;

// console.log(Math.max(num1,num2))


// const height = [15,2,3,4,5,10]

// function max(heights){
//     let big = height[0];
//     for(const height of heights){
//         // console.log(height)
//         if(height > big){
//             big = height
//         }
//     }
//   return big;
// }

// console.log(max(height))


// const Phones =[
//     {name : 'samsung' , price : 100},
//     {name : 'TaltuPhone' , price : 7},
//     {name : 'OrangePhone' , price : 4},
// ]

// function highPrice(Phones){
//     let max= Phones[0];
//     for(const phone of Phones){
//         if(phone.price > max.price){
//             max=phone
//         }
//     }
//     return max;
// }

// console.log(highPrice(Phones))


//validation 

// function arrayChecker(numbers){
//     // array ke typeof diye check kora jai na karon array k object  hishebhe 
//     // count kore javascript
//     if(!Array.isArray(numbers)){
//         return "please provide an array"
//     }
//     return numbers
// }

// console.log(arrayChecker('d'))

//git hub - js-problems-part2-practice-task

// const data = null
// console.log(typeof null)


// Adds elements to the beginning of an array  

//this is array like object 
// function Array(num,num1,num2){
//     console.log(arguments)
// }
// console.log(Array(1,2,3))


//adding search funtionality

const Products = [
    {id:1,name:"Phone"},
    {id:2,name:"Mobile"},
    {id:3,name:"phone"},
    {id:4,name:"mobile"}
]


function search(products,str){
    const keyword = [];
    for(const product of products){
        //lower case proe kortechi
        if(product.name.toLowerCase().includes(str.toLowerCase())){
            keyword.push(product)
        }
    }
    return keyword

}


console.log(search(Products,"Mobile"))