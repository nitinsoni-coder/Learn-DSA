class Deque {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.front = -1;
    this.rear = 0;
  }

  isFull() {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    );
  }

  isEmpty() {
    return this.front === -1;
  }

  insertFront(key) {
    if (this.isFull()) {
      console.log('Overflow! Cannot insert at front');
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }

    this.arr[this.front] = key;
    console.log(`Inserted ${key} at front`);
  }

  insertRear(key) {
    if (this.isFull()) {
      console.log('Overflow! Cannot insert at rear');
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else if (this.rear === this.size - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }

    this.arr[this.rear] = key;
    console.log(`Inserted ${key} at rear`);
  }

  deleteFront() {
    if (this.isEmpty()) {
      console.log('Underflow! Cannot delete from front');
      return;
    }

    console.log('Deleting from front...', this.front);

    const removed = this.arr[this.front];
    this.arr[this.front] = null;  // <-- clear the slot
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front++;
    }

    console.log(`Deleted ${removed} from front`, this.arr);
  }

  deleteRear() {
    if (this.isEmpty()) {
      console.log('Underflow! Cannot delete from rear');
      return;
    }

    const removed = this.arr[this.rear];
    this.arr[this.rear] = null; // <-- clear the slot
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }

    console.log(`Deleted ${removed} from rear`);
  }

  getFront() {
    if (this.isEmpty()) {
      console.log('Deque is empty');
      return null;
    }
    return this.arr[this.front];
  }

  getRear() {
    if (this.isEmpty()) {
      console.log('Deque is empty');
      return null;
    }
    return this.arr[this.rear];
  }

  printDeque() {
    if (this.isEmpty()) {
      console.log('Deque is empty');
      return;
    }

    let i = this.front;
    let result = [];
    while (true) {
      result.push(this.arr[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }
    console.log('Deque contents:', result.join(' -> '));
  }
}

// Example usage:
const dq = new Deque(4);
dq.insertFront(5);
dq.insertRear(6);
dq.insertRear(7);
dq.insertFront(8);
dq.printDeque();  // Expected: 2 -> 5 -> 10 -> 20
dq.deleteRear();  // Expected: Deleted 20
dq.deleteFront(); // Expected: Deleted 2
dq.printDeque(); // Expected: 5 -> 10
