//Assignment

// // Question : 1st
// function reverse(num) {
//     let arr = num.toString().split("");
//     let reversed = arr.reverse().join("");
//     return reversed;
// }

// console.log(reverse("What is your name"));



//Question : 2nd
// function pal () {
// let string = prompt("Enter a string")
// let stringArr = string.split('');
// let stringRev = stringArr.reverse();
// let revString = stringRev.join('');
// if (string === revString) {
//     console.log(string + " : " + " is Palindrome ");
// }else {
//     console.log(string + " : " + " is not Palindrome ");
// }
// }
// pal()



//Question : 3rd
// function combination(str) {
// var listOfStrings = [];
// for (var i = 0; i < str.length; i++) {
//     for (var j = i + 1; j < str.length + 1; j++) {
//         listOfStrings.push(str.slice(i, j))
//     } 
// } return listOfStrings
// }console.log(combination("dog"))




// Question : 4th
// function alpha_order(str) {
//     return str.split("").sort().join("")
// }
// var string = prompt("Enter a String")
// console.log(alpha_order(string))



// Question : 5th
// function caps (sentence) {
//     let str = sentence.split(" ");
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substring(1);
//     }
//     return str.join(" ")
// }
// var string = prompt("Enter a value")
// console.log(caps(string));





// Question : 6th
// function longword (str) {
//     var newString = str.split(" ");
//     newString.sort(function(a, b){return b.length - a.length});
//     return newString[0]
// }
// var string = prompt("Write a value")
// console.log(longword(string))




// Question : 7th
// function vowel(str) {
//     var reg = /[aeiou]/gi;
//     var string = str.match(reg);
//     console.log(string.join(","))
//     return string.length;
// }
// var name = prompt("Enter a value")
// console.log(vowel(name))





// Question : 8th
// function primeNUmCheck(num) {
//     var i;
//     var num;
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             alert(num + " is not a prime number");
//         }
//         else {
//             alert(num + " is a prime number");
//         }
//     }
// }
// var userINput = prompt("Enter a value")
// console.log(primeNUmCheck(userINput));



// Question : 09    
// function detectDataType(value){
//     var dtypes = [Function,RegExp,Number,Boolean,Object], x, len;
//     if(typeof value === "object" || typeof value === "function")
//     {
//         for(x = 0,len = dtypes.length; x < len;x++)
//         {
//             if(value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//         }
//     }
//     return typeof value;
// }

// console.log(detectDataType(435));
// console.log(detectDataType('mudassir'));
// console.log(detectDataType(true));




// Question : 10    


// var array = [3,2,5,2,5,7,4,7,3,5,3,6,3,8,2,5,8,8,8,8,8,8,2];
// console.log(array.sort());

// var outputArray = [];

// function arrayTrim(){
//     var sortedArray = array.sort();

//     for(var i = 0;i<sortedArray.length;i++)
//     {
//         if(sortedArray[i] !== sortedArray[i+1])
//         {
//             outputArray.push(sortedArray[i+1]);
//             break;
//         }
//     }
//     for(var i = sortedArray.length ;i >= 0 ;i-- )
//     {
//         if(sortedArray[i-1] !== sortedArray[i-2])
//         {
//             outputArray.push(sortedArray[i-2]);
//             break;
//         }

//     }
//     return outputArray;
// }

// console.log(arrayTrim());