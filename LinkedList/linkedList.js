class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    //creating new node
    let node = new Node(element);

    // to store current node
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("please enter valid index");
    } else {
      let node = new Node(element);

      let curr, prev;

      //add the element at first index
      if (index == 0) {
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

  isEmpty() {
    return this.size == 0;
  }

  size_of_list() {
    console.log(this.size);
  }

  printList() {
    let curr = this.head;

    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }

    console.log(str);
  }
}

var L1 = new LinkedList();

L1.add(5);
L1.add(6);
L1.add(7);
L1.insertAt(40, 2);
L1.printList();
console.log("Is list empty :", L1.isEmpty());
L1.size_of_list();
