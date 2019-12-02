function subClass(obj) {
  // 1. 자식 클래스 (함수 객체) 생성
  // 2. 생성자 호출
  // 3. 프로토 타입 체인을 활용한 상속 구현
  // 4. obj 를 통해 들어온 변수 및 메서드를 자식 클래스에 추가
  // 5. 자식 함수 객체  반환

  const parent = this;
  const F = function() {};
  const child = function() {};

  F.prototype = parent.prototype;
  child.prototype = new F();
  child.constructor = child;
  child.parent = parent.prototype;
  child.parent_constructor = parent;

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      child.prototype[i] = obj[i];
    }
  }

  return child;
}

const SuperClass = subClass(obj);
const subClass = SuperClass.subClass(obj);
