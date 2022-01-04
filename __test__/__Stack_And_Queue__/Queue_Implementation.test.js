
'use strict';

let Queue = require("../../class_Directory/Queue/Queue");

let myEmptyQueue = new Queue();

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

describe("Queue Implementation", () => {
    test("enqueue Method", () => {
        expect(myQueue.enqueue(5)).toStrictEqual("Successfully Added");
        expect(myQueue.toString()).toStrictEqual("1 -> 2 -> 3 -> 4 -> 5 -> Null");

        expect(myEmptyQueue.enqueue(5)).toStrictEqual("Added First node successfully");
        expect(myEmptyQueue.toString()).toStrictEqual("5 -> Null");
    });

    test("dequeue Method", () => {
        expect(myQueue.dequeue()).toStrictEqual(1);
        expect(myQueue.dequeue()).toStrictEqual(2);

        expect(myEmptyQueue.dequeue()).toStrictEqual(5);
        expect(myEmptyQueue.dequeue()).toStrictEqual("Empty Queue");
        expect(myEmptyQueue.toString()).toStrictEqual("Empty Queue");
    });

    test("peek Method", () => {
        expect(myQueue.peek()).toStrictEqual(3);

        expect(myEmptyQueue.peek()).toStrictEqual("Empty Queue");
    });

    test("is Empty Method", () => {
        expect(myQueue.isEmpty()).toBe(false);

        expect(myEmptyQueue.isEmpty()).toBe(true);
    });
})