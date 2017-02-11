export interface ILinkedNode<T> {
    item: T;
    next: ILinkedNode<T>;
}

export class LinkedList<T> {

    private firstNode: ILinkedNode<T> = null; // a.k.a. head
    private lastNode: ILinkedNode<T> = null; // a.k.a. tail
    private numElements: number = 0;

    public append(item: T) {
        let oldLast = this.lastNode;
        this.lastNode = this.createNode(item);
        if (this.isEmpty()) {
            this.firstNode = this.lastNode;
        } else {
            oldLast.next = this.lastNode;
        }
        this.numElements++;
    }

    public prepend() {}

    public isEmpty() {
        return this.numElements === 0;
    }

    public length() {
        return this.numElements;
    }

    public first(): ILinkedNode<T> {
        return this.firstNode;
    }

    public last(): ILinkedNode<T> {
        return this.lastNode;
    }

    public insertAfter() {}
    public insertBefore() {}
    public remove() {}
    public clear() {}

    private createNode(item: T): ILinkedNode<T> {
        return {item: item, next: null};
    }
}
