class Student {
    constructor(firstName, lastName, course) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
        this.late = 0;
        this.scores = [];
    }
    description() {
        return `This is ${this.firstName} ${this.lastName}. A ${this.course} student.`;
    }
    markLate() {
        this.late += 1;
        return `${this.firstName} ${this.lastName}, you have been late ${this.late} times now!`
    }
    markScores(score) {
        this.scores.push(score);
        return this.scores;
    }
    getAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        let avg = sum / this.scores.length;
        return `You have scored ${avg}% marks.`
    }
}

let harry = new Student('Harry', 'Potter', 'Witchcraft');

// console.log(harry);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    };
}

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// SINGLY LINKED LIST
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
            let newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail = this.tail.next;
            }
            this.length++;
            return this;
        }
        // traverse() {
        //     let current = this.head;
        //     while (current) {
        //         console.log(current.val);
        //         current = current.next;
        //     }
        // }
    pop() {
        if (!this.head) return;
        let current = this.head;
        let previous = current;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('you');
list.push(99);
list.unshift(69);
// list.shift();
// list.pop();
// console.log(list);

// let first = new Node('Hi');
// first.next = new Node('What\'s');
// first.next.next = new Node('Up');
// console.log(first); BAD WAY OF WRITING A LINKED LIST