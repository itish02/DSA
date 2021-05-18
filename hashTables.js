const hash = (key, arrLength) => {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96; // gives the alphabetical rank
        total = (total + value) % arrLength;
    }
    return total;
}