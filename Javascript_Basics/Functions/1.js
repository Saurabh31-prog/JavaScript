function add(a, b) {
  return a + b;}
const result = add(2, 3); // 5 
console.log(result)


function loginUserMessage(username) {
    if(username === undefined) {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// way of calling the function
const user = loginUserMessage("himanshu");
console.log(user);
console.log(loginUserMessage("himanshu"));