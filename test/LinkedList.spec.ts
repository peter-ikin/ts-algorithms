import { LinkedList } from "../src/LinkedList";

class TestClass {
    private name: string = "TestClass";
    public getName(): string { return this.name; }
}

describe("LinkedList should be constructable with ", () => {
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

    it("primitive type number and have an initial length of zero", () => {
        let ll = new LinkedList<number>();
        expect(ll.length()).toBe(0);
    });
});

describe("LinkedList isEmpty ", () => {
    it("should be true for newly constructed lists", () => {
        let ll = new LinkedList<TestClass>();
        expect(ll.isEmpty()).toBe(true);
    });

    it("should be false for lists with one item", () => {
        let ll = new LinkedList<TestClass>();
        ll.append(new TestClass());
        expect(ll.isEmpty()).toBe(false);
    });

    it("should be false for lists with more than one item", () => {
        let ll = new LinkedList<number>();
        ll.append(12);
        ll.append(13);
        ll.append(16);
        expect(ll.isEmpty()).toBe(false);
    });
});

describe("LinkedList append method ", () => {
   it("should increase length by 1 for primitive type number", () => {
       let ll = new LinkedList<number>();
       ll.append(3);
       expect(ll.length()).toBe(1);
   });
});

describe("LinkedList append '3' to empty number list ", () => {
    it("first node should be '3'", () => {
        let ll = new LinkedList<number>();
        ll.append(3);
        expect(ll.first().item).toBe(3);
    });

    it("last node should be '3'", () => {
        let ll = new LinkedList<number>();
        ll.append(3);
        expect(ll.last().item).toBe(3);
    });
});