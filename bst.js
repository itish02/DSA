class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(value) {
        let node = new Node(value)
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return 'Duplicate vertex not allowed!'
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = node;

                    return this;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        if (!this.root) return undefined;
        let current = this.root;
        if (value === current.value) return true;
        while (true && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(17);
tree.DFSPreOrder();

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value)
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
        return this;
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
        return element;
    }
};

let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(45);