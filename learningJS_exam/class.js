function Person(name) {
  this.name = name;
}

Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
};

Person.method("setName", function(name) {
  this.name = name;
});

Person.method("getName", function() {
  return this.name;
});

function Student(...arg) {
  Person.apply(this, arg);
}

function F() {}
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructure = Student;
Student.super = Person.prototype;

// const you = new Person("zzoon");
// Student.prototype = you;

// const me = new Student("zzoon");
// me.setName("zzoon");
