// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"


//answer:

// var str1 = "abcadeecfb";
// var str2 = str1.length;

// function duplicate(str1 , str2){
//     var cb = new Map()

//     var value = "";
//     for(var i = 0;i<str2;i++){
//         if(!cb.has(str1[i])){
//             value+=str1[i];
//             cb.set(str1[i],1)
//         }
//     }
//     console.log(value);

// }
// duplicate(str1,str2);


// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"



//answer:

let str = "abcadeecfb"
let result = [...str].reduce((res,char) => ((res[char] = (res[char] || 0) +1),res),
{}
);
console.log(result);
