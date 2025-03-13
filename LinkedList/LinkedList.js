class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    this.size++;
  }

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let curr = this.head;
    while (curr.next !== null && curr.next.data !== data) {
      curr = curr.next;
    }
    if (curr.next !== null) {
      curr.next = curr.next.next;

      if (curr.next === null) {
        this.tail = curr;
        this.size--;
      }
    }
  }

  print() {
    let pointer = this.head;
    let result = "";

    while (pointer !== null) {
      result += pointer.data + "->";
      pointer = pointer.next;
    }

    console.log(result + "null");
  }
}

const list = new LinkedList();
list.append(10);
list.prepend(20);
list.print();
list.delete(10);
list.print();
console.log(list.size);
