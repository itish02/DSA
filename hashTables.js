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
    constructor(size = 5) {
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

    get(key) {
        let index = this._hash(key);
        if (this.keymap[index]) {
            for (let i = 0; i < this.keymap[index].length; i++) {
                if (this.keymap[index][i][0] === key) {
                    return this.keymap[index][i][1];
                }
            }
        }
        return undefined;
    }
}

let hashTable = new Hash(10);
hashTable.set('red', '#FF0000');
hashTable.set('blue', '#0000FF');
hashTable.set('green', '#008000');
hashTable.set('maroon', '#800000');
hashTable.set('dark gray', '#A9A9A9');
hashTable.set('lemon', '#FFFACD');
hashTable.set('olive', '#808000');
hashTable.set('yellow', '#FFFF00');