// Stack

export class Stack<T> {

    private t: T[];

    constructor() {
        this.t = [];
    }

    public push(item: T) {
        this.t.push(item);
    }

    public pop(): T {
        return this.t.pop();
    }

    public isEmpty(): boolean {
        return !this.t.length;
    }

    public size(): number {
        return this.t.length;
    }
}


