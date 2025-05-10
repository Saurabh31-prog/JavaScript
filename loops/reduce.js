//reduce
//definition : 

const myNums = [1, 2, 3];

/*
const mytotal = myNums.reduce(function (acc, currval) {
    console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval;
}, 0) 


// same output 
const mytotal =myNums.reduce((acc, currval) => acc + currval, 0)



console.log(mytotal);
 */



const shoppingCart = [
    {
        itemname: "js course",
        price: 100
    },
    {
        itemname: "cpp",
        price : 100
    },
    {
        itemname: "java",
        price: 100
    }
]
const pricetopay = shoppingCart.reduce ( (acc, item) => acc + item.price, 0)
console.log(pricetopay);