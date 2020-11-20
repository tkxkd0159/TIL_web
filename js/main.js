const CIRCLE_PI = 3.14;
const thisIsMyObject = {};
let myVariable = 35;
let manList = {
  rookie: { name: ["John", "Jack", "PSJ"] },
  senior: { name: ["LJS", "SNU"] },
};
manList.newVal = {}; // 선언안되있는 key값의 경우 한번에 그 안의 key:value 까지 설정불가. 따라서 선언해줘야 함.
manList.newVal.name = ["new", "Variation"];

function thisIsMyFunction() {};
class ThisIsMyClass {
  constructor(options) {
    this.name = options.name;
  }

  printList() {
    if (this.name.length == 3) {
      console.log("print list : ", this.name);
    } else {
      throw "throw error test";
    }
  }
}


try {
  const myClass = new ThisIsMyClass(manList.rookie);
  console.log(myClass.name);
  myClass.printList();
  console.log(manList);
  console.log(`"I'm a boy"`);

} catch (error) {
  console.log("error occured");
  console.log(error);
}