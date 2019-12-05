function subClass(obj) {
  // 1. 자식 클래스 (함수 객체) 생성
  // 2. 생성자 호출
  // 3. 프로토 타입 체인을 활용한 상속 구현
  // 4. obj 를 통해 들어온 변수 및 메서드를 자식 클래스에 추가
  // 5. 자식 함수 객체  반환

  const parent = this === global ? Function : this;
  const F = function() {};
  const child = function(...arg) {
    const _parent = child.parent;
    if (_parent && _parent !== Function) {
      // 현재 클래스의 부모 생성자가 있으면 그 함수를 호출한다
      // 다만 부모가 Function 인 경우 최상위 클래스에 도달했으므로
      // 실행하지 않는다.

      _parent.apply(...arg); // 부모 함수의 재귀적 호출
    }
    if (child.prototype.hasOwnProperty("_init")) {
      child.prototype._init.apply(this, ...arg);
    }
  };

  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
  child.parent = parent;
  child.subClass = subClass;

  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      child.prototype[i] = obj[i];
    }
  }

  return child;
}
const personObj = {
  _init() {
    console.log("person init");
  },
  getName() {
    return this._name;
  },

  setName(name) {
    this._name = name;
  }
};

const studentObj = {
  _init() {
    console.log("student init");
  },

  getName() {
    return `Student Name ${this._name}`;
  }
};

const Person = subClass(personObj); // Person 클래스 정의
const person = new Person(); // person init 출력
person.setName("zzoon");
console.log(person.getName()); // (출력값) zzoon

const Student = Person.subClass(studentObj);
const student = new Student(); // person init, student init 출력
student.setName("jamhjoo");
console.log(student.getName());
console.log(Person.toString());

// 자식을 또 다른 함수가 다시 상속받았을 경우

// const SuperClass = subClass(obj);
// const SubClass = SuperClass.subClass();
// const Sub_SubClass = SubClass.subClass();

// 이 코드의 인스턴스 생성시 최상위 클래스인 SuperClass 의 생성자가가 호출되지 않음
// 부모의 클래스 생성자를 호출하는 코드는 재귀적으로 구현될 필요가 있음
