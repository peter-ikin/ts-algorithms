import { Stack } from "../src/Stack";

class TestClass {
    private name: string = "TestClass";
    public getName(): string { return this.name; }
}

describe("Stack should be constructable with ", () => {
    it("primitive type number", () => {
        expect(typeof new Stack<number>()).toBe("object");
    });

    it("primitive type string", () => {
        expect(typeof new Stack<string>()).toBe("object");
    });

    it("primitive type boolean", () => {
        expect(typeof new Stack<boolean>()).toBe("object");
    });

    it("non-primitive type TestClass", () => {
        expect(typeof new Stack<TestClass>()).toBe("object");
    });
});

describe("Stack push should increase size by 1 for", () => {
    it("number types", () => {
        let stack = new Stack<number>();
        stack.push(1);
        expect(stack.size()).toBe(1);
    });

    it("string types", () => {
        let stack = new Stack<string>();
        stack.push("test");
        expect(stack.size()).toBe(1);
    });

    it("boolean types", () => {
        let stack = new Stack<boolean>();
        stack.push(true);
        expect(stack.size()).toBe(1);
    });

    it("non-primitive type TestClass", () => {
        let stack = new Stack<TestClass>();
        stack.push(new TestClass());
        expect(stack.size()).toBe(1);
    });

    it("stacks with existing items on them", () => {
       let stack = new Stack<number>();
       stack.push(111);
       expect(stack.size()).toBe(1);
       stack.push(222);
       expect(stack.size()).toBe(2);
       stack.push(333);
       stack.push(444);
       expect(stack.size()).toBe(4);
    });
});

describe("Stack pop", () => {
    it("should do nothing for an empty stack", () => {
        let stack = new Stack<number>();
        stack.pop();
        expect(stack.size()).toBe(0);
    });
});

describe("Stack pop should decrease size by 1 for", () => {
    it("number types", () => {
        let stack = new Stack<number>();
        stack.push(1);
        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it("string types", () => {
        let stack = new Stack<string>();
        stack.push("test");
        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it("boolean types", () => {
        let stack = new Stack<boolean>();
        stack.push(true);
        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it("non-primitive type TestClass", () => {
        let stack = new Stack<TestClass>();
        stack.push(new TestClass());
        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it("stacks with multiple items on them", () => {
        let stack = new Stack<number>();
        stack.push(111);
        stack.push(222);
        stack.push(333);
        stack.push(444);
        expect(stack.size()).toBe(4);
        stack.pop();
        expect(stack.size()).toBe(3);
        stack.pop();
        expect(stack.size()).toBe(2);
        stack.pop();
        expect(stack.size()).toBe(1);
        stack.pop();
        expect(stack.size()).toBe(0);
    });
});

describe("Stack isEmpty ", () => {
    it("should return true for newly created stacks", () => {
        let stack = new Stack<number>();
        expect(stack.isEmpty()).toBe(true);
    });

    it("should return false for stacks with one item", () => {
        let stack = new Stack<number>();
        stack.push(3);
        expect(stack.isEmpty()).toBe(false);
    });

    it("should return false for stacks with several items", () => {
        let stack = new Stack<number>();
        stack.push(3);
        stack.push(543);
        stack.push(231);
        expect(stack.isEmpty()).toBe(false);
    });

    it("should return true for empty stacks that have had all added items removed", () => {
        let stack = new Stack<number>();
        stack.push(3);
        stack.push(543);
        stack.push(231);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });


});
