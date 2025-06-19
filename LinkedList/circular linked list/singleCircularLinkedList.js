class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleCircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.head.next = this.head;
    } else {
      let current = this.head;

      // traverse to the last node
      while (current.next !== this.head) {
        current = current.next;
      }

      current.next = node;
      node.next = current;
    }
  }
}

const scl = new SingleCircularLinkedList();
scl.append(10);
scl.append(20);
scl.append(30);

console.log(scl.head);
