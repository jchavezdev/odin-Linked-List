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

    //size
    size(){
      let current = this.head;
      let count = 0;
      while(current){
        count+=1;
        current = current.next
      }
      return count;
    }

    //head
    getHead(){
      let current = this.head;
      return current;
    }

    //tail
    tail(){
      let current = this.head;
      let tail = "";
      while(current){
        current = current.next;
        if(!current.next){
          return current;
        }
      }
    }

    //at(index)
    at(index){
      let current = this.head;
      let count = 0;
      while(current){
        if(count === index){
          return current
        }
        current = current.next
        count+=1;
      }
      return "Not in the list"
    }

    //pop
    pop() {
      if (!this.head) {
        // Empty list
        return null;
      }
    
      if (!this.head.next) {
        //One element
        const popped = this.head;
        this.head = null;
        return popped;
      }
    
      //More nodes
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
    
      const popped = current.next;
      current.next = null;
      return popped;
    }
    

    //contains(value)
    contains(value){
      let current = this.head;
      while(current){
        if(current.value===value){
          return true;
        }
        current = current.next;
      }
      return false;
    }

    //find(value)
    find(value){
      let current = this.head;
      let count = 0;
      while(current){
        if(current.value === value){
          return count;
        }
        current = current.next;
        count+=1;
      }
      return null;
    }

    //toString
    toString(){
      let string = "";
      let current = this.head;
      while(current){
        //"(" + current.value + ") -> "
        string= string +"("+current.value +") -> ";
        current = current.next;
      }
      string+=" null";
      return string;
    }
  }

  // example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size());
console.log(list.tail());
console.log(list.at(1));
console.log(list.contains("cat"));
console.log(list.find("shark"));
console.log(list.getHead());
console.log(list.toString());