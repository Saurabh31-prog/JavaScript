//for of loop

/*
const arr = [1, 2, 3, 4, 5];

for(const num of arr) {
    console.log(num);  // 1, 2, 3, 4, 5
}

const greetings = "hello world";
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}
*/
//---------------------------------------------------------

//Maps 
//definition: a collection of key-value pairs

const map = new Map(); //syntax 
map.set('in', "india");
map.set('us', "united states");
map.set('uk', "united kingdom");
map.set('uk', "united kingdom");// overwrites the previous value

console.log(map);

for(const key of map){
    console.log(key);
} //output in array form 
for(const [key, value] of map){
    console.log(key, value);
}//output in destructured form 


//---------------------------------------------------------

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

for (let key of myObject) {
    console.log(myObject[key]); //error
}

//for of does not work with objects because objects are not iterable
//---------------------------------------------------------
