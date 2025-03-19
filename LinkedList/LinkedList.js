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
    if (!this.head) return;

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
      }
      this.size--;
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

    if (!curr) return;

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
    if (!this.head) return;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log("Midpoint:", slow.data);
  }

  reverse() {
    let curr = this.head,
      prev = null,
      forw = null;

    while (curr !== null) {
      forw = curr.next;
      curr.next = prev;
      prev = curr;
      curr = forw;
    }

    this.tail = this.head;
    this.head = prev;
  }

  merge(otherList) {
    let dummy = new Node(0);
    let curr = dummy;
    let l1 = this.head;
    let l2 = otherList.head;

    while (l1 !== null && l2 !== null) {
      if (l1.data < l2.data) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }

    if (l1 !== null) {
      curr.next = l1;
    } else if (l2 !== null) {
      curr.next = l2;
    }

    this.head = dummy.next;

    let temp = this.head;
    while (temp && temp.next !== null) {
      temp = temp.next;
    }
    this.tail = temp;
  }
}

const list1 = new LinkedList();
list1.append(10);
list1.prepend(20);
list1.append(80);
list1.append(40);
list1.append(90);
list1.append(60);
list1.insert(70, 3);
list1.delete(60);

console.log("List 1:");
list1.print();
list1.midpoint();
list1.reverse();
console.log("Reversed List 1:");
list1.print();

const list2 = new LinkedList();
list2.append(30);
list2.append(50);
list2.append(100);
list2.append(60);

console.log("List 2:");
list2.print();

list1.merge(list2);

console.log("Merged List:");
list1.print();
