// const userEmail = "saurabh@.ai"

// if(userEmail) {  //no comparison made as we have userEmail defined and has a specific value so we assume it true without comparison 
//     console.log('got user email');
    
// }else{
//     console.log('dont have user email');
// }


/*
falsy Values

-false
-0
- -0 (negative zero)
- Bigint 0n
- ""
-null
-undefined
-Nan
*/

/*
truthy Values

-true
-"0" -string 0 is true value
-'false' is true value in string
-" " string with space
-[]
-{}
-function() {}  empty function is true value
*/

// const emptyObj =  {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log('empty object');
// }



/*

general truthy and falsy comparison
false == 0 - true
false == -0 - true
false == "" - true
0 == '' - true
0 == -0 - true
0 == 0n - true
0n == -0 - true
0n == 0 - true
0n == false - true


false == null - false
false == undefined - false
false == NaN - false
0 == null - false
0 == undefined - false
0 == NaN - false
0n == null - false
0n == undefined - false
0n == NaN - false

*/


/*
//Nullish coalescing operator (??) : null or undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); //5
val1 = null ?? 10;
console.log(val1); //10
val1 = undefined ?? 10;
console.log(val1); //10
val1 = null ?? undefined;
console.log(val1); //undefined
val1 = null ?? 10 ?? 20;
console.log(val1); //10;
*/

//Terniary operator
/*
syntax: condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("greater than 80"):
 */
