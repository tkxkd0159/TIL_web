function type() {
  console.log(2 > 1);
  console.log(2 < 1);
  console.log(3 >= 2);
  console.log(3 <= 3);
  console.log(3 == "3");
  console.log(3 === "3");
  console.log(3 !== "3");
  console.log(!(7 != "7") && 7 == "7");
  console.log(7 != "7" || 7 == "7");
  console.log(typeof (2 > 1));
  console.log(typeof 2);
  console.log(typeof "string");
  console.log(typeof function () {});
}

class MyClass {};

type();

console.log(typeof MyClass);
