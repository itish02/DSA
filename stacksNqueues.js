class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    };

    push(value) {
        let node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        };
        return ++this.size;
    }

    pop() {
        let poppedNode = this.first;
        if (!this.first) return null;
        if (this.size === 1) this.last = null;
        this.first = this.first.next;
        this.size--;
        return poppedNode.value;
    }
}

let stack = new Stack();

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

    dequeue() {
        let temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        };
        this.size--;
        return temp;
    }
}

let queue = new Queue();