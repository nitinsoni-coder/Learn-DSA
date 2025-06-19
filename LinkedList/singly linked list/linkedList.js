class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addElement(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return "please enter valid index";
    } else {
      let node = new Node(element);

      let curr, prev;

      // curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeELement(element) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    if (this.head.data === element) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== element) {
      prev = current;
      current = current.next;
    }

    if (current && current.data === element) {
      prev.next = current.next;
      this.size--;
    } else {
      console.log("element not found");
    }
  }

  getSize() {
    console.log("size :", this.size);
  }
}

const linkedlist = new LinkedList();
linkedlist.addElement(2);
linkedlist.addElement(4);
linkedlist.addElement(6);

console.log(linkedlist.head);
linkedlist.removeELement(6);
linkedlist.insertAt(3, 1);
linkedlist.getSize();

