import { Queue } from "../src/Queue";

class TestClass {
    private name: string = "TestClass";
    public getName(): string { return this.name; }
}

describe("Queue should be constructable with ", () => {
    it("primitive type number", () => {
        expect(typeof new Queue<number>()).toBe("object");
    });

    it("primitive type string", () => {
        expect(typeof new Queue<string>()).toBe("object");
    });

    it("primitive type boolean", () => {
        expect(typeof new Queue<boolean>()).toBe("object");
    });

    it("non-primitive type TestClass", () => {
        expect(typeof new Queue<TestClass>()).toBe("object");
    });
});

describe("Queue isEmpty ", () => {
    it("should return true for newly created queues", () => {
        let stack = new Queue<number>();
        expect(stack.isEmpty()).toBe(true);
    });
});
