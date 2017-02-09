export interface IDoublyLinkedNode<T> {
    item: T;
    next: IDoublyLinkedNode<T>;
    prev: IDoublyLinkedNode<T>;
}

export class DoublyLinkedList<T> {

    private firstNode: IDoublyLinkedNode<T> = null; // a.k.a. head
    private lastNode: IDoublyLinkedNode<T> = null; // a.k.a. tail
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
