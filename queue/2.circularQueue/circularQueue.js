class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = new Array(size).fill(null);
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }

    if (this.isEmpty()) {
      this.front = this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }

    this.items[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    let dequeuedValue = this.items[this.front];

    this.items[this.front] = null;

    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return dequeuedValue;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.front];
  }

  print() {
    console.log(this.items);
  }
}

const circularQueue = new CircularQueue(5);

circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.enqueue(9);
console.log(circularQueue.isFull());

console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
circularQueue.enqueue(11);
circularQueue.enqueue(12);

circularQueue.isEmpty();
console.log("peek : ", circularQueue.peek());
circularQueue.print();
