const hashFunc = (key, arrLength) => {
    let total = 0;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let val = char.charCodeAt(0) - 96;
        total = (total * weird_prime + val) % arrLength;
    }
    return total;
}

// HASH CLASS
class Hash {
    constructor(size = 53) {
        this.keymap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let weird_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let val = char.charCodeAt(0) - 96;
            total = (total * weird_prime + val) % this.keymap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keymap[index]) {
            this.keymap[index] = [];
        }
        this.keymap[index].push([key, value]);
    }
}

let hashTable = new Hash();