class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node at the end
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Add a new node at the beginning
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Print the list
    printList() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.value + "->";
        current = current.next;
      }
      console.log(result + "null");
    }
  }