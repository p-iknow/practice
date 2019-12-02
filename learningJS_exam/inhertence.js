function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

const person = {
  name: "zzoon",

  getName() {
    return this.name;
  },

  setName(name) {
    this.name = name;
  }
};

function extend(obj, prop) {
  if (!prop) {
    prop = obj;
    obj = this;
  }
  Object.keys(prop).forEach(p => {
    obj[p] = prop[p];
  });
  return obj;
}

const student = createObj(person);
const added = {
  setAge(age) {
    this.age = age;
  },
  getAge() {
    return this.age;
  }
};

extend(student, added);
