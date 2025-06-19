class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items[this.items.length] = element;
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    }
    this.items.length = this.items.length - 1;
  }

  peek() {
    if (this.isEmpty()) return "stack is empty";

    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(5);
stack.push(9);

stack.pop();

console.log("peek :", stack.peek());
console.log("size :", stack.size());
stack.print();
