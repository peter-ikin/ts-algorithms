import { LinkedList } from "../src/LinkedList";

class TestClass {
    private name: string = "TestClass";
    public getName(): string { return this.name; }
}

describe("DoublyLinkedList should be constructable with ", () => {
    it("primitive type number", () => {
        expect(typeof new LinkedList<number>()).toBe("object");
    });

    it("primitive type string", () => {
        expect(typeof new LinkedList<string>()).toBe("object");
    });

    it("primitive type boolean", () => {
        expect(typeof new LinkedList<boolean>()).toBe("object");
    });

    it("non-primitive type TestClass", () => {
        expect(typeof new LinkedList<TestClass>()).toBe("object");
    });
});