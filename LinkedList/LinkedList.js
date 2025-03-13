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

  insert(data, index) {
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let curr = this.head;
    let count = 0;
    while (curr !== null && count < index - 1) {
      curr = curr.next;
      count++;
    }

    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
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

  midpoint() {
    let slow = this.head;
    let fast = this.head;

    while (slow.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow.data);
  }

  reverse() {
    let curr = this.head,
      forw,
      prev = null;

    while (curr != null) {
      forw = curr.next;
      curr.next = prev;
      prev = curr;
      curr = forw;
    }

    this.head = prev;
  }
}

const list = new LinkedList();
list.append(10);
list.prepend(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.insert(70, 3);
list.delete(60);
list.print();
list.midpoint();
list.reverse();
list.print();
console.log(list.size);
