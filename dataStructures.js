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

    get(index) {
        if (index < 0 || index > this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        let node = new Node(val);
        if (index < 0 || index > this.length) return null;
        if (index === this.length) this.push(node);
        if (index === 0) this.unshift(node);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = node;
        node.next = temp;
        this.length++;
        return true;
    }

    delete(index) {
        if (index < 0 || index > this.length) return null;
        if (index === this.length) this.pop();
        if (index === 0) this.shift();
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = temp.next;
        this.length--;
        return true;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('you');
list.push(99);
list.unshift(69);
// list.insert(2, 'new val');
// list.shift();
// list.pop();
// console.log(list);

// let first = new Node('Hi');
// first.next = new Node('What\'s');
// first.next.next = new Node('Up');
// console.log(first); BAD WAY OF WRITING A LINKED LIST

// let reg = /itish/;
// reg = /itish/g; g -> global (will search of every occurrence instead of 1)
// reg = /itish/i;  i -> case insensitivity
// console.log(reg);
// console.log(typeof(reg));
// console.log(reg.source);

// let s = 'hi my name is itis dhiman and my friends call me itis';
// let res = reg.exec(s);
// res = reg.exec(s);
// console.log(res);
// res = reg.exec(s);
// console.log(res); (we can use multiple exec() with global flag)
// if (res) {
//     console.log(res);
//     console.log(res[0]);
//     console.log(res.index);
//     console.log(res.input);
// }

// console.log(reg.test(s));

// let newExp = /pain/g;
// let str = 'Living in Spain but the S is silent, thus living in pain.';

// let match = str.match(newExp);
// // console.log(match);

// let search = str.search(newExp);
// // console.log(search);

// let replace = str.replace(newExp, 'iberia');
// console.log(replace);

// let exp = new RegExp('itish');
// console.log(exp);

// let regex = /itish/;

// regex = /^iti/; // ^ means 'starts with'
// regex = /ish$/; // $ -> 'ends with'
// regex = /i.ish/; // . -> matches any one character in its place;
// regex = /i*ish/; // * -> matches 0 or more number of characters in its place;
// regex = /iti?shj?x/; // ? -> characters adjacent to ? are optional;
// regex = /iti\#h/; // \# -> this backslash is used to have special characters or symbols in our regexp, the symbols can be anything (@, #, $, %) etc.

// let str = 'iti#h';

// let result = regex.exec(str);
// console.log('The result from exec is ->', result);

// if (regex.test(str)) {
//     console.log(`The string '${str}' matches the expression ${regex.source}`);
// } else {
//     console.log(`The string '${str}' does not match the expression ${regex.source}`);
// }

// CHARACTER SETS
// let regex = /i[a - z]ish/;
// regex = /i[a-zA-Z]i[^adeADE]h[0-10]/;
// regex = /itis{0,2}h/;
// regex = /(iti){2}([0-9]sh){3}/;
// const str = 'itiiti1sh2sh3sh dhiman';

// let result = regex.exec(str);
// console.log('The result from exec is ->', result);

// if (regex.test(str)) {
//     console.log(`The string '${str}' matches the expression ${regex.source}`);
// } else {
//     console.log(`The string '${str}' does not match the expression ${regex.source}`);
// }

// const getData = (url) => {
//     fetch(url).then(response => {
//         // console.log(response);
//         return response.json();
//     }).then(data => console.log(data));
// }

// const url = 'https://game-of-thrones-quotes.herokuapp.com/v1/random';
// getData(url);



// let regex = /\wish/; // -> works for word char, alphabets, numbers, _
// regex = /\w+2hh/; // -> one or more word characters
// regex = /\Wdh/; // -> non word characters
// regex = /\W+dh/; // -> one or more non word characters
// regex = /\d50/; // -> matches with digit characters
// regex = /\d+/; // -> one or more digits
// regex = /\D23/; // -> non digit characters
// regex = /\sdh/; // -> for matching white space character
// regex = /\s+dh/; // -> for matching more than one white space character
// regex = /\Ssh/; // -> for matching non white space characters
// regex = /ish\b/; // -> word boundary

// // ASSERTIONS
// regex = /m(?=x)/; // -> will only match if the character after m is x
// regex = /m(?!x)/; // -> will only match if the character after m is NOT x

// const str = 'itish dhiman and Becks23';

// let result = regex.exec(str);
// console.log('The result from exec is ->', result);

// if (regex.test(str)) {
//     console.log(`The string '${str}' matches the expression ${regex.source}`);
// } else {
//     console.log(`The string '${str}' does not match the expression ${regex.source}`);
// }