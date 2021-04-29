class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (!this.head) {
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
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            // console.log(`${this.tail.next.val} is the value to be popped`);
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let mid = Math.floor((this.length - 1) / 2);
        let current;
        let counter;
        if (index > mid) {
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
        if (index <= mid) {
            counter = 0;
            current = this.head
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
        if (index === 0) return this.head;
    }

    set(index, val) {
        let curr = this.get(index);
        curr.val = val;
        return curr;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) this.unshift(node);
        if (index === this.length) this.push(node);
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

    delete(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) this.shift();
        if (index === this.length) this.pop();
        let poppins = this.get(index);
        let curr = poppins.next;
        let previous = poppins.prev;
        previous.next = curr;
        curr.prev = previous;
        poppins.next = null;
        poppins.prev = null;
        this.length--;
        return poppins;
    }

}

let list = new DoublyLinkedList();

list.push('starting');
list.push(420);
list.push(69);
list.push('Sopranos');
list.push('Peaky Blinders');
list.push('ending');