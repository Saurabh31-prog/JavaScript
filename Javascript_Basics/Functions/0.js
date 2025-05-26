function updateBrand(obj) {
    // Mutating the object is visible outside the function
    obj.brand = "Toyota";
    obj.model = "civic";
    obj.year = 2020;
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    obj = null;
  }
  
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(car.brand); // Honda
    console.log(car.model); // Accord
    console.log(car.year); // 1998
  
console.log("Pass object reference to the function")

  updateBrand(car);
  // updateBrand mutates car

  console.log(car.brand); // Toyota
  console.log(car.model);
  console.log(car.year); // 2020