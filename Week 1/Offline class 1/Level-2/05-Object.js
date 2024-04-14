function objectMethods(obj) {
  console.log("Original Object: ", obj);

  let keys = Object.keys(obj);
  console.log("After Object keys(): ", keys);

  let values = Object.values(obj);
  console.log("After Object values(): ", values);

  let entries = Object.entries(obj);
  console.log("After Object entries(): ", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty(): ", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign(): ", newObj);

  let new2Obj = Object.assign({}, newObj, obj, { name: "Vinal" });
  console.log(
    "After understanding Object.assign({}, obj, {newProperty: newValue}):",
    new2Obj
  );
}

const sampleObject = {
  key1: "value 1",
  key2: "value 2",
  key3: "value 3",
};
objectMethods(sampleObject);
