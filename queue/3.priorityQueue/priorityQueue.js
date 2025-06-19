class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    this.items[this.items.length] = { element, priority };
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items.length ? this.items[0] : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 3);
priorityQueue.enqueue("B", 1);
priorityQueue.enqueue("C", 2);

console.log(priorityQueue.dequeue());
