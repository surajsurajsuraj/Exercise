class stack {
  constructor(size) {
    this.arr = [];
    this.size = size;
  }

  isEmpty() {
    if (this.arr.length == 0) return true;
    return false;
  }

  isFull() {
    if (this.arr.length == this.size) return true;
    return false;
  }

  push(a) {
    if (this.isFull()) return console.log("error array full");
    this.arr.push(a);
    console.log(this.arr);
  }

  pop() {
    if (this.isEmpty()) return;
    console.log(this.arr.pop());
    console.log(this.arr);
  }
}

const S = new stack(5);
S.push(1);
S.push(3);
S.pop();
console.log(S.size);
