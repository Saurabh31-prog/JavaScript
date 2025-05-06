 /*
 Rest Operator
 The rest operator is used to represent an indefinite number of arguments as an array.
 It is used in the function parameter list.
 */
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(100, 233, 344));

function calculateCartPrice2(val1, val2, ...num1){
return val1; //100
}
console.log(calculateCartPrice2(100, 233, 344, 500));


//---------------------------------------------------------------------------------------------

const user = {
    username:  "saurabh",
    price : 199,
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

// passing object as parameter in function handleObject
 
handleObject({
    username: "sam",
    price:222
})

const myNewArray = [200, 400, 500, 600]
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));