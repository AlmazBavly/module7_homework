function hasProperty(obj, propertyName) {
  return propertyName in obj;
}

let obj = {name: "Almaz", age: 39};
console.log(hasProperty(obj, "name"));
console.log(hasProperty(obj, "Adel"));
