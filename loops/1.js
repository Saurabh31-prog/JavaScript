//for
/*
let array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loops value: ${i}`);
    for (let j = 1; j <= 10; j++) { 
        console.log(`Inner loops value: ${j}`);
    }   
}




let myArray = ["flash", "sword", "shield"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
    */

//break and continue

for (let index = 1; index < 20; index++) {
    console.log(index);
    if(index === 5) {
        console.log("detected 5");
        break;
    }
    console.log("this will not be printed");
}

//continue

for(let i = 1; i < 10; i++)
{
    if(i === 5){ 
        console.log("detected 5");
        continue;
    }
    console.log(i);
}
