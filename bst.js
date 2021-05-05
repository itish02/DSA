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
        while (true) {
            if (value < current.value) {
                if (!current.left) return false;
                current = current.left;
                if (value === current.value) return true;
            } else if (value > current.value) {
                if (!current.right) return false;
                current = current.right;
                if (value === current.value) return true;
            }
        }
    }
}


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(12);
tree.insert(9);
tree.insert(17);