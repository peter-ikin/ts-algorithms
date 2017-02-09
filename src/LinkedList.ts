export interface ILinkedNode<T> {
    item: T;
    next: ILinkedNode<T>;
}

export class LinkedList<T> {

    private firstNode: ILinkedNode<T> = null; // a.k.a. head
    private lastNode: ILinkedNode<T> = null; // a.k.a. tail
    private numElements: number = 0;

    public append() {}
    public prepend() {}
    public isEmpty() {}
    public length() {}
    public first() {}
    public last() {}
    public insertAfter() {}
    public insertBefore() {}
    public remove() {}
    public clear() {}
}
