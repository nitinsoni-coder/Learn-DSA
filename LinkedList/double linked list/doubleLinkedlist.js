class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //append node at the end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;
    }
    this.length++;
  }

  //print list forward
  printForward() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log("Forward:", result.join(" <-> "));
  }
}

const dll = new DoubleLinkedList();
dll.append(10);
dll.append(20);
dll.printForward();
