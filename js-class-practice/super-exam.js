class Square {
  getArea() {
    return this.widht * (this.height || this.widht);
  }
}

class Rectangle extends Square {
  constructor(a) {
    this.a = a;
  }
}

new Rectangle();
