class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    };
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        let poppedNode = this.tail;
        if (this.length === 0) return undefined;
        if (this.length === 1) this.head = null;
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        };
        this.length--;
        return poppedNode
    }
}

let list = new DoublyLinkedList();