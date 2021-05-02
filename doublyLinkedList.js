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

    // ADDING METHODS
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

    unshift(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            node.prev = null;
        }
        this.length++;
        return node;
    }

    insert(index, val) {
        if (index === 0) this.unshift(val);
        if (index === this.length - 1) this.push(val);
        let node = new Node(val);
        let previous = this.get(index - 1);
        let current = previous.next;
        previous.next = node;
        node.next = current;
        node.prev = previous;
        current.prev = node;
        this.length++;
        return node;

    }

    // REMOVING METHODS
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

    shift() {
        let delNode = this.head;
        if (this.length === 0) return undefined;
        if (this.length === 1) this.head = null;
        else {
            this.head = this.head.next;
            this.head.prev = null;
            delNode.next = null;
        }
        this.length--;
        return delNode;
    }

    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let current = this.get(index);
        let previous = current.prev;
        let next = current.next;
        previous.next = next;
        next.prev = previous;
        current.next = null;
        current.prev = null;
        this.length--;
        return current;
    }

    // ACCESS METHODS
    get(index) {
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;
        if (index < 0 || index >= this.length) return `Please enter valid index`
        let current;
        let counter;
        let mid = Math.floor((this.length - 1) / 2);
        if (index <= mid) {
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
        if (index > mid) {
            counter = this.length - 1;
            current = this.tail;
            while (index !== counter) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }

    set(index, val) {
        let curr = this.get(index - 1);
        curr.val = val;
        return curr;
    }
}

let list = new DoublyLinkedList();
list.push(3)
list.push(99)
list.push(69)
list.push('preach')
list.push('Cadilac')
list.push('Ford')
list.push('Merc')
list.push('Range Rover')

class PointerNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new PointerNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}

let newList = new SinglyLinkedList();