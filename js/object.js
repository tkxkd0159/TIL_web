let manList = {
  rookie: { name: ["John", "Jack", "PSJ"] },
  _senior: { name: ["LJS", "SNU"] },
};
manList.$junior = {}; // 선언안되있는 key값의 경우 한번에 그 안의 key:value 까지 설정불가. 따라서 선언해줘야 함.
manList.$junior.name = ["LSM", "JJY", "LJY"];

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
  const myClass = new ThisIsMyClass(manList.$junior);
  console.log(myClass.name);
  myClass.printList();
  console.log(manList);
} catch (error) {
  console.log("error occured");
  console.log(error);
}
