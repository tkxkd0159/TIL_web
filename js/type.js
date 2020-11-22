function type() {
  console.log(2 > 1);
  console.log(3 >= 2);
  console.log(3 == "3");
  console.log(3 === "3");
  console.log(3 !== "3");
  console.log(!(7 != "7") && 7 == "7");
  console.log(7 != "7" || 7 == "7");
  console.log(typeof (2 > 1));
  console.log(typeof 2);
  console.log(typeof "string");
  console.log("Function type :", typeof function () {});
  console.log("Convert Number to String :", String(10));
  console.log("Convert String to Number :", Number("2"));
  console.log("Convert 0, NaN, '' to boolean :", Boolean(0), Boolean(''), Boolean(NaN));
  console.log(`null is undefined : ${null == undefined}`);
}

class MyClass {};

type();

console.log("class type :", typeof MyClass);