class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
let ER = new PriorityQueue();
ER.enqueue('cold 🤧', 1)
ER.enqueue('gunshot 😵', 5)
ER.enqueue('concussion 🤕', 4);
ER.enqueue('high fever', 2);

// Question from CRED

const applySpec = (obj) => (val1, val2) => {
    let newObj = {};
    for (key in obj) {
        if (typeof(obj[key]) === 'function') {
            newObj[key] = obj[key](val1, val2);
            // console.log(newObj);
        } else if (typeof(obj[key] === 'object')) {
            let keyString = `${key}`;
            const func = applySpec(obj[key]);
            let secObj = func(val1, val2);
            newObj[keyString] = secObj;
            // console.log(newObj, secObj);
        }
    }
    return newObj;
}

const spec = applySpec({
    sum: (a, b) => a + b,
    nestedMul: {
        mul: (a, b) => a * b
    },
    doubleNested: {
        power: {
            pw: (a, b) => Math.pow(a, b)
        }
    }
})