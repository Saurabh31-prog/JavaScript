// 📘 NOTES: Object Property Descriptors in JavaScript

// 🔍 Inspecting built-in property: Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
// Output:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// 🔒 You cannot change, enumerate, or reconfigure Math.PI

console.log(Math.PI); // ✔️ Still accessible, but cannot be modified

// ----------------------

// 🧪 Custom Object
const object = {
    name: "tea",
    price: 2234,
    isAvailable: true,

    randomFunction : function() {
        console.log("this is random")
    }
}

// 🔍 Get descriptor for 'name' property
console.log(Object.getOwnPropertyDescriptor(object, "name"));
// Output:
// { value: 'tea', writable: true, enumerable: true, configurable: true }

// 🛠 Modify descriptor using defineProperty
Object.defineProperty(object, 'name', {
    // writable: false,   // Optional: prevents modification
    enumerable: false     // ❗️Now 'name' won't show up in loops
});

// 🔍 Check the updated descriptor
console.log(Object.getOwnPropertyDescriptor(object, "name"));

// 🔁 Looping through enumerable properties only
for (const [key, value] of Object.entries(object)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
// Output (note: 'name' won't appear!):
// price : 2234
// isAvailable : true

// ✅ `randomFunction` is skipped because of the typeof check
