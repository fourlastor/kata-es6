/*
 Generator functions are special kind of functions that will return an iterator object, and the execution of them will be controlled
 by the caller. They use a special syntax (with the asterisk after function) and a reserved keyword: yield

 The iterator object returned by this kind of functions has 2 methods: next and throw.

 next will continue the execution till the next yield instruction, it accepts an optional value (more on this later)
 throw will cause an exception to be thrown at the current execution point of the function (we won't get over throw today)

 while executing the function, the value sent with yield will be contained in the iterator.next() result: {value: yieldedValue, done: false}
 when the last yield instruction has been executed, next will return an object containing {value: undefined, done: true}

 the parameter you send in the next() function will be assigned to the right side of yield, if any

 so, to recap:

 yield something // iterator.next().value === something

 const something = yield // something will be equal to whatever passed to iterator.next(something)

 a very common pattern is to have them in the same line:

 const someResult = yield operation()

 The way to read them is from top to bottom, right to left, the execution will stop as soon as you hit a yield.

 function* example() {
 const something = yield
 yield something
 }

 const iterator = example()
 iterator.next() // {value: undefined, done: true} stops just before the equal sign, there's nothing to the right of the first yield so it's undefined
 iterator.next(1) // {value: 1, done: false} something is now 1 (executes the equal sign), will yield something back (because the next yield is on the left in the second line)
 iterator.next() // {value: undefined, done: true}
 */

function* threeNumbers() {
    // yields 1, 2, 3, then terminates
}

function* infiniteNumbers() {
    // continue yielding numbers forever, starting with 0 and increasing by 1 every time
}

function* accumulateValues() {
    // adds and yield the result, starts with 0
}

module.exports = {
    threeNumbers,
    infiniteNumbers,
    accumulateValues
}
