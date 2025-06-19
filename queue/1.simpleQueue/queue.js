class Queue {
  constructor(maxSize) {
    this.items = new Array(maxSize);
    this.maxSize = maxSize;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return this.rear === this.maxSize - 1;
  }

  enqueue(element) {
    if (this.isFull()) {
      throw new Error('Queue is full');
    }
    if (this.front === -1) this.front = 0;
    this.rear += 1;
    this.items[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }

    const removed = this.items[this.front];

    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front += 1;
    }

    return removed;
  }

  peek() {
    return this.isEmpty() ? 'Queue is empty' : this.items[this.front];
  }

  print() {
    if (this.isEmpty()) return [];
    return this.items;
  }

  size() {
    return this.isEmpty() ? 0 : this.rear - this.front + 1;
  }

  clear() {
    this.front = this.rear = -1;
  }
}

const queue = new Queue(4);

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);

queue.dequeue();

console.log(queue.peek());
console.log(queue.size());
console.log(queue.print());
queue.clear();
console.log(queue.print());
