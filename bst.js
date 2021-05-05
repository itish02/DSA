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
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return 'Duplicate vertex not allowed!'
                if (value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left
                    };
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
        return this;
    }
}


const tree = new BinarySearchTree();