function cats(arr) {
  class Cat {
    constructor(catName, age) {
      this.catName = catName;
      this.age = age;
    }

    meow() {
      return `${this.catName}, age ${this.age} says Meow`;
    }
  }

  for (catData of arr) {
    let parsedData = catData.split(' ');
    let [name, age] = parsedData;
    let cat = new Cat(name, age);
    console.log(cat.meow());
  }
}

cats(['Mellow 2', 'Tom 5'])