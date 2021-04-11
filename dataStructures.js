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
console.log(harry);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}