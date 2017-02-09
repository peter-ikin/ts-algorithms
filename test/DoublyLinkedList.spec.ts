import { DoublyLinkedList } from "../src/DoublyLinkedList";

class TestClass {
    private name: string = "TestClass";
    public getName(): string { return this.name; }
}

describe("DoublyLinkedList should be constructable with ", () => {
    it("primitive type number", () => {
        expect(typeof new DoublyLinkedList<number>()).toBe("object");
    });

    it("primitive type string", () => {
        expect(typeof new DoublyLinkedList<string>()).toBe("object");
    });

    it("primitive type boolean", () => {
        expect(typeof new DoublyLinkedList<boolean>()).toBe("object");
    });

    it("non-primitive type TestClass", () => {
        expect(typeof new DoublyLinkedList<TestClass>()).toBe("object");
    });
});