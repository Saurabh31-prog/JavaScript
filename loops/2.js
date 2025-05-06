//while
while(true){
    console.log("Hello World");
    break;
}
//do while
let i = 0;
do {
    console.log("Hello World");
    i++;
}
while(i < 5);

//for of
let myArray = ["flash", "sword", "shield"];
for (let element of myArray) {
    console.log(element);
}
//for in
let myObject = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in myObject) {
    console.log(key + ": " + myObject[key]);
}
