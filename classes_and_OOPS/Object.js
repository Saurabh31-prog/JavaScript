//Prototype in javascript 

function multipleBy5(num)
{
    return num*5
}
multipleBy5.power = 2;
console.log(multipleBy5(5))
console.log(multipleBy5.power) //here function is behaving as object
console.log(multipleBy5.prototype)

function createUser(username, score)
{
    this.username = username
    this.score = score

}

createUser.prototype.increment = function() {
    this.score++;
}
createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`)
}
const chai = new createUser("chai", 24)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()